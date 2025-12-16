import React from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import CourseNavigation from '../Course/CourseNavigation';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

    return (
        <aside
            className={clsx(
                "fixed inset-y-0 left-0 z-50 w-72 bg-surface/95 backdrop-blur-xl border-r border-white/5 transform transition-transform duration-300 ease-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col shadow-2xl lg:shadow-none",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}
        >
            <div className="flex items-center justify-between h-16 px-6 border-b border-white/5 shrink-0 bg-background/50">
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 tracking-tight">
                    VA Master Class
                </span>
                <button onClick={toggleSidebar} className="lg:hidden text-slate-400 hover:text-white transition-colors">
                    <X size={20} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-3">
                <CourseNavigation onItemClick={() => isMobile && toggleSidebar()} />
            </div>

            {/* Sidebar Footer/Branding */}
            <div className="p-4 border-t border-white/5 text-center">
                <p className="text-[10px] text-slate-600 font-medium">© 2025 HIGHLEVEL CERTIFIED</p>
            </div>
        </aside>
    );
};

export default Sidebar;
