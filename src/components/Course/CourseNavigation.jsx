import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, CheckCircle, Lock, PlayCircle, Trophy } from 'lucide-react';
import { courseModules } from '../../data/courseData';
import clsx from 'clsx';

const CourseNavigation = ({ onItemClick }) => {
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
                            module.isLocked && "opacity-50 cursor-not-allowed pointer-events-none"
                        )
                    }
                >
                    {({ isActive }) => (
                        <>
                            <div className={clsx(
                                "shrink-0 transition-colors",
                                isActive ? "text-primary" : "text-slate-500 group-hover:text-slate-400"
                            )}>
                                {module.type === 'capstone' ? <Trophy size={18} /> :
                                    module.isLocked ? <Lock size={18} /> :
                                        isActive ? <PlayCircle size={18} fill="currentColor" className="text-primary/20" /> :
                                            <CheckCircle size={18} />
                                }
                            </div>
                            <span className="truncate">{module.title}</span>
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    );
};

export default CourseNavigation;
