import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, CheckCircle, Lock, PlayCircle, Trophy } from 'lucide-react';
import { courseModules } from '../../data/courseData';
import clsx from 'clsx';
import { useAuth } from '../../context/AuthContext';

const CourseNavigation = ({ onItemClick }) => {
    const { isModuleLocked, getModuleProgress } = useAuth();

    return (
        <nav className="p-4 space-y-1 overflow-y-auto custom-scrollbar flex-1">
            {courseModules.map((module) => {
                const locked = isModuleLocked(module);
                const progress = getModuleProgress(module.id);
                const isComplete = progress.completed;
                return (
                    <NavLink
                        key={module.id}
                        to={`/module/${module.id}`}
                        onClick={onItemClick}
                        className={({ isActive }) =>
                            clsx(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                                isActive
                                    ? "bg-primary/10 text-primary border border-primary/10"
                                    : "text-muted hover:bg-white/5 hover:text-white border border-transparent",
                                locked && "opacity-50 cursor-not-allowed pointer-events-none"
                            )
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <div
                                    className={clsx(
                                        "shrink-0 transition-colors",
                                        isActive ? "text-primary" : "text-slate-500 group-hover:text-slate-400"
                                    )}
                                >
                                    {module.type === 'capstone' ? (
                                        <Trophy size={18} />
                                    ) : locked ? (
                                        <Lock size={18} />
                                    ) : isComplete ? (
                                        <CheckCircle size={18} />
                                    ) : (
                                        <PlayCircle size={18} fill="currentColor" className="text-primary/20" />
                                    )}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <span className="truncate block">{module.title}</span>
                                    {isComplete && (
                                        <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                                            <BookOpen size={12} /> Completed
                                        </span>
                                    )}
                                </div>
                            </>
                        )}
                    </NavLink>
                );
            })}
        </nav>
    );
};

export default CourseNavigation;
