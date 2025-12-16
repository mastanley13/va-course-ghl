import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Users } from 'lucide-react';
import clsx from 'clsx';

const AuthPage = () => {
    const { login, availableProfiles, DEFAULT_INVITE_CODE, ADMIN_INVITE_CODE } = useAuth();
    const [formState, setFormState] = useState({ email: '', name: '', password: '', inviteCode: DEFAULT_INVITE_CODE });
    const [error, setError] = useState('');
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [passwordInput, setPasswordInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(false); // New Toggle
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await login({
                email: formState.email,
                password: formState.password,
                name: formState.name,
                inviteCode: formState.inviteCode,
                isSignUp: !isLoginMode // Use toggle
            });
            navigate('/');
        } catch (err) {
            console.error('Auth error:', err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleProfileSelect = (profile) => {
        setError('');
        setSelectedProfile(profile);
        setPasswordInput('');
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        if (!selectedProfile) return;
        setError('');
        setIsLoading(true);

        try {
            await login({
                email: selectedProfile.email,
                password: passwordInput,
                isSignUp: false
            });
            navigate('/');
            setSelectedProfile(null);
            setPasswordInput('');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
            <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-surface border border-slate-800 rounded-2xl p-8 shadow-2xl shadow-primary/10">
                    <div className="flex items-center gap-3 mb-6">
                        <ShieldCheck className="text-primary" />
                        <div>
                            <p className="text-xs uppercase tracking-widest text-primary font-semibold">Secure Access</p>
                            <h1 className="text-2xl font-bold text-white">{isLoginMode ? 'Welcome Back' : 'Join your cohort'}</h1>
                        </div>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="space-y-2 text-sm text-slate-300">
                                <span>Email</span>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-white focus:border-primary focus:outline-none"
                                    placeholder="you@company.com"
                                />
                            </label>

                            {!isLoginMode && ( // Hide Name in Login Mode
                                <label className="space-y-2 text-sm text-slate-300">
                                    <span>Name</span>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                                        className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-white focus:border-primary focus:outline-none"
                                        placeholder="Your display name"
                                    />
                                </label>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="space-y-2 text-sm text-slate-300">
                                <span>Password</span>
                                <input
                                    type="password"
                                    required
                                    minLength={6}
                                    value={formState.password}
                                    onChange={(e) => setFormState((prev) => ({ ...prev, password: e.target.value }))}
                                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-white focus:border-primary focus:outline-none"
                                    placeholder="Min 6 characters"
                                />
                                <p className="text-xs text-slate-500">Used to secure your account.</p>
                            </label>

                            {!isLoginMode && ( // Hide Invite Code in Login Mode
                                <label className="space-y-2 text-sm text-slate-300">
                                    <span>Invite code</span>
                                    <input
                                        type="text"
                                        value={formState.inviteCode}
                                        onChange={(e) => setFormState((prev) => ({ ...prev, inviteCode: e.target.value }))}
                                        className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-white focus:border-primary focus:outline-none"
                                        placeholder={DEFAULT_INVITE_CODE}
                                    />
                                    <p className="text-xs text-slate-500">
                                        Learners use <span className="text-white font-semibold">{DEFAULT_INVITE_CODE}</span>.
                                        Admins use <span className="text-white font-semibold">{ADMIN_INVITE_CODE}</span>.
                                    </p>
                                </label>
                            )}
                        </div>

                        {error && <p className="text-sm text-rose-400">{error}</p>}

                        <div className="flex items-center justify-between pt-4">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsLoginMode(!isLoginMode);
                                    setError('');
                                }}
                                className="text-sm text-slate-400 hover:text-white underline underline-offset-4"
                            >
                                {isLoginMode ? "Need an account? Join" : "Already have an account? Login"}
                            </button>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105 disabled:opacity-50 border border-transparent focus:border-white"
                            >
                                {isLoading ? 'Processing...' : (isLoginMode ? 'Login' : 'Join Cohort')}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-surface border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl shadow-primary/10">
                    <div className="flex items-center gap-2 text-slate-300">
                        <Users className="text-primary" />
                        <div>
                            <p className="text-xs uppercase tracking-widest text-primary font-semibold">Profiles</p>
                            <h2 className="text-lg font-semibold text-white">Select an existing user</h2>
                        </div>
                    </div>

                    {availableProfiles.length === 0 ? (
                        <p className="text-sm text-slate-400">No profiles found in directory. Create one to get started.</p>
                    ) : (
                        <div className="space-y-2 max-h-[400px] overflow-y-auto custom-scrollbar">
                            {availableProfiles.map((profile) => (
                                <button
                                    key={profile.email}
                                    onClick={() => handleProfileSelect(profile)}
                                    className={clsx(
                                        'w-full text-left rounded-lg border px-3 py-2 transition-colors',
                                        profile.role === 'admin'
                                            ? 'border-amber-500/40 bg-amber-500/5 text-amber-100'
                                            : 'border-slate-800 bg-slate-900/60 text-slate-200 hover:border-primary/40'
                                    )}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-semibold">{profile.name}</p>
                                            <p className="text-xs text-slate-400">{profile.email}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-[10px] uppercase tracking-widest text-slate-500">{profile.role}</span>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {selectedProfile && (
                    <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
                        <div className="w-full max-w-md bg-surface border border-slate-800 rounded-2xl p-6 shadow-2xl shadow-primary/10 space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-primary font-semibold">Authentication Required</p>
                                    <h3 className="text-lg font-semibold text-white">Login as {selectedProfile.name}</h3>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSelectedProfile(null)}
                                    className="text-slate-400 hover:text-white"
                                >
                                    Close
                                </button>
                            </div>
                            <form onSubmit={handleLoginSubmit} className="space-y-3">
                                <label className="space-y-2 text-sm text-slate-300">
                                    <span>Enter password</span>
                                    <input
                                        type="password"
                                        value={passwordInput}
                                        autoFocus
                                        onChange={(e) => setPasswordInput(e.target.value)}
                                        className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-white focus:border-primary focus:outline-none"
                                        placeholder="Your password"
                                    />
                                </label>
                                <div className="flex items-center justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedProfile(null)}
                                        className="px-4 py-2 rounded-lg border border-slate-700 text-sm text-slate-300 hover:border-slate-500"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-sm font-semibold text-white shadow-lg shadow-primary/20 disabled:opacity-50"
                                    >
                                        {isLoading ? 'Verifying...' : 'Login'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthPage;
