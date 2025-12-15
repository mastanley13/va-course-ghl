import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'ghl-va-auth';
const DEFAULT_INVITE_CODE = 'VA-COHORT-2025';
const ADMIN_INVITE_CODE = 'VA-ADMIN-ACCESS';

const AuthContext = createContext();

const loadAuthState = () => {
    if (typeof window === 'undefined') return { currentUserEmail: null, users: {} };
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) return JSON.parse(stored);
    } catch (error) {
        console.error('Failed to load auth data', error);
    }
    return { currentUserEmail: null, users: {} };
};

const persistAuthState = (state) => {
    if (typeof window === 'undefined') return;
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.error('Failed to persist auth data', error);
    }
};

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(loadAuthState);

    useEffect(() => {
        persistAuthState(authState);
    }, [authState]);

    const currentUser = authState.currentUserEmail ? authState.users[authState.currentUserEmail] : null;

    const login = ({ email, name, passcode, inviteCode }) => {
        const normalizedEmail = email.trim().toLowerCase();
        const resolvedInvite = inviteCode?.trim() || DEFAULT_INVITE_CODE;
        const isAdmin = resolvedInvite === ADMIN_INVITE_CODE;

        setAuthState((prev) => {
            const existingUser = prev.users[normalizedEmail];
            if (existingUser && existingUser.passcode && existingUser.passcode !== passcode) {
                throw new Error('Passcode does not match existing profile.');
            }

            if (!existingUser && resolvedInvite !== DEFAULT_INVITE_CODE && resolvedInvite !== ADMIN_INVITE_CODE) {
                throw new Error('Invalid invite code.');
            }

            const updatedUser = {
                email: normalizedEmail,
                name: name?.trim() || normalizedEmail,
                passcode: passcode?.trim() || existingUser?.passcode || '',
                role: isAdmin ? 'admin' : existingUser?.role || 'learner',
                createdAt: existingUser?.createdAt || new Date().toISOString(),
            };

            return {
                ...prev,
                currentUserEmail: normalizedEmail,
                users: { ...prev.users, [normalizedEmail]: updatedUser },
            };
        });
    };

    const switchProfile = (email) => {
        setAuthState((prev) => ({ ...prev, currentUserEmail: email }));
    };

    const logout = () => setAuthState((prev) => ({ ...prev, currentUserEmail: null }));

    const availableProfiles = useMemo(
        () =>
            Object.values(authState.users)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((user) => ({
                    email: user.email,
                    name: user.name,
                    role: user.role,
                })),
        [authState.users]
    );

    const value = useMemo(
        () => ({ currentUser, login, logout, switchProfile, availableProfiles, DEFAULT_INVITE_CODE, ADMIN_INVITE_CODE }),
        [currentUser, availableProfiles]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
