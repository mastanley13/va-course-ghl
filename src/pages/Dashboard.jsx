import React, { useMemo } from 'react';
import { courseModules } from '../data/courseData';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, CheckCircle, Lock, PlayCircle, Trophy, Users } from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { currentUser, isModuleLocked, getModuleProgress } = useAuth();
    const navigate = useNavigate();

    const moduleList = useMemo(
        () =>
            courseModules.map((module) => ({
                ...module,
                locked: isModuleLocked(module),
                progress: getModuleProgress(module.id),
            })),
        [currentUser, isModuleLocked, getModuleProgress]
    );

    const courseModulesOnly = moduleList.filter((m) => m.type === 'module');
    const completedCount = courseModulesOnly.filter((m) => m.progress.completed).length;
    const totalCount = courseModulesOnly.length;
    const progressPercent = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;
    const resumeModule = moduleList.find((m) => !m.locked && !m.progress.completed) || moduleList[0];

    return (
        <div className="animate-fade-in space-y-8">
            {/* Welcome Section */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 p-8 shadow-2xl border border-white/10">
                <div className="relative z-10">
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        Welcome back, {currentUser?.email?.split('@')[0] || 'Trainee'}
                    </h1>
                    <p className="text-indigo-200 max-w-xl mb-6">
                        Continue your journey to becoming a Certified GoHighLevel Technical Virtual Assistant. Master the tools,
                        build the systems, and verify your skills.
                    </p>
                    <div className="flex items-center gap-4 flex-wrap">
                        <button
                            onClick={() => resumeModule && navigate(`/module/${resumeModule.id}`)}
                            className="bg-white text-indigo-900 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                        >
                            Resume Course
                        </button>
                        <div className="flex items-center gap-2 text-indigo-200 text-sm">
                            <Trophy size={16} />
                            <span>{progressPercent}% complete • {completedCount}/{totalCount} modules</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Stat label="Modules completed" value={`${completedCount}/${totalCount}`} />
                <Stat label="Quiz entries saved" value={Object.values(currentUser?.progress || {}).filter((p) => p.quizResult).length} />
                <Stat label="Profile status" value={currentUser?.isAdmin ? 'Admin access' : 'Learner profile'} icon={<Users size={16} />} />
            </div>

            {/* Grid of Modules */}
            <div>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <BookOpen className="text-primary" />
                    Course Curriculum
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {moduleList.map((module) => (
                        <Link
                            key={module.id}
                            to={module.locked ? '#' : `/module/${module.id}`}
                            className={clsx(
                                "group relative p-6 rounded-xl border transition-all duration-300",
                                module.locked
                                    ? "bg-slate-900/50 border-slate-800 opacity-75 cursor-not-allowed"
                                    : "bg-surface border-slate-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 block"
                            )}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={clsx(
                                    "p-3 rounded-lg",
                                    module.locked ? "bg-slate-800 text-slate-500" : "bg-primary/10 text-primary"
                                )}>
                                    {module.type === 'capstone' ? <Trophy size={24} /> : <PlayCircle size={24} />}
                                </div>
                                {module.locked ? (
                                    <Lock size={18} className="text-slate-600" />
                                ) : module.progress.completed ? (
                                    <CheckCircle size={18} className="text-emerald-400" />
                                ) : (
                                    <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                )}
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                                {module.title}
                            </h3>
                            <p className="text-sm text-slate-400 line-clamp-2">
                                {module.id === 'overview' ? 'Start here to understand the certification path.' : 'Learn the core concepts and implementation steps.'}
                            </p>

                            {/* Progress Bar */}
                            {!module.locked && (
                                <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-emerald-500 transition-all duration-700"
                                        style={{ width: module.progress.completed ? '100%' : '25%' }}
                                    ></div>
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Stat = ({ label, value, icon }) => (
    <div className="bg-surface border border-slate-800 rounded-xl p-4">
        <p className="text-slate-400 text-sm flex items-center gap-2">{icon}{label}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
    </div>
);

export default Dashboard;
