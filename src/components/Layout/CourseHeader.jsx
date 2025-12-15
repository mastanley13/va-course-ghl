import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const CourseHeader = ({ title, moduleIndex, totalModules, onToggleSidebar }) => {
    return (
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-slate-700/50">
            <div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between">
                {/* Left: Breadcrumbs/Title */}
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-muted hover:text-white transition-colors">
                        <Home size={20} />
                    </Link>
                    <ChevronRight size={16} className="text-slate-600" />
                    <div className="flex flex-col">
                        <span className="text-xs font-mono text-primary uppercase tracking-wider">
                            Module {moduleIndex + 1} of {totalModules}
                        </span>
                        <h1 className="text-sm font-bold text-white md:text-base truncate max-w-[200px] md:max-w-md">
                            {title}
                        </h1>
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex flex-col items-end mr-4">
                        <span className="text-xs text-muted">Course Progress</span>
                        <div className="w-32 h-1.5 bg-slate-800 rounded-full mt-1 overflow-hidden">
                            <div
                                className="h-full bg-emerald-500 rounded-full"
                                style={{ width: `${((moduleIndex) / totalModules) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default CourseHeader;
