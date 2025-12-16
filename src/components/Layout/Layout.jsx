import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex h-screen overflow-hidden bg-background text-text">
            {/* Mobile Sidebar Backdrop */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-0">
                {/* Mobile Header */}
                <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-surface/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-30">
                    <span className="font-bold text-white tracking-tight">VA Master Class</span>
                    <button onClick={() => setIsSidebarOpen(true)} className="text-slate-300 hover:text-white transition-colors p-1">
                        <Menu size={24} />
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto p-4 lg:p-8 custom-scrollbar relative">
                    <div className="max-w-7xl mx-auto space-y-8">
                        {/* Top Bar (Desktop) */}
                        <div className="hidden lg:flex justify-between items-center bg-surface/40 backdrop-blur-sm p-4 rounded-2xl border border-white/5 shadow-sm">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-1">Authenticated Session</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                    <h2 className="text-sm font-medium text-slate-200">{currentUser?.name} <span className="text-slate-500 mx-1">|</span> {currentUser?.email}</h2>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                {currentUser?.role === 'admin' && (
                                    <Link
                                        to="/admin"
                                        className="text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20"
                                    >
                                        Admin Panel
                                    </Link>
                                )}
                                <button
                                    onClick={() => {
                                        logout();
                                        navigate('/login');
                                    }}
                                    className="text-xs font-medium text-slate-400 hover:text-white transition-colors hover:underline decoration-slate-600 underline-offset-4"
                                >
                                    Sign out
                                </button>
                            </div>
                        </div>

                        {/* Page Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={location.pathname}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="w-full"
                            >
                                <Outlet />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
