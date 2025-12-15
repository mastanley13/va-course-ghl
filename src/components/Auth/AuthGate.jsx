import React, { useMemo, useState } from 'react';
import { Lock, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AuthGate = () => {
    const { login, error, inviteCode, adminCode } = useAuth();
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [busy, setBusy] = useState(false);

    const helperText = useMemo(
        () => `Use the cohort invite (${inviteCode}) or the admin code (${adminCode}) to create your profile.`,
        [inviteCode, adminCode]
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        setBusy(true);
        const success = login(email.trim().toLowerCase(), code.trim());
        if (!success) {
            setBusy(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white px-4">
            <div className="max-w-xl w-full bg-surface/60 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Lock size={24} />
                    </div>
                    <div>
                        <p className="text-xs uppercase text-slate-400 tracking-widest">VA Master Class</p>
                        <h1 className="text-2xl font-bold">Sign in or start a profile</h1>
                    </div>
                </div>

                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    Learner progress is saved per profile. Returning students can re-enter their email and passcode to pick up
                    where they left off. New learners can join with the cohort invite. Admins can use the admin code to unlock
                    the cohort dashboard.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="text-sm text-slate-200" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-slate-200" htmlFor="code">
                            Invite or passcode
                        </label>
                        <input
                            id="code"
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Cohort invite or admin code"
                            required
                        />
                        <p className="text-xs text-slate-400 flex items-center gap-2">
                            <ShieldCheck size={14} className="text-primary" />
                            {helperText}
                        </p>
                    </div>

                    {error && <div className="text-sm text-red-400 bg-red-950/30 border border-red-900 rounded-lg p-3">{error}</div>}

                    <button
                        type="submit"
                        disabled={busy}
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 disabled:opacity-60"
                    >
                        {busy ? 'Checking...' : 'Enter the course'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthGate;
