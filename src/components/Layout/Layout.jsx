import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

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
                        <div className="hidden lg:flex justify-between items-center">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-primary font-semibold">Cohort Access</p>
                                <h2 className="text-xl font-bold text-white">{currentUser?.name}</h2>
                                <p className="text-sm text-slate-400">{currentUser?.email}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                {currentUser?.role === 'admin' && (
                                    <Link
                                        to="/admin"
                                        className="text-sm font-semibold text-amber-300 hover:text-amber-200 underline"
                                    >
                                        Admin dashboard
                                    </Link>
                                )}
                                <button
                                    onClick={() => {
                                        logout();
                                        navigate('/login');
                                    }}
                                    className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-primary hover:text-white"
                                >
                                    Switch profile
                                </button>
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
