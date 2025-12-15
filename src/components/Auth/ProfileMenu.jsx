import React, { useMemo, useState } from 'react';
import { ChevronDown, LogOut, Shield, Users } from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '../../context/AuthContext';

const ProfileMenu = () => {
    const { currentUser, users, logout, login } = useAuth();
    const [open, setOpen] = useState(false);
    const [switchError, setSwitchError] = useState('');

    const cohortLearners = useMemo(() => users.filter((user) => !user.isAdmin), [users]);

    const handleSwitch = (email) => {
        const user = users.find((item) => item.email === email);
        if (!user) return;
        const ok = login(user.email, user.passcode);
        setSwitchError(ok ? '' : 'Unable to switch profiles');
        setOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/70 border border-slate-700 text-sm font-medium text-slate-200 hover:border-primary/50"
            >
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
                {currentUser?.email || 'Select profile'}
                {currentUser?.isAdmin && <Shield size={14} className="text-primary" />}
                <ChevronDown size={16} className="text-slate-400" />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-72 rounded-xl bg-surface border border-slate-700 shadow-xl z-50">
                    <div className="px-4 py-3 border-b border-slate-800">
                        <p className="text-xs uppercase tracking-wider text-slate-400">Profiles</p>
                        <p className="text-sm text-slate-300">Switch between cohort members</p>
                    </div>
                    <div className="max-h-64 overflow-y-auto custom-scrollbar">
                        {cohortLearners.length === 0 && (
                            <div className="px-4 py-3 text-sm text-slate-400">No saved learners yet.</div>
                        )}
                        {cohortLearners.map((user) => (
                            <button
                                key={user.email}
                                onClick={() => handleSwitch(user.email)}
                                className={clsx(
                                    'w-full text-left px-4 py-3 flex items-center gap-3 text-sm transition hover:bg-white/5',
                                    currentUser?.email === user.email && 'bg-primary/5 text-primary'
                                )}
                            >
                                <Users size={16} className="text-slate-500" />
                                <div className="flex-1">
                                    <p className="font-medium">{user.email}</p>
                                    <p className="text-xs text-slate-400">{Object.values(user.progress || {}).filter((p) => p.completed).length} modules done</p>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center justify-between px-4 py-3 border-t border-slate-800 text-sm">
                        <button onClick={logout} className="text-red-300 hover:text-red-200 flex items-center gap-2">
                            <LogOut size={16} />
                            Log out
                        </button>
                        {switchError && <span className="text-xs text-red-400">{switchError}</span>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;
