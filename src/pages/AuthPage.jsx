import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Users } from 'lucide-react';
import clsx from 'clsx';

const AuthPage = () => {
    const { login, switchProfile, validatePasscode, availableProfiles, DEFAULT_INVITE_CODE, ADMIN_INVITE_CODE } = useAuth();
    const [formState, setFormState] = useState({ email: '', name: '', passcode: '', inviteCode: DEFAULT_INVITE_CODE });
    const [error, setError] = useState('');
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [passcodeInput, setPasscodeInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        try {
            login(formState);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    const handleProfileSelect = (profile) => {
        setError('');
        if (profile.hasPasscode) {
            setSelectedProfile(profile);
            setPasscodeInput('');
            return;
        }

        try {
            switchProfile(profile.email);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    const handlePasscodeSubmit = (event) => {
        event.preventDefault();
        if (!selectedProfile) return;

        try {
            validatePasscode(selectedProfile.email, passcodeInput);
            switchProfile(selectedProfile.email);
            navigate('/');
            setSelectedProfile(null);
            setPasscodeInput('');
        } catch (err) {
            setError(err.message);
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
                            <h1 className="text-2xl font-bold text-white">Join your cohort</h1>
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
                            <label className="space-y-2 text-sm text-slate-300">
                                <span>Name</span>
                                <input
                                    type="text"
                                    value={formState.name}
                                    onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-white focus:border-primary focus:outline-none"
                                    placeholder="Your display name"
                                />
                            </label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="space-y-2 text-sm text-slate-300">
                                <span>Personal passcode</span>
                                <input
                                    type="password"
                                    value={formState.passcode}
                                    onChange={(e) => setFormState((prev) => ({ ...prev, passcode: e.target.value }))}
                                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-white focus:border-primary focus:outline-none"
                                    placeholder="Create or reuse your passcode"
                                />
                                <p className="text-xs text-slate-500">Used to protect your profile on shared devices.</p>
                            </label>
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
                        </div>

                        {error && <p className="text-sm text-rose-400">{error}</p>}

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Deployment friendly</p>
                                <p className="text-sm text-slate-400">Profiles are stored in a small local store that can be swapped for Supabase or SQLite.</p>
                            </div>
                            <button
                                type="submit"
                                className="rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105"
                            >
                                Enter workspace
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
                        <p className="text-sm text-slate-400">No profiles yet. Create one with your invite code.</p>
                    ) : (
                        <div className="space-y-2">
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
                                            {profile.hasPasscode && (
                                                <span className="text-[10px] text-primary">Passcode protected</span>
                                            )}
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
                                    <p className="text-xs uppercase tracking-widest text-primary font-semibold">Passcode Required</p>
                                    <h3 className="text-lg font-semibold text-white">Unlock {selectedProfile.name}'s profile</h3>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSelectedProfile(null)}
                                    className="text-slate-400 hover:text-white"
                                >
                                    Close
                                </button>
                            </div>
                            <form onSubmit={handlePasscodeSubmit} className="space-y-3">
                                <label className="space-y-2 text-sm text-slate-300">
                                    <span>Enter passcode</span>
                                    <input
                                        type="password"
                                        value={passcodeInput}
                                        autoFocus
                                        onChange={(e) => setPasscodeInput(e.target.value)}
                                        className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-white focus:border-primary focus:outline-none"
                                        placeholder="Required to switch"
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
                                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-sm font-semibold text-white shadow-lg shadow-primary/20"
                                    >
                                        Unlock & Continue
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
