import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BarChart3, RefreshCw } from 'lucide-react';

const AdminPanel = () => {
    const { users, resetUserModules, currentUser } = useAuth();
    const navigate = useNavigate();

    if (!currentUser?.isAdmin) {
        return (
            <div className="bg-surface border border-slate-800 rounded-2xl p-8 text-center text-slate-200">
                <h2 className="text-xl font-bold mb-2">Admin access only</h2>
                <p className="text-slate-400 mb-4">Use the admin code to sign in with elevated access.</p>
                <button
                    onClick={() => navigate('/')}
                    className="px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30"
                >
                    Return to dashboard
                </button>
            </div>
        );
    }

    const learnerUsers = users.filter((user) => !user.isAdmin);
    const moduleCount = learnerUsers.length > 0 ?
        Math.max(
            ...learnerUsers.map((user) => Object.values(user.progress || {}).filter((p) => p.completed).length),
            0
        ) : 0;

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <BarChart3 />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-white">Cohort progress overview</h1>
                    <p className="text-slate-400 text-sm">
                        Track completions and reset modules for learners. Data is stored locally for easy deployment and scales for
                        small cohorts.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <StatCard label="Active learners" value={learnerUsers.length} />
                <StatCard label="Max modules completed" value={moduleCount} />
                <StatCard label="Stored profiles" value={users.length} />
            </div>

            <div className="bg-surface border border-slate-800 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-800">
                    <h2 className="text-lg font-semibold text-white">Learner roster</h2>
                    <p className="text-slate-400 text-sm">Reset module progress to let a learner restart or regrade.</p>
                </div>
                <div className="divide-y divide-slate-800">
                    {learnerUsers.length === 0 && <p className="p-6 text-slate-400">No learners have joined yet.</p>}
                    {learnerUsers.map((user) => {
                        const completedCount = Object.values(user.progress || {}).filter((p) => p.completed).length;
                        const quizCount = Object.values(user.progress || {}).filter((p) => p.quizResult).length;
                        return (
                            <div key={user.email} className="p-6 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <p className="font-semibold text-white">{user.email}</p>
                                    <p className="text-slate-400 text-sm">Joined {new Date(user.createdAt).toLocaleDateString()}</p>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-slate-300">
                                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                                        {completedCount} modules completed
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-200 border border-indigo-500/30">
                                        {quizCount} quiz notes
                                    </span>
                                </div>
                                <button
                                    onClick={() => resetUserModules(user.email)}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 hover:border-primary/50 text-slate-200 hover:text-white"
                                >
                                    <RefreshCw size={16} /> Reset modules
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ label, value }) => (
    <div className="bg-surface border border-slate-800 rounded-xl p-5">
        <p className="text-slate-400 text-sm">{label}</p>
        <p className="text-3xl font-bold text-white">{value}</p>
    </div>
);

export default AdminPanel;
