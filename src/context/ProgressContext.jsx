import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { courseModules } from '../data/courseData';

const STORAGE_KEY = 'ghl-va-course-progress';
const defaultModuleState = {
    completed: false,
    quizScore: null,
    quizPassed: false,
    labSubmitted: false,
    labSubmission: '',
};

const ProgressContext = createContext();

const loadProgress = () => {
    if (typeof window === 'undefined') return { modules: {} };
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) return JSON.parse(stored);
    } catch (error) {
        console.error('Failed to load progress from storage', error);
    }
    return { modules: {} };
};

export const ProgressProvider = ({ children }) => {
    const [progress, setProgress] = useState(loadProgress);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        } catch (error) {
            console.error('Failed to persist progress to storage', error);
        }
    }, [progress]);

    const getModuleProgress = (moduleId) => {
        return progress.modules[moduleId] ?? defaultModuleState;
    };

    const updateModule = (moduleId, updates) => {
        setProgress((prev) => {
            const prevState = prev.modules[moduleId] ?? defaultModuleState;
            const updatedModule = { ...prevState, ...updates, lastUpdated: new Date().toISOString() };
            return { ...prev, modules: { ...prev.modules, [moduleId]: updatedModule } };
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

    const isModuleUnlocked = (moduleId) => {
        const moduleIndex = courseModules.findIndex((m) => m.id === moduleId);
        const module = courseModules[moduleIndex];
        if (!module) return false;

        if (module.type === 'resource' || module.type === 'intro') return true;

        const blockingModule = [...courseModules.slice(0, moduleIndex)].reverse().find((m) => m.type !== 'resource');
        if (!blockingModule) return true;

        return getModuleProgress(blockingModule.id).completed;
    };

    const getModuleProgressPercent = (moduleId) => {
        const moduleProgress = getModuleProgress(moduleId);
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

    const value = useMemo(
        () => ({
            progress,
            markQuizResult,
            submitLab,
            markCompleted,
            getModuleProgress,
            isModuleUnlocked,
            getModuleProgressPercent,
            completedCount,
            totalTrackableModules: trackableModules.length,
            averageProgress,
        }),
        [progress]
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
