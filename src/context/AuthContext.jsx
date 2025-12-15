import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { courseModules } from '../data/courseData';

const STORAGE_KEY = 'va-course-users';
const CURRENT_USER_KEY = 'va-course-current-user';
const INVITE_CODE = 'GHL-COHORT-2025';
const ADMIN_CODE = 'GHL-ADMIN-2025';

const AuthContext = createContext(null);

const readUsers = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
    } catch (error) {
        console.error('Failed to parse user store', error);
    }
    return [];
};

const writeUsers = (users) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

const getModuleOrder = () => courseModules.filter((module) => module.type === 'module');

export const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(() => readUsers());
    const [currentUserEmail, setCurrentUserEmail] = useState(() => localStorage.getItem(CURRENT_USER_KEY));
    const [error, setError] = useState('');

    useEffect(() => {
        writeUsers(users);
    }, [users]);

    useEffect(() => {
        if (currentUserEmail) {
            localStorage.setItem(CURRENT_USER_KEY, currentUserEmail);
        } else {
            localStorage.removeItem(CURRENT_USER_KEY);
        }
    }, [currentUserEmail]);

    const currentUser = useMemo(
        () => users.find((user) => user.email === currentUserEmail) || null,
        [users, currentUserEmail]
    );

    const findUser = (email) => users.find((user) => user.email.toLowerCase() === email.toLowerCase());

    const login = (email, code) => {
        setError('');
        if (!email || !code) {
            setError('Please enter both email and invite/passcode.');
            return false;
        }

        const existingUser = findUser(email);
        if (existingUser) {
            if (existingUser.passcode !== code && !(existingUser.isAdmin && code === ADMIN_CODE)) {
                setError('Passcode does not match this profile.');
                return false;
            }
            setCurrentUserEmail(existingUser.email);
            return true;
        }

        const isAdmin = code === ADMIN_CODE;
        const isInviteValid = code === INVITE_CODE || isAdmin;

        if (!isInviteValid) {
            setError('Invalid invite or admin code.');
            return false;
        }

        const newUser = {
            email,
            passcode: code,
            isAdmin,
            progress: {},
            createdAt: new Date().toISOString(),
        };
        setUsers((prev) => [...prev, newUser]);
        setCurrentUserEmail(email);
        return true;
    };

    const logout = () => setCurrentUserEmail(null);

    const updateProgress = (moduleId, updates) => {
        if (!currentUser) return;
        setUsers((prev) =>
            prev.map((user) => {
                if (user.email !== currentUser.email) return user;
                const prevProgress = user.progress?.[moduleId] || {};
                return {
                    ...user,
                    progress: {
                        ...user.progress,
                        [moduleId]: {
                            ...prevProgress,
                            ...updates,
                            lastUpdated: new Date().toISOString(),
                        },
                    },
                };
            })
        );
    };

    const getModuleProgress = (moduleId) => currentUser?.progress?.[moduleId] || { completed: false };

    const moduleOrder = getModuleOrder();
    const completedModuleIds = new Set(
        Object.entries(currentUser?.progress || {})
            .filter(([, status]) => status.completed)
            .map(([id]) => id)
    );

    const isModuleLocked = (module) => {
        if (!module) return true;
        if (module.type === 'intro' || module.type === 'resource') return false;
        if (module.type === 'capstone') return completedModuleIds.size < moduleOrder.length;

        const orderedIndex = moduleOrder.findIndex((item) => item.id === module.id);
        if (orderedIndex === -1) return false;
        return orderedIndex > completedModuleIds.size;
    };

    const saveQuizResult = (moduleId, quizResult) => {
        updateProgress(moduleId, { quizResult });
    };

    const markComplete = (moduleId) => {
        updateProgress(moduleId, { completed: true });
    };

    const resetUserModules = (email) => {
        setUsers((prev) =>
            prev.map((user) =>
                user.email === email
                    ? {
                          ...user,
                          progress: {},
                      }
                    : user
            )
        );
    };

    const value = {
        currentUser,
        users,
        error,
        login,
        logout,
        isModuleLocked,
        getModuleProgress,
        markComplete,
        saveQuizResult,
        resetUserModules,
        completedModuleIds,
        inviteCode: INVITE_CODE,
        adminCode: ADMIN_CODE,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
