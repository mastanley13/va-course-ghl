import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { courseModules, ORIENTATION_MODULE_ID } from '../data/courseData';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import HeroPanel from '../components/ui/HeroPanel';
import StatCard from '../components/ui/StatCard';
import Section from '../components/ui/Section';
import ModuleCard from '../components/ui/ModuleCard';

const moduleDescription = (module) => {
    if (module.id === 'overview') return 'Start here to understand the certification path and expectations.';
    if (module.id === ORIENTATION_MODULE_ID)
        return 'Complete this sprint and pass the quiz with 100% to unlock Modules 1-16.';
    if (module.type === 'capstone') return 'Put everything together in a portfolio-ready automation build.';
    if (module.type === 'resource') return 'Reference templates and implementation guides.';
    return 'Learn the core concepts and implementation steps.';
};

const Dashboard = () => {
    const navigate = useNavigate();
    const {
        completedCount,
        totalTrackableModules,
        averageProgress,
        getModuleProgressPercent,
        isModuleUnlocked,
        getModuleProgress,
    } = useProgress();
    const { currentUser } = useAuth();

    const stats = [
        {
            label: 'Modules Completed',
            value: completedCount,
            helper: `Out of ${totalTrackableModules} modules`,
            icon: CheckCircle,
            tone: 'success',
        },
        {
            label: 'Average Progress',
            value: `${Math.round(averageProgress)}%`,
            helper: 'Weighted by quiz and lab completion',
            icon: BookOpen,
            tone: 'info',
        },
        {
            label: 'Unlocked Modules',
            value: courseModules.filter((module) => isModuleUnlocked(module.id)).length,
            helper: 'Complete modules to unlock the next one',
            icon: PlayCircle,
            tone: 'neutral',
        },
    ];

    const resumeModule = () => {
        const nextModule = courseModules.find(
            (module) => module.type !== 'resource' && isModuleUnlocked(module.id) && !getModuleProgress(module.id).completed,
        );
        const target = nextModule ?? courseModules.find((module) => isModuleUnlocked(module.id)) ?? courseModules[0];
        if (target) navigate(`/module/${target.id}`);
    };

    return (
        <div className="animate-fade-in space-y-8">
            <HeroPanel
                kicker="GoHighLevel VA Certification"
                title={`Welcome back, ${currentUser?.name}`}
                subtitle="A modern React-first learning experience. Build skills, validate mastery, and unlock modules through quizzes and labs."
                actions={[
                    { label: 'Resume course', onClick: resumeModule },
                    {
                        label: 'View admin',
                        variant: 'ghost',
                        onClick: () => navigate('/admin'),
                        icon: Lock,
                    },
                ]}
                meta={
                    <div className="min-w-[220px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-indigo-100">
                        <p className="text-xs uppercase tracking-widest text-indigo-200 font-semibold">Cohort status</p>
                        <div className="mt-2 text-3xl font-bold">{Math.round(averageProgress)}%</div>
                        <p className="text-sm text-indigo-100/80">Avg. completion rate across unlocked modules.</p>
                    </div>
                }
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                ))}
            </div>

            <Section
                title="Course Curriculum"
                description="Component-driven"
                icon={BookOpen}
                action={
                    <Link
                        to={`/module/${ORIENTATION_MODULE_ID}`}
                        className="text-sm font-semibold text-primary hover:text-white underline"
                    >
                        Jump to orientation
                    </Link>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courseModules.map((module) => {
                        const locked = !isModuleUnlocked(module.id);
                        const progress = Math.round(getModuleProgressPercent(module.id));
                        const moduleProgress = getModuleProgress(module.id);
                        const label = moduleProgress.quizPassed ? 'Quiz passed' : 'Quiz pending';

                        return (
                            <ModuleCard
                                key={module.id}
                                module={{ ...module, description: moduleDescription(module) }}
                                locked={locked}
                                progress={progress}
                                progressLabel={label}
                                to={`/module/${module.id}`}
                            />
                        );
                    })}
                </div>
            </Section>
        </div>
    );
};

export default Dashboard;
