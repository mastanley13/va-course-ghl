import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu, Shield } from 'lucide-react';
import ProfileMenu from '../Auth/ProfileMenu';
import { useAuth } from '../../context/AuthContext';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { currentUser } = useAuth();

    return (
        <div className="flex h-screen bg-background text-text overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Mobile Header */}
                <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-surface border-b border-slate-700">
                    <span className="font-bold text-white">GHL VA Course</span>
                    <button onClick={() => setIsSidebarOpen(true)} className="text-muted hover:text-white">
                        <Menu size={24} />
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto p-4 lg:p-8 custom-scrollbar relative">
                    {/* Background Gradient Blob */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
                        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
                    </div>

                    <div className="max-w-5xl mx-auto space-y-6">
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                            <ProfileMenu />
                            {currentUser?.isAdmin && (
                                <Link
                                    to="/admin"
                                    className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-primary/40 text-primary hover:bg-primary/10"
                                >
                                    <Shield size={16} />
                                    Admin dashboard
                                </Link>
                            )}
                        </div>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
