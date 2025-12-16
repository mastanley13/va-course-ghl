import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Lock, PlayCircle, Trophy } from 'lucide-react';
import Card from './Card';

const ModuleCard = ({ module, to, locked, progress = 0, progressLabel }) => {
    return (
        <Card
            className={clsx(
                'group relative h-full transition-all duration-300 border',
                locked
                    ? 'bg-slate-900/50 border-slate-800 opacity-80'
                    : 'bg-surface border-slate-700 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1',
            )}
        >
            <Link to={to} className="absolute inset-0" aria-label={`Open ${module.title}`} />
            <div className="flex justify-between items-start mb-4">
                <div
                    className={clsx(
                        'p-3 rounded-lg',
                        locked ? 'bg-slate-800 text-slate-500' : 'bg-primary/10 text-primary',
                    )}
                >
                    {module.type === 'capstone' ? <Trophy size={24} /> : <PlayCircle size={24} />}
                </div>
                {locked ? (
                    <Lock size={18} className="text-slate-600" />
                ) : (
                    <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                )}
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {module.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                    {module.description ?? 'Learn the core concepts and implementation steps.'}
                </p>
            </div>

            {!locked && (
                <>
                    <div className="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-500 transition-all duration-700"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                        <span>{progressLabel}</span>
                        <span>{progress}%</span>
                    </div>
                </>
            )}
        </Card>
    );
};

export default ModuleCard;
