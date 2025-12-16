import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { supabase } from '../lib/supabaseClient';

const DEFAULT_INVITE_CODE = 'VA-COHORT-2025';
const ADMIN_INVITE_CODE = 'VA-ADMIN-ACCESS';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [availableProfiles, setAvailableProfiles] = useState([]);

    // 1. Initialize from LocalStorage
    useEffect(() => {
        const storedUsers = localStorage.getItem('ghl_known_users');
        if (storedUsers) {
            try {
                setAvailableProfiles(JSON.parse(storedUsers));
            } catch (e) {
                console.error('Failed to parse known users', e);
            }
        }

        const fetchProfile = async (sessionUser) => {
            if (!sessionUser) {
                setProfile(null);
                setUser(null);
                return;
            }

            try {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', sessionUser.id)
                    .single();

                if (error) {
                    console.error('Error fetching profile:', error);
                } else {
                    setProfile(data);
                    setUser(sessionUser);
                }
            } catch (err) {
                console.error('Unexpected error fetching profile:', err);
            }
        };

        // Auth Listener
        supabase.auth.getSession().then(({ data: { session } }) => {
            fetchProfile(session?.user ?? null).finally(() => setLoading(false));
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            fetchProfile(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    // Helper: Save user to local history
    const saveToLocalHistory = (newUserProfile) => {
        const currentHistory = JSON.parse(localStorage.getItem('ghl_known_users') || '[]');
        // Remove existing entry for this email if exists (to update it)
        const output = currentHistory.filter(u => u.email !== newUserProfile.email);
        // Add to top
        output.unshift({
            email: newUserProfile.email,
            name: newUserProfile.full_name || newUserProfile.name,
            role: newUserProfile.role,
            lastActive: new Date().toISOString()
        });
        // Limit to 5
        const trimmed = output.slice(0, 5);
        localStorage.setItem('ghl_known_users', JSON.stringify(trimmed));
        setAvailableProfiles(trimmed);
    };

    // 2. Login / Signup Logic
    const login = async ({ email, password, name, inviteCode, isSignUp }) => {
        const normalizedEmail = email.trim().toLowerCase();

        if (isSignUp) {
            // Validate Invite Code first
            const resolvedInvite = inviteCode?.trim() || DEFAULT_INVITE_CODE;
            const isAdmin = resolvedInvite === ADMIN_INVITE_CODE;

            if (resolvedInvite !== DEFAULT_INVITE_CODE && resolvedInvite !== ADMIN_INVITE_CODE) {
                throw new Error('Invalid invite code.');
            }

            try {
                const { data, error } = await supabase.auth.signUp({
                    email: normalizedEmail,
                    password: password,
                    options: {
                        data: {
                            full_name: name,
                            role: isAdmin ? 'admin' : 'learner',
                        }
                    }
                });

                if (error) throw error;

                // Create Profile Record manually if trigger is missing (safety net)
                const newProfile = {
                    id: data.user.id,
                    email: normalizedEmail,
                    full_name: name,
                    role: isAdmin ? 'admin' : 'learner'
                };

                const { error: profileError } = await supabase
                    .from('profiles')
                    .insert([newProfile]);

                if (profileError) {
                    if (!profileError.message.includes('duplicate key value')) throw profileError;
                }

                saveToLocalHistory(newProfile); // <--- Save to local history
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        } else {
            // Sign In
            const { data, error } = await supabase.auth.signInWithPassword({
                email: normalizedEmail,
                password: password,
            });

            if (error) throw new Error(error.message);

            // Fetch profile to save name/role to history
            const { data: profileData } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', data.user.id)
                .single();

            if (profileData) {
                saveToLocalHistory(profileData); // <--- Save to local history
            }

            return data;
        }
    };

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setProfile(null);
    };

    // Legacy support for "switchProfile" (not really applicable in strict Auth, but kept for interface compatibility)
    const switchProfile = (email) => {
        console.warn("Profile switching is disabled in Secure Mode. Please logout and login.");
    };

    const validatePasscode = (email, passcode) => {
        // No-op in Supabase version as auth handles validation
        return true;
    };

    const value = {
        currentUser: profile ? { ...profile, email: user?.email } : null,
        loading,
        login,
        logout,
        switchProfile,
        validatePasscode,
        availableProfiles,
        DEFAULT_INVITE_CODE,
        ADMIN_INVITE_CODE,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
