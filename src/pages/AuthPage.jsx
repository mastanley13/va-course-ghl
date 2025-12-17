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
        <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                {/* Login/Signup Form */}
                <div className="lg:col-span-7 bg-surface/30 backdrop-blur-xl border border-white/5 rounded-3xl p-8 lg:p-12 shadow-2xl">
                    <div className="mb-8">
                        <p className="text-sm font-medium text-primary mb-2">The VA Academy</p>
                        <h1 className="text-4xl font-bold text-white tracking-tight mb-3">
                            {isLoginMode ? 'Welcome back.' : 'Start your journey.'}
                        </h1>
                        <p className="text-slate-400 text-lg">
                            {isLoginMode ? 'Ready to continue your certification?' : 'Become a HighLevel Architect today.'}
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>

                            {!isLoginMode && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Display Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all"
                                        placeholder="What should we call you?"
                                    />
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Password</label>
                                <input
                                    type="password"
                                    required
                                    minLength={6}
                                    value={formState.password}
                                    onChange={(e) => setFormState((prev) => ({ ...prev, password: e.target.value }))}
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>

                            {!isLoginMode && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Invite Code</label>
                                    <input
                                        type="text"
                                        value={formState.inviteCode}
                                        onChange={(e) => setFormState((prev) => ({ ...prev, inviteCode: e.target.value }))}
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all"
                                        placeholder={DEFAULT_INVITE_CODE}
                                    />
                                </div>
                            )}
                        </div>

                        {error && (
                            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
                                {error}
                            </div>
                        )}

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-bold py-4 text-lg shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                            >
                                {isLoading ? 'Working on it...' : (isLoginMode ? 'Enter the Lab' : 'Create Account')}
                            </button>
                        </div>

                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsLoginMode(!isLoginMode);
                                    setError('');
                                }}
                                className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                            >
                                {isLoginMode ? "New here? Create an account" : "Already have an account? Sign in"}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Profile Quick Select */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                    <div className="bg-surface/30 backdrop-blur-md rounded-3xl p-8 border border-white/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-2xl bg-white/5 text-slate-300">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Classmates</h3>
                                <p className="text-slate-400 text-sm">Jump back in</p>
                            </div>
                        </div>

                        {availableProfiles.length === 0 ? (
                            <div className="text-center py-8 text-slate-500 bg-white/5 rounded-2xl border border-white/5 border-dashed">
                                No profiles yet. Be the first!
                            </div>
                        ) : (
                            <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                                {availableProfiles.map((profile) => (
                                    <button
                                        key={profile.email}
                                        onClick={() => handleProfileSelect(profile)}
                                        className="w-full group text-left rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 p-4 transition-all hover:translate-x-1"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                                                    {profile.name}
                                                </p>
                                                <p className="text-xs text-slate-500">{profile.email}</p>
                                            </div>
                                            {profile.role === 'admin' && (
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-1 rounded-md">
                                                    Admin
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Modal Overlay for Quick Login */}
                {selectedProfile && (
                    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
                        <div className="w-full max-w-md bg-[#0f172a] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                            {/* Decorative Glow */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-indigo-500 to-purple-500" />

                            <div className="mb-6">
                                <p className="text-slate-400 text-sm mb-1">Welcome back,</p>
                                <h3 className="text-2xl font-bold text-white">{selectedProfile.name}</h3>
                            </div>

                            <form onSubmit={handleLoginSubmit} className="space-y-6">
                                <input
                                    type="password"
                                    value={passwordInput}
                                    autoFocus
                                    onChange={(e) => setPasswordInput(e.target.value)}
                                    className="w-full text-center text-2xl tracking-widest bg-transparent border-b-2 border-white/10 focus:border-primary text-white py-4 outline-none transition-colors placeholder:text-white/10 placeholder:tracking-normal placeholder:text-lg"
                                    placeholder="Enter Password"
                                />

                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedProfile(null)}
                                        className="flex-1 py-3.5 rounded-xl border border-white/10 text-slate-300 font-medium hover:bg-white/5 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="flex-1 py-3.5 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors shadow-lg disabled:opacity-50"
                                    >
                                        {isLoading ? '...' : 'Let me in'}
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
