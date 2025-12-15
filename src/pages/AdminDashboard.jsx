import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { courseModules } from '../data/courseData';
import { ShieldCheck, RefreshCcw } from 'lucide-react';
import clsx from 'clsx';

const AdminDashboard = () => {
    const { getCohortProgress, resetUserProgress, getModuleProgressPercent } = useProgress();
    const { currentUser } = useAuth();
    const cohort = getCohortProgress();

    if (currentUser?.role !== 'admin') {
        return (
            <div className="rounded-xl border border-slate-800 bg-surface p-6 text-slate-200">
                <p className="text-sm font-semibold">Admin access only</p>
                <p className="text-sm text-slate-400">Use the admin invite code to unlock cohort reporting and reset tooling.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3">
                <ShieldCheck className="text-amber-400" />
                <div>
                    <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Cohort Control</p>
                    <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                    <p className="text-sm text-slate-400">Monitor learner progress and reset modules without redeploying.</p>
                </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-surface/70 p-4 space-y-4">
                <div className="grid grid-cols-4 gap-2 text-xs text-slate-500 font-semibold uppercase tracking-widest">
                    <span>Member</span>
                    <span>Progress</span>
                    <span>Quizzes Passed</span>
                    <span className="text-right">Actions</span>
                </div>
                <div className="divide-y divide-slate-800">
                    {cohort.map((user) => (
                        <div key={user.email} className="grid grid-cols-4 gap-2 items-center py-3">
                            <div>
                                <p className="text-sm font-semibold text-white">{user.name}</p>
                                <p className="text-xs text-slate-400">{user.email}</p>
                                <span className="text-[10px] uppercase tracking-widest text-slate-500">{user.role}</span>
                            </div>
                            <div className="text-sm text-slate-200">{user.averageProgress}% ({user.modulesCompleted}/{courseModules.length})</div>
                            <div className="text-sm text-slate-200">{user.quizzesPassed}</div>
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={() => resetUserProgress(user.email)}
                                    className="flex items-center gap-1 rounded-lg border border-slate-700 px-3 py-1 text-xs text-slate-200 hover:border-amber-400 hover:text-amber-200"
                                >
                                    <RefreshCcw size={14} />
                                    Reset all
                                </button>
                                <div className="relative group">
                                    <button className="text-xs text-slate-400 underline">Reset module</button>
                                    <div className="hidden group-hover:block absolute right-0 mt-2 w-56 rounded-lg border border-slate-800 bg-surface shadow-xl p-2">
                                        {courseModules.map((module) => (
                                            <button
                                                key={module.id}
                                                onClick={() => resetUserProgress(user.email, module.id)}
                                                className={clsx(
                                                    'w-full text-left text-xs px-3 py-2 rounded-md hover:bg-primary/10 hover:text-white flex justify-between',
                                                    getModuleProgressPercent(module.id, user.email) > 0
                                                        ? 'text-slate-200'
                                                        : 'text-slate-500'
                                                )}
                                            >
                                                <span className="truncate">{module.title}</span>
                                                <span className="text-[10px] text-slate-500">
                                                    {Math.round(getModuleProgressPercent(module.id, user.email))}%
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
