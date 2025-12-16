import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Lock, PlayCircle, Trophy } from 'lucide-react';
import Card from './Card';

const ModuleCard = ({ module, to, locked, progress = 0, progressLabel }) => {
    return (
        <Card
            className={clsx(
                'group relative h-full transition-all duration-500 border backdrop-blur-sm',
                locked
                    ? 'bg-surface/30 border-white/5 opacity-60'
                    : 'bg-surface/60 border-white/10 hover:border-primary/50 hover:bg-surface/80 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1',
            )}
        >
            <Link to={to} className="absolute inset-0 z-10" aria-label={`Open ${module.title}`} />
            <div className="flex justify-between items-start mb-6">
                <div
                    className={clsx(
                        'p-3 rounded-xl transition-colors duration-300',
                        locked
                            ? 'bg-slate-800/50 text-slate-600'
                            : 'bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary/20 group-hover:to-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-transform',
                    )}
                >
                    {module.type === 'capstone' ? <Trophy size={24} /> : <PlayCircle size={24} />}
                </div>
                {locked ? (
                    <Lock size={18} className="text-slate-700" />
                ) : (
                    <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-pulse" />
                )}
            </div>

            <div className="space-y-3">
                <h3 className={clsx(
                    "text-lg font-bold transition-colors duration-300",
                    locked ? "text-slate-500" : "text-slate-100 group-hover:text-white"
                )}>
                    {module.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 group-hover:text-slate-400 transition-colors">
                    {module.description ?? 'Learn the core concepts and implementation steps.'}
                </p>
            </div>

            {!locked && (
                <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span className="font-medium text-slate-300">{progressLabel}</span>
                        <span className="font-mono text-primary/80">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                        <div
                            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            )}
        </Card>
    );
};

export default ModuleCard;
