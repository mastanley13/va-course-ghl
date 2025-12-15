import React from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCircle, Lock, PlayCircle, Trophy } from 'lucide-react';
import { courseModules } from '../../data/courseData';
import clsx from 'clsx';
import { useProgress } from '../../context/ProgressContext';

const CourseNavigation = ({ onItemClick }) => {
    const { isModuleUnlocked, getModuleProgressPercent, getModuleProgress } = useProgress();

    return (
        <nav className="p-4 space-y-1 overflow-y-auto custom-scrollbar flex-1">
            {courseModules.map((module) => (
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
                            !isModuleUnlocked(module.id) && "opacity-50 cursor-not-allowed pointer-events-none"
                        )
                    }
                >
                    {({ isActive }) => (
                        <>
                            <div className={clsx(
                                "shrink-0 transition-colors",
                                isActive ? "text-primary" : "text-slate-500 group-hover:text-slate-400"
                            )}>
                                {module.type === 'capstone' ? (
                                    <Trophy size={18} />
                                ) : !isModuleUnlocked(module.id) ? (
                                    <Lock size={18} />
                                ) : isActive ? (
                                    <PlayCircle size={18} fill="currentColor" className="text-primary/20" />
                                ) : getModuleProgress(module.id).completed ? (
                                    <CheckCircle size={18} />
                                ) : (
                                    <PlayCircle size={18} />
                                )}
                            </div>
                            <span className="truncate">{module.title}</span>
                            {isModuleUnlocked(module.id) && (
                                <div className="ml-auto w-20 h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-emerald-500"
                                        style={{ width: `${getModuleProgressPercent(module.id)}%` }}
                                    />
                                </div>
                            )}
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    );
};

export default CourseNavigation;
