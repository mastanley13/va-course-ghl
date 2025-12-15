import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, useNavigate } from 'react-router-dom';
import { courseModules } from '../data/courseData';
import { MarkdownComponents } from '../components/Course/Markdown/Renderers';
import CourseHeader from '../components/Layout/CourseHeader';
import TableOfContents from '../components/Course/TableOfContents';
import Sidebar from '../components/Layout/Sidebar';
import CourseNavigation from '../components/Course/CourseNavigation';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useProgress } from '../context/ProgressContext';
import ModuleQuiz from '../components/Course/ModuleQuiz';
import ModuleLab from '../components/Course/ModuleLab';

// Update Markdown headings to have IDs for anchor links
const MarkdownComponentsWithIds = {
    ...MarkdownComponents,
    h2: ({ children }) => {
        const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return <h2 id={id} className="text-2xl font-semibold mb-4 mt-10 text-white flex items-center gap-3 group scroll-mt-24"><span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>{children}</h2>
    },
    h3: ({ children }) => {
        const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return <h3 id={id} className="text-xl font-medium mb-3 mt-6 text-indigo-100 scroll-mt-24">{children}</h3>
    }
}

const ModuleView = () => {
    const { moduleId } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true); // Default open on desktop
    const { isModuleUnlocked, getModuleProgress, getModuleProgressPercent, markCompleted } = useProgress();

    const moduleIndex = courseModules.findIndex(m => m.id === moduleId);
    const module = courseModules[moduleIndex];
    const nextModule = courseModules[moduleIndex + 1];
    const prevModule = courseModules[moduleIndex - 1];
    const moduleProgress = getModuleProgress(moduleId);
    const modulePercent = getModuleProgressPercent(moduleId);
    const canComplete = moduleProgress.quizPassed;

    useEffect(() => {
        if (!module) return;
        const fetchContent = async () => {
            setLoading(true);
            window.scrollTo(0, 0);
            try {
                const response = await fetch(`/docs/${module.filename}`);
                if (!response.ok) throw new Error('Failed to load content');
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error(error);
                setContent('# Error\nCould not load this module.');
            } finally {
                setLoading(false);
            }
        };
        fetchContent();
    }, [module]);

    if (!module) return <div className="text-center p-20 text-muted">Module not found</div>;

    const unlocked = isModuleUnlocked(moduleId);

    if (!unlocked && module.type !== 'resource' && module.type !== 'intro') {
        const availableModule = courseModules
            .slice(0, moduleIndex)
            .reverse()
            .find((m) => isModuleUnlocked(m.id));
        return (
            <div className="flex h-full items-center justify-center text-center">
                <div className="max-w-md space-y-4 rounded-xl border border-slate-800 bg-surface p-8 shadow-lg">
                    <p className="text-sm uppercase tracking-wide text-primary font-semibold">Locked</p>
                    <h2 className="text-2xl font-bold text-white">Complete the previous module</h2>
                    <p className="text-slate-400">
                        Finish the unlocked module(s) before this one to continue the certification path.
                    </p>
                    {availableModule && (
                        <button
                            onClick={() => navigate(`/module/${availableModule.id}`)}
                            className="rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white shadow-primary/30"
                        >
                            Go to {availableModule.title}
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-background overflow-hidden selection:bg-primary/30 selection:text-white">
            {/* Sidebar - Course Player Style */}
            <AnimatePresence mode="wait">
                {sidebarOpen && (
                    <motion.aside
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 280, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="hidden lg:flex flex-col border-r border-slate-800 bg-surface/30 backdrop-blur-md h-full shrink-0 overflow-hidden"
                    >
                        <div className="p-4 border-b border-slate-800/50">
                            <div className="font-bold text-slate-400 text-xs uppercase tracking-wider">Module List</div>
                        </div>
                        <CourseNavigation />
                    </motion.aside>
                )}
            </AnimatePresence>

            <div className="flex-1 flex flex-col min-w-0">
                <CourseHeader
                    title={module.title}
                    moduleIndex={moduleIndex}
                    totalModules={courseModules.length}
                    onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                    moduleProgress={modulePercent}
                />

                <main className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar relative">
                    <div className="flex max-w-[1600px] mx-auto">
                        {/* Main Content */}
                        <div className="flex-1 min-w-0 px-4 py-8 md:px-12 md:py-12 lg:px-16 max-w-5xl mx-auto">
                            <motion.div
                                key={moduleId}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="prose prose-invert prose-slate max-w-none"
                            >
                                {loading ? (
                                    <div className="space-y-8 animate-pulse">
                                        <div className="h-10 bg-slate-800 rounded-lg w-3/4" />
                                        <div className="space-y-3">
                                            <div className="h-4 bg-slate-800 rounded w-full" />
                                            <div className="h-4 bg-slate-800 rounded w-5/6" />
                                        </div>
                                    </div>
                                ) : (
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={MarkdownComponentsWithIds}
                                    >
                                        {content}
                                    </ReactMarkdown>
                                )}
                            </motion.div>

                            {!loading && (
                                <>
                                    <ModuleQuiz moduleId={moduleId} moduleTitle={module.title} />
                                    <ModuleLab moduleId={moduleId} moduleTitle={module.title} />
                                </>
                            )}

                            {/* Footer Navigation */}
                            <div className="mt-20 pt-10 border-t border-slate-700/50 flex justify-between items-center gap-6">
                                <button
                                    onClick={() => prevModule && navigate(`/module/${prevModule.id}`)}
                                    disabled={!prevModule}
                                    className={clsx(
                                        "group px-4 py-2 text-slate-400 hover:text-white flex items-center gap-2 transition-colors",
                                        !prevModule && "opacity-0 cursor-default"
                                    )}
                                >
                                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                    <span>Previous</span>
                                </button>

                                {nextModule ? (
                                    <button
                                        onClick={() => {
                                            if (!canComplete) return;
                                            markCompleted(moduleId);
                                            navigate(`/module/${nextModule.id}`);
                                        }}
                                        className={clsx(
                                            "px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all hover:scale-105",
                                            !canComplete
                                                ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                                                : "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25"
                                        )}
                                        disabled={!canComplete}
                                    >
                                        <span>Note Completed & Continue</span>
                                        <ChevronRight size={18} />
                                    </button>
                                ) : (
                                    <button
                                        disabled={!canComplete}
                                        onClick={() => {
                                            if (!canComplete) return;
                                            markCompleted(moduleId);
                                            navigate('/');
                                        }}
                                        className={clsx(
                                            "px-6 py-3 rounded-lg transition-transform flex items-center gap-2",
                                            !canComplete
                                                ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                                                : "bg-emerald-600 text-white shadow-emerald-500/20 hover:scale-105"
                                        )}
                                    >
                                        <CheckCircle2 size={18} />
                                        <span>Finish Course</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Table of Contents (Desktop Right Sidebar) */}
                        {!loading && <TableOfContents content={content} />}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ModuleView;
