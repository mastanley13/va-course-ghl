import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { courseModules, ORIENTATION_MODULE_ID } from '../data/courseData';
import { useAuth } from './AuthContext';
import { supabase } from '../lib/supabaseClient';

const defaultModuleState = {
    completed: false,
    quizScore: null,
    quizPassed: false,
    labSubmitted: false,
    labSubmission: '',
};

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
    const { currentUser, loading: authLoading } = useAuth();
    const [progress, setProgress] = useState({}); // { [moduleId]: moduleData }
    const [loading, setLoading] = useState(true);

    // 1. Fetch User Progress on Login
    useEffect(() => {
        const fetchProgress = async () => {
            if (!currentUser) {
                setProgress({});
                setLoading(false);
                return;
            }

            try {
                const { data, error } = await supabase
                    .from('user_progress')
                    .select('*')
                    .eq('user_id', currentUser.id);

                if (error) throw error;

                // Transform array to object map
                const progressMap = {};
                data.forEach(row => {
                    progressMap[row.module_id] = {
                        completed: row.completed,
                        quizScore: row.quiz_score,
                        quizPassed: row.quiz_passed,
                        labSubmitted: row.lab_submitted,
                        labSubmission: row.lab_submission,
                        lastUpdated: row.last_updated
                    };
                });

                setProgress(progressMap);
            } catch (error) {
                console.error('Error fetching progress:', error);
            } finally {
                setLoading(false);
            }
        };

        if (!authLoading) {
            fetchProgress();
        }
    }, [currentUser, authLoading]);

    const getModuleProgress = (moduleId) => {
        return progress[moduleId] ?? defaultModuleState;
    };

    const updateModule = async (moduleId, updates) => {
        if (!currentUser) return;

        // Optimistic UI Update
        setProgress(prev => ({
            ...prev,
            [moduleId]: { ...(prev[moduleId] ?? defaultModuleState), ...updates }
        }));

        try {
            const { error } = await supabase
                .from('user_progress')
                .upsert({
                    user_id: currentUser.id,
                    module_id: moduleId,
                    completed: updates.completed ?? getModuleProgress(moduleId).completed,
                    quiz_score: updates.quizScore ?? getModuleProgress(moduleId).quizScore,
                    quiz_passed: updates.quizPassed ?? getModuleProgress(moduleId).quizPassed,
                    lab_submitted: updates.labSubmitted ?? getModuleProgress(moduleId).labSubmitted,
                    lab_submission: updates.labSubmission ?? getModuleProgress(moduleId).labSubmission,
                    last_updated: new Date().toISOString()
                }, { onConflict: 'user_id, module_id' });

            if (error) throw error;
        } catch (error) {
            console.error('Error saving progress:', error);
            // Revert optimistic update if needed (omitted for simplicity, but recommended for prod)
        }
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

    // Cohort Progress Fetcher (Admin Only typically)
    const getCohortProgress = async () => {
        // This requires a different query or RPC if fetching ALL users. 
        // For now, we'll return empty or implement a specific admin query if user requests.
        // Given the requirement is primarily individual persistence, we'll pause on full admin dashboard data fetching 
        // until requested, or fetch 'profiles' joined with 'user_progress' if needed.
        return [];
    };

    const value = useMemo(
        () => ({
            progress,
            loading,
            markQuizResult,
            submitLab,
            markCompleted,
            getModuleProgress,
            isModuleUnlocked,
            getModuleProgressPercent,
            completedCount,
            totalTrackableModules: trackableModules.length,
            averageProgress,
            getCohortProgress,
        }),
        [progress, loading, currentUser, averageProgress, completedCount]
    );

    return <ProgressContext.Provider value={value}>{!loading && children}</ProgressContext.Provider>;
};

export const useProgress = () => {
    const context = useContext(ProgressContext);
    if (!context) {
        throw new Error('useProgress must be used within a ProgressProvider');
    }
    return context;
};
