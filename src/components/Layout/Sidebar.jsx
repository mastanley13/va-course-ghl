import React from 'react';
import { Menu } from 'lucide-react';
import clsx from 'clsx';
import CourseNavigation from '../Course/CourseNavigation';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <aside
            className={clsx(
                "fixed inset-y-0 left-0 z-50 w-72 bg-surface border-r border-slate-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}
        >
            <div className="flex items-center justify-between h-16 px-6 border-b border-slate-700 shrink-0">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    VA Master Class
                </span>
                <button onClick={toggleSidebar} className="lg:hidden text-muted hover:text-white">
                    <Menu size={24} />
                </button>
            </div>

            <CourseNavigation onItemClick={toggleSidebar} />
        </aside>
    );
};

export default Sidebar;
