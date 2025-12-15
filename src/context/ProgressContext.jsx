import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { courseModules, ORIENTATION_MODULE_ID } from '../data/courseData';
import { useAuth } from './AuthContext';

const STORAGE_KEY = 'ghl-va-course-progress-v2';

const defaultModuleState = {
    completed: false,
    quizScore: null,
    quizPassed: false,
    labSubmitted: false,
    labSubmission: '',
    mediaProgress: {},
};

const createDefaultUserState = () => ({ modules: {} });

const ProgressContext = createContext();

const loadProgress = () => {
    if (typeof window === 'undefined') return { users: {} };
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) return JSON.parse(stored);
    } catch (error) {
        console.error('Failed to load progress from storage', error);
    }
    return { users: {} };
};

const persistProgress = (progress) => {
    if (typeof window === 'undefined') return;
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
        console.error('Failed to persist progress to storage', error);
    }
};

export const ProgressProvider = ({ children }) => {
    const { currentUser } = useAuth();
    const [progress, setProgress] = useState(loadProgress);

    useEffect(() => {
        persistProgress(progress);
    }, [progress]);

    const ensureUserState = (state, email) => {
        if (!email) return state;
        const userState = state.users[email] ?? createDefaultUserState();
        if (state.users[email]) return state;
        return { ...state, users: { ...state.users, [email]: userState } };
    };

    const getModuleProgress = (moduleId, userEmail = currentUser?.email) => {
        if (!userEmail) return defaultModuleState;
        const userState = progress.users[userEmail] ?? createDefaultUserState();
        return userState.modules[moduleId] ?? defaultModuleState;
    };

    const updateModule = (moduleId, updates) => {
        if (!currentUser?.email) return;
        setProgress((prev) => {
            const nextState = ensureUserState(prev, currentUser.email);
            const userState = nextState.users[currentUser.email] ?? createDefaultUserState();
            const prevModuleState = userState.modules[moduleId] ?? defaultModuleState;
            const updatePayload = typeof updates === 'function' ? updates(prevModuleState) : updates;
            const updatedModule = { ...prevModuleState, ...updatePayload, lastUpdated: new Date().toISOString() };
            const updatedUser = { ...userState, modules: { ...userState.modules, [moduleId]: updatedModule } };
            return { ...nextState, users: { ...nextState.users, [currentUser.email]: updatedUser } };
        });
    };

    const markQuizResult = (moduleId, score, passingScore) => {
        updateModule(moduleId, {
            quizScore: score,
            quizPassed: score >= passingScore,
        });
    };

    const submitLab = (moduleId, submission) => {
        updateModule(moduleId, {
            labSubmitted: true,
            labSubmission: submission,
        });
    };

    const markCompleted = (moduleId) => {
        updateModule(moduleId, { completed: true });
    };

    const markMediaCompleted = (moduleId, mediaId) => {
        if (!mediaId) return;
        updateModule(moduleId, (prevModuleState) => ({
            mediaProgress: {
                ...(prevModuleState.mediaProgress || {}),
                [mediaId]: { completed: true, completedAt: new Date().toISOString() },
            },
        }));
    };

    const isModuleUnlocked = (moduleId) => {
        const moduleIndex = courseModules.findIndex((m) => m.id === moduleId);
        const module = courseModules[moduleIndex];
        if (!module) return false;

        if (module.id === ORIENTATION_MODULE_ID) return true;
        if (module.type === 'resource' || module.type === 'intro') return true;

        const orientationProgress = getModuleProgress(ORIENTATION_MODULE_ID);
        const orientationCleared = orientationProgress.quizScore === 100 && orientationProgress.quizPassed;

        if (module.type === 'module' || module.type === 'capstone') {
            if (!orientationCleared) return false;
        }

        const blockingModule = [...courseModules.slice(0, moduleIndex)].reverse().find((m) => m.type !== 'resource');
        if (!blockingModule) return true;

        return getModuleProgress(blockingModule.id).completed;
    };

    const getModuleProgressPercent = (moduleId, userEmail = currentUser?.email) => {
        const moduleProgress = getModuleProgress(moduleId, userEmail);
        let percent = 0;
        if (moduleProgress.quizPassed) percent += 60;
        if (moduleProgress.labSubmitted) percent += 20;
        if (moduleProgress.completed) percent += 20;
        return Math.min(percent, 100);
    };

    const trackableModules = courseModules.filter((module) => module.type !== 'resource');

    const completedCount = trackableModules.filter((m) => getModuleProgress(m.id).completed).length;
    const averageProgress =
        trackableModules.reduce((total, module) => total + getModuleProgressPercent(module.id), 0) /
        (trackableModules.length || 1);

    const resetUserProgress = (email, moduleId) => {
        setProgress((prev) => {
            const userState = prev.users[email];
            if (!userState) return prev;
            if (moduleId) {
                const { [moduleId]: _removed, ...rest } = userState.modules;
                return { ...prev, users: { ...prev.users, [email]: { ...userState, modules: rest } } };
            }
            return { ...prev, users: { ...prev.users, [email]: createDefaultUserState() } };
        });
    };

    const getCohortProgress = () => {
        return Object.values(progress.users).map((user) => {
            const modules = user.modules || {};
            const stats = trackableModules.reduce(
                (acc, module) => {
                    const moduleProgress = modules[module.id] ?? defaultModuleState;
                    return {
                        completed: acc.completed + (moduleProgress.completed ? 1 : 0),
                        passed: acc.passed + (moduleProgress.quizPassed ? 1 : 0),
                        average: acc.average + getModuleProgressPercent(module.id, user.email),
                    };
                },
                { completed: 0, passed: 0, average: 0 }
            );

            return {
                email: user.email,
                name: user.name,
                role: user.role,
                modulesCompleted: stats.completed,
                quizzesPassed: stats.passed,
                averageProgress: Math.round(stats.average / (trackableModules.length || 1)),
                lastUpdated: Object.values(modules).reduce(
                    (latest, moduleProgress) =>
                        moduleProgress.lastUpdated && (!latest || moduleProgress.lastUpdated > latest)
                            ? moduleProgress.lastUpdated
                            : latest,
                    null
                ),
            };
        });
    };

    const value = useMemo(
        () => ({
            progress,
            markQuizResult,
            submitLab,
            markCompleted,
            markMediaCompleted,
            getModuleProgress,
            isModuleUnlocked,
            getModuleProgressPercent,
            completedCount,
            totalTrackableModules: trackableModules.length,
            averageProgress,
            resetUserProgress,
            getCohortProgress,
        }),
        [progress, currentUser, averageProgress, completedCount]
    );

    return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
};

export const useProgress = () => {
    const context = useContext(ProgressContext);
    if (!context) {
        throw new Error('useProgress must be used within a ProgressProvider');
    }
    return context;
};
