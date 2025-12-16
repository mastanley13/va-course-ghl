import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, useNavigate } from 'react-router-dom';
import { courseModules, ORIENTATION_MODULE_ID } from '../data/courseData';
import { MarkdownComponents } from '../components/Course/Markdown/Renderers';
import CourseHeader from '../components/Layout/CourseHeader';
import TableOfContents from '../components/Course/TableOfContents';
import Sidebar from '../components/Layout/Sidebar';
import CourseNavigation from '../components/Course/CourseNavigation';
import { ChevronLeft, ChevronRight, CheckCircle2, Lock, FileText, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useProgress } from '../context/ProgressContext';
import ModuleQuiz from '../components/Course/ModuleQuiz';
import ModuleLab from '../components/Course/ModuleLab';
import { VideoPlayer, AudioPlayer } from '../components/ui/VideoPlayer';
import Skeleton from '../components/ui/Skeleton';
import ImageViewer from '../components/ui/ImageViewer';
import { ZoomIn } from 'lucide-react';

// Update Markdown headings to have IDs for anchor links
const MarkdownComponentsWithIds = {
    ...MarkdownComponents,
    h2: ({ children }) => {
        const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return <h2 id={id} className="text-2xl font-semibold mb-4 mt-12 text-white flex items-center gap-3 group scroll-mt-28"><span className="w-1 h-6 bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.5)]"></span>{children}</h2>
    },
    h3: ({ children }) => {
        const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return <h3 id={id} className="text-lg font-medium mb-3 mt-8 text-indigo-200 scroll-mt-28 flex items-baseline gap-2"><span className="text-indigo-500/50">#</span> {children}</h3>
    }
}

const ModuleView = () => {
    const { moduleId } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const { isModuleUnlocked, getModuleProgress, getModuleProgressPercent, markCompleted } = useProgress();

    const moduleIndex = courseModules.findIndex(m => m.id === moduleId);
    const module = courseModules[moduleIndex];
    const nextModule = courseModules[moduleIndex + 1];
    const prevModule = courseModules[moduleIndex - 1];
    const moduleProgress = getModuleProgress(moduleId);
    const modulePercent = getModuleProgressPercent(moduleId);
    const canComplete = moduleProgress.quizPassed;
    const orientationProgress = getModuleProgress(ORIENTATION_MODULE_ID);
    const orientationCleared =
        orientationProgress.quizScore === 100 && orientationProgress.quizPassed;
    const blockedByOrientation =
        module &&
        module.id !== ORIENTATION_MODULE_ID &&
        (module.type === 'module' || module.type === 'capstone') &&
        !orientationCleared;

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

    if (!module) return <div className="text-center p-20 text-slate-400">Module not found</div>;

    const unlocked = isModuleUnlocked(moduleId);

    if (!unlocked && module.type !== 'resource' && module.type !== 'intro') {
        const availableModule = courseModules
            .slice(0, moduleIndex)
            .reverse()
            .find((m) => isModuleUnlocked(m.id));
        return (
            <div className="flex h-[calc(100vh-100px)] items-center justify-center text-center p-4">
                <div className="max-w-md w-full space-y-6 rounded-2xl border border-white/5 bg-surface/50 p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10">
                        <Lock size={120} />
                    </div>
                    <div className="relative z-10">
                        <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2">Restricted Access</p>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            {blockedByOrientation ? 'Finish Orientation First' : 'Module Locked'}
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {blockedByOrientation
                                ? 'Pass the Orientation Sprint quiz with 100% to unlock all core modules.'
                                : 'Master the previous module to unlock this step in your certification journey.'}
                        </p>

                        {availableModule && (
                            <button
                                onClick={() => navigate(`/module/${availableModule.id}`)}
                                className="mt-8 w-full rounded-lg bg-primary hover:bg-primary/90 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
                            >
                                Resume: {availableModule.title}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-background overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
            {/* Sidebar - Course Player Style - REMOVED to avoid duplication with global Layout sidebar */}
            {/* If immersive mode is desired later, we should unwrap this page from Layout in App.jsx */}

            <div className="flex-1 flex flex-col min-w-0">
                <CourseHeader
                    title={module.title}
                    moduleIndex={moduleIndex}
                    totalModules={courseModules.length}
                    moduleProgress={modulePercent}
                />

                <main className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar relative bg-gradient-to-b from-background to-[#0f1523]">
                    <div className="flex max-w-[1800px] mx-auto">
                        {/* Main Content */}
                        <div className="flex-1 min-w-0 px-4 py-8 md:px-12 md:py-12 lg:px-16 max-w-5xl mx-auto">
                            <div className="mb-10 animate-fade-in">
                                {module.videoUrl && (
                                    <div className="mb-8">
                                        <VideoPlayer src={module.videoUrl} title={`Overview: ${module.title}`} />
                                    </div>
                                )}
                                {module.audioUrl && (
                                    <div className="mb-8">
                                        <AudioPlayer src={module.audioUrl} title={`Audio: ${module.title}`} />
                                    </div>
                                )}

                                {module.additionalMedia && module.additionalMedia.map((media, idx) => (
                                    <div key={idx} className="mb-8">
                                        {media.type === 'video' && (
                                            <VideoPlayer src={media.url} title={media.title || `Additional Video ${idx + 1}`} />
                                        )}
                                        {media.type === 'audio' && (
                                            <AudioPlayer src={media.url} title={media.title || `Additional Audio ${idx + 1}`} />
                                        )}
                                    </div>
                                ))}

                                {/* Module Resources & Visuals */}
                                {(module.pdfUrl || (module.images && module.images.length > 0)) && (
                                    <div className="space-y-6">
                                        {module.pdfUrl && (
                                            <a
                                                href={module.pdfUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-4 p-4 rounded-xl bg-surface/40 border border-white/5 hover:border-primary/30 hover:bg-surface/60 transition-all group max-w-md"
                                            >
                                                <div className="p-3 bg-red-500/10 text-red-400 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                                    <FileText size={24} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-white text-sm group-hover:text-primary transition-colors">Download Reference Guide</h3>
                                                    <p className="text-xs text-slate-400">PDF Documentation</p>
                                                </div>
                                                <Download size={18} className="text-slate-600 group-hover:text-primary transition-colors" />
                                            </a>
                                        )}

                                        {module.images && module.images.map((img, idx) => (
                                            <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/20 group relative">
                                                <div className="bg-slate-900/50 p-3 border-b border-white/5 flex items-center justify-between gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-rose-500/50" />
                                                        <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                                                        <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                                                        <span className="text-xs text-slate-500 font-mono ml-2">Figure {idx + 1}</span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => setSelectedImage({ src: img, alt: `${module.title} diagram ${idx + 1}` })}
                                                    className="w-full relative cursor-zoom-in"
                                                >
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                                        <div className="bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-white text-xs font-medium flex items-center gap-2 border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                                            <ZoomIn size={14} />
                                                            Click to zoom
                                                        </div>
                                                    </div>
                                                    <img
                                                        src={img}
                                                        alt={`${module.title} diagram ${idx + 1}`}
                                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                                                        loading="lazy"
                                                    />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <ImageViewer
                                isOpen={!!selectedImage}
                                onClose={() => setSelectedImage(null)}
                                src={selectedImage?.src}
                                alt={selectedImage?.alt}
                            />

                            <motion.div
                                key={moduleId}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="prose prose-invert prose-slate max-w-none prose-lg
                                prose-headings:font-semibold prose-headings:tracking-tight
                                prose-p:text-slate-300 prose-p:leading-7
                                prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
                                prose-strong:text-white prose-strong:font-bold
                                prose-code:text-indigo-200 prose-code:bg-indigo-950/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                                prose-ul:my-6 prose-li:my-2
                                "
                            >
                                {loading ? (
                                    <div className="space-y-12">
                                        {/* Video Player Skeleton */}
                                        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-surface/30">
                                            <Skeleton className="h-full w-full bg-white/5" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-white/10" />
                                            </div>
                                        </div>

                                        {/* Title & Meta Skeleton */}
                                        <div className="space-y-4">
                                            <Skeleton className="h-8 w-1/3" />
                                            <div className="flex gap-3">
                                                <Skeleton className="h-6 w-24 rounded-full" />
                                                <Skeleton className="h-6 w-32 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Content Paragraphs */}
                                        <div className="space-y-4 pt-4">
                                            <Skeleton className="h-4 w-full" />
                                            <Skeleton className="h-4 w-[90%]" />
                                            <Skeleton className="h-4 w-[95%]" />
                                            <Skeleton className="h-4 w-[85%]" />
                                        </div>

                                        {/* Section Header */}
                                        <div className="pt-8">
                                            <Skeleton className="h-6 w-1/4 mb-4" />
                                            <Skeleton className="h-32 w-full rounded-xl" />
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
                                <div className="mt-16 space-y-12">
                                    <div className="border-t border-white/5 pt-12">
                                        <ModuleQuiz moduleId={moduleId} moduleTitle={module.title} />
                                    </div>
                                    <div>
                                        <ModuleLab moduleId={moduleId} moduleTitle={module.title} />
                                    </div>
                                </div>
                            )}

                            {/* Footer Navigation */}
                            <div className="mt-24 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                                <button
                                    onClick={() => prevModule && navigate(`/module/${prevModule.id}`)}
                                    disabled={!prevModule}
                                    className={clsx(
                                        "group px-4 py-2 text-slate-400 hover:text-white flex items-center gap-2 transition-colors",
                                        !prevModule && "opacity-0 cursor-default hidden sm:flex"
                                    )}
                                >
                                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                    <span>Previous Module</span>
                                </button>

                                {nextModule ? (
                                    <button
                                        onClick={() => {
                                            if (!canComplete) return;
                                            markCompleted(moduleId);
                                            navigate(`/module/${nextModule.id}`);
                                        }}
                                        className={clsx(
                                            "w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold transition-all hover:scale-[1.02] shadow-xl",
                                            !canComplete
                                                ? "bg-slate-800/50 text-slate-500 cursor-not-allowed border border-white/5"
                                                : "bg-gradient-to-r from-primary to-indigo-600 text-white shadow-primary/20 hover:shadow-primary/30 border border-white/10"
                                        )}
                                        disabled={!canComplete}
                                    >
                                        <span>Complete & Continue</span>
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
                                            "w-full sm:w-auto px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-3 font-semibold hover:scale-[1.02] shadow-xl",
                                            !canComplete
                                                ? "bg-slate-800/50 text-slate-500 cursor-not-allowed"
                                                : "bg-emerald-600 text-white shadow-emerald-500/20"
                                        )}
                                    >
                                        <CheckCircle2 size={18} />
                                        <span>Complete Certification</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Table of Contents (Desktop Right Sidebar) */}
                        {!loading && (
                            <div className="hidden xl:block w-72 shrink-0 p-8 sticky top-0 h-screen overflow-y-auto custom-scrollbar">
                                <TableOfContents content={content} />
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ModuleView;
