import React, { useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, useNavigate } from 'react-router-dom';
import { courseModules, ORIENTATION_MODULE_ID } from '../data/courseData';
import { MarkdownComponents } from '../components/Course/Markdown/Renderers';
import CourseHeader from '../components/Layout/CourseHeader';
import TableOfContents from '../components/Course/TableOfContents';
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
        return (
            <h2
                id={id}
                className="text-2xl font-semibold mb-4 mt-10 text-white flex items-center gap-3 group scroll-mt-24"
            >
                <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                {children}
            </h2>
        );
    },
    h3: ({ children }) => {
        const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return (
            <h3 id={id} className="text-xl font-medium mb-3 mt-6 text-indigo-100 scroll-mt-24">
                {children}
            </h3>
        );
    },
};

const Card = ({ children, className }) => (
    <div
        className={clsx(
            'rounded-2xl border border-slate-800/60 bg-surface/60 shadow-xl shadow-black/20 backdrop-blur-md',
            className
        )}
    >
        {children}
    </div>
);

const CardHeader = ({ title, eyebrow, action, description }) => (
    <div className="flex flex-col gap-2 p-6 border-b border-slate-800/60">
        {eyebrow && <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{eyebrow}</div>}
        <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            {action}
        </div>
        {description && <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">{description}</p>}
    </div>
);

const ProgressChip = ({ label, value, tone = 'default' }) => (
    <span
        className={clsx(
            'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide border',
            tone === 'success' && 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200',
            tone === 'warning' && 'bg-amber-500/10 border-amber-500/40 text-amber-200',
            tone === 'accent' && 'bg-primary/10 border-primary/50 text-primary',
            tone === 'default' && 'bg-slate-800/70 border-slate-700 text-slate-200'
        )}
    >
        <span className="h-2 w-2 rounded-full bg-current" />
        {label}: {value}
    </span>
);

const Checkpoint = ({ label, complete }) => (
    <li className="flex items-start gap-3">
        <div
            className={clsx(
                'mt-1 flex h-6 w-6 items-center justify-center rounded-full border-2',
                complete
                    ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300'
                    : 'border-slate-700 bg-slate-900 text-slate-500'
            )}
        >
            <CheckCircle2 size={16} className={clsx(!complete && 'opacity-0')} />
        </div>
        <div className={clsx('leading-tight', complete ? 'text-slate-400 line-through' : 'text-slate-100')}>{label}</div>
    </li>
);

const ModuleView = () => {
    const { moduleId } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true); // Default open on desktop
    const { isModuleUnlocked, getModuleProgress, getModuleProgressPercent, markCompleted } = useProgress();

    const moduleIndex = courseModules.findIndex((m) => m.id === moduleId);
    const module = courseModules[moduleIndex];
    const nextModule = courseModules[moduleIndex + 1];
    const prevModule = courseModules[moduleIndex - 1];
    const moduleProgress = getModuleProgress(moduleId);
    const modulePercent = getModuleProgressPercent(moduleId);
    const canComplete = moduleProgress.quizPassed;
    const orientationProgress = getModuleProgress(ORIENTATION_MODULE_ID);
    const orientationCleared = orientationProgress.quizScore === 100 && orientationProgress.quizPassed;
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
                    <h2 className="text-2xl font-bold text-white">
                        {blockedByOrientation ? 'Finish Orientation First' : 'Complete the previous module'}
                    </h2>
                    <p className="text-slate-400">
                        {blockedByOrientation
                            ? 'Pass the Orientation Sprint quiz with 100% to unlock all core modules.'
                            : 'Finish the unlocked module(s) before this one to continue the certification path.'}
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

    const mediaItems = useMemo(() => {
        if (!content) return [];
        const matches = Array.from(content.matchAll(/!\[[^\]]*\]\((.*?)\)/g));
        return matches.map((match) => {
            const src = match[1];
            if (/\.(mp4|mov|webm)$/i.test(src)) return { type: 'video', src };
            if (/\.(mp3|wav|ogg)$/i.test(src)) return { type: 'audio', src };
            return { type: 'image', src };
        });
    }, [content]);

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
                    <div className="max-w-[1600px] mx-auto grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_360px] gap-6 lg:gap-10 px-4 md:px-10 lg:px-14 py-8 md:py-12">
                        {/* Main Content */}
                        <div className="flex-1 min-w-0 space-y-6 lg:space-y-8">
                            <Card className="overflow-hidden bg-gradient-to-br from-surface/80 via-surface to-surface/60 border-primary/10">
                                <div className="p-6 sm:p-8 flex flex-col gap-6">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                                            {module.type === 'orientation'
                                                ? 'Orientation'
                                                : module.type === 'intro'
                                                ? 'Overview'
                                                : 'Certification Module'}
                                        </span>
                                        <ProgressChip
                                            label="Progress"
                                            value={`${modulePercent}%`}
                                            tone={modulePercent === 100 ? 'success' : 'accent'}
                                        />
                                        {moduleProgress.labSubmitted && (
                                            <ProgressChip label="Lab" value="Submitted" tone="success" />
                                        )}
                                        {moduleProgress.quizPassed && <ProgressChip label="Quiz" value="Passed" tone="success" />}
                                        {!moduleProgress.quizPassed && <ProgressChip label="Quiz" value="Pending" tone="warning" />}
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{module.title}</h1>
                                        <p className="text-slate-400 max-w-3xl leading-relaxed">
                                            Navigate the orientation, overview, and labs with a guided layout. Each section is packaged into cards so you can scan summaries, preview media, and quickly jump to your next action.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 p-4">
                                            <div className="text-xs uppercase tracking-wide text-slate-500">Status</div>
                                            <div className="text-lg font-semibold text-white mt-1">
                                                {moduleProgress.completed ? 'Completed' : 'In progress'}
                                            </div>
                                            <div className="mt-1 text-sm text-slate-400">Keep momentum with checkpoints and labs.</div>
                                        </div>
                                        <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 p-4">
                                            <div className="text-xs uppercase tracking-wide text-slate-500">Orientation</div>
                                            <div className="text-lg font-semibold text-white mt-1">
                                                {orientationCleared ? 'Cleared' : 'Required'}
                                            </div>
                                            <div className="mt-1 text-sm text-slate-400">
                                                {orientationCleared
                                                    ? 'You can progress freely.'
                                                    : 'Score 100% on the orientation quiz to unlock modules.'}
                                            </div>
                                        </div>
                                        <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 p-4">
                                            <div className="text-xs uppercase tracking-wide text-slate-500">Next step</div>
                                            <div className="text-lg font-semibold text-white mt-1">
                                                {canComplete ? 'Mark complete' : 'Pass quiz'}
                                            </div>
                                            <div className="mt-1 text-sm text-slate-400">Finish checkpoints to enable navigation.</div>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <div className="grid gap-6 lg:gap-8 grid-cols-1 xl:grid-cols-3">
                                <Card className="xl:col-span-2">
                                    <CardHeader
                                        eyebrow="Overview"
                                        title="Module overview & resources"
                                        description="Review the curriculum details inside a padded card layout. Headings keep anchor links, and the markdown renderer still respects GitHub Flavored Markdown."
                                    />
                                    <div className="p-6 sm:p-8">
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
                                    </div>
                                </Card>

                                <div className="space-y-6">
                                    <Card className="sticky top-24">
                                        <CardHeader
                                            eyebrow="Next action"
                                            title={nextModule ? `Continue to ${nextModule.title}` : 'Finish strong'}
                                            description={
                                                nextModule
                                                    ? 'Complete the current checkpoints to unlock the next milestone.'
                                                    : 'Wrap up your certification with the last confirmations.'
                                            }
                                            action={
                                                <ProgressChip
                                                    label="Quiz"
                                                    value={moduleProgress.quizPassed ? 'Passed' : 'Pending'}
                                                    tone={moduleProgress.quizPassed ? 'success' : 'warning'}
                                                />
                                            }
                                        />
                                        <div className="p-6 space-y-4">
                                            <ul className="space-y-3">
                                                <Checkpoint label="Review module overview" complete={!!content && !loading} />
                                                <Checkpoint label="Pass the quiz" complete={moduleProgress.quizPassed} />
                                                <Checkpoint label="Submit the lab" complete={moduleProgress.labSubmitted} />
                                                <Checkpoint label="Mark module complete" complete={moduleProgress.completed} />
                                            </ul>
                                            <div className="flex flex-col gap-3 pt-2">
                                                {nextModule ? (
                                                    <button
                                                        onClick={() => {
                                                            if (!canComplete) return;
                                                            markCompleted(moduleId);
                                                            navigate(`/module/${nextModule.id}`);
                                                        }}
                                                        className={clsx(
                                                            'w-full px-4 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all',
                                                            !canComplete
                                                                ? 'bg-slate-900 text-slate-600 border border-slate-800 cursor-not-allowed'
                                                                : 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 hover:scale-[1.01]'
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
                                                            'w-full px-4 py-3 rounded-xl transition-transform flex items-center justify-center gap-2 font-semibold',
                                                            !canComplete
                                                                ? 'bg-slate-900 text-slate-600 border border-slate-800 cursor-not-allowed'
                                                                : 'bg-emerald-600 text-white shadow-emerald-500/20 hover:scale-[1.01]'
                                                        )}
                                                    >
                                                        <CheckCircle2 size={18} />
                                                        <span>Finish Course</span>
                                                    </button>
                                                )}
                                                {prevModule && (
                                                    <button
                                                        onClick={() => navigate(`/module/${prevModule.id}`)}
                                                        className="w-full px-4 py-2 rounded-xl border border-slate-800 text-slate-300 hover:text-white hover:border-primary/50 transition-colors"
                                                    >
                                                        <div className="flex items-center justify-center gap-2">
                                                            <ChevronLeft size={16} />
                                                            <span>Back to {prevModule.title}</span>
                                                        </div>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </Card>

                                    {!loading && (
                                        <Card>
                                            <CardHeader
                                                eyebrow="Checkpoints"
                                                title="Progress summary"
                                                description="Stay oriented with quick checkpoints that track the quiz, lab, and completion signals."
                                            />
                                            <div className="p-6 space-y-4">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 p-4">
                                                        <div className="text-xs uppercase tracking-wide text-slate-500">Quiz</div>
                                                        <div className="text-lg font-semibold text-white mt-1">
                                                            {moduleProgress.quizPassed
                                                                ? 'Passed'
                                                                : moduleProgress.quizScore
                                                                ? `${moduleProgress.quizScore}%`
                                                                : 'Not started'}
                                                        </div>
                                                        <div className="mt-1 text-sm text-slate-400">Earn 60% of module credit.</div>
                                                    </div>
                                                    <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 p-4">
                                                        <div className="text-xs uppercase tracking-wide text-slate-500">Lab</div>
                                                        <div className="text-lg font-semibold text-white mt-1">
                                                            {moduleProgress.labSubmitted ? 'Submitted' : 'Pending'}
                                                        </div>
                                                        <div className="mt-1 text-sm text-slate-400">Submit evidence for 20% completion.</div>
                                                    </div>
                                                    <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 p-4">
                                                        <div className="text-xs uppercase tracking-wide text-slate-500">Completion</div>
                                                        <div className="text-lg font-semibold text-white mt-1">
                                                            {moduleProgress.completed ? 'Recorded' : 'Not marked'}
                                                        </div>
                                                        <div className="mt-1 text-sm text-slate-400">Marks the final 20%.</div>
                                                    </div>
                                                    <div className="rounded-xl border border-slate-800/60 bg-slate-900/50 p-4">
                                                        <div className="text-xs uppercase tracking-wide text-slate-500">Unlocks</div>
                                                        <div className="text-lg font-semibold text-white mt-1">
                                                            {blockedByOrientation ? 'Blocked by Orientation' : 'Eligible'}
                                                        </div>
                                                        <div className="mt-1 text-sm text-slate-400">Complete orientation to unlock modules.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    )}
                                </div>
                            </div>

                            {!loading && mediaItems.length > 0 && (
                                <Card>
                                    <CardHeader
                                        eyebrow="Media gallery"
                                        title="Course media"
                                        description="Images, audio clips, and videos embedded in the markdown are collected here for quick reference."
                                    />
                                    <div className="p-6">
                                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                            {mediaItems.map((item, index) => (
                                                <div
                                                    key={`${item.src}-${index}`}
                                                    className="overflow-hidden rounded-xl border border-slate-800/70 bg-slate-900/60"
                                                >
                                                    {item.type === 'image' && (
                                                        <img src={item.src} alt="Markdown media" className="w-full h-44 object-cover" loading="lazy" />
                                                    )}
                                                    {item.type === 'video' && (
                                                        <video controls className="w-full h-44 object-cover bg-black">
                                                            <source src={item.src} />
                                                        </video>
                                                    )}
                                                    {item.type === 'audio' && (
                                                        <div className="p-4">
                                                            <audio controls className="w-full">
                                                                <source src={item.src} />
                                                            </audio>
                                                        </div>
                                                    )}
                                                    <div className="p-3 border-t border-slate-800/60 text-xs text-slate-400 truncate">{item.src}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            )}

                            {!loading && (
                                <>
                                    <ModuleQuiz moduleId={moduleId} moduleTitle={module.title} />
                                    <ModuleLab moduleId={moduleId} moduleTitle={module.title} />
                                </>
                            )}

                            {/* Footer Navigation */}
                            <div className="pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                                <button
                                    onClick={() => prevModule && navigate(`/module/${prevModule.id}`)}
                                    disabled={!prevModule}
                                    className={clsx(
                                        'group px-4 py-2 text-slate-400 hover:text-white flex items-center gap-2 transition-colors',
                                        !prevModule && 'opacity-0 cursor-default'
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
                                            'px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all hover:scale-105',
                                            !canComplete
                                                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                                                : 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25'
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
                                            'px-6 py-3 rounded-lg transition-transform flex items-center gap-2',
                                            !canComplete
                                                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                                                : 'bg-emerald-600 text-white shadow-emerald-500/20 hover:scale-105'
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
