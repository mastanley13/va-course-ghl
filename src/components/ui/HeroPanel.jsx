import React from 'react';
import clsx from 'clsx';
import Card from './Card';

const HeroPanel = ({ kicker, title, subtitle, actions = [], meta, className }) => {
    return (
        <Card
            tone="gradient"
            padding="p-8"
            className={clsx('overflow-hidden border-white/10 relative backdrop-blur-3xl bg-surface/40', className)}
        >
            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-4 max-w-2xl">
                    {kicker && <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-300 font-bold bg-indigo-500/10 inline-block px-2 py-1 rounded border border-indigo-500/20">{kicker}</p>}
                    <h1 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100 leading-tight drop-shadow-sm">{title}</h1>
                    {subtitle && <p className="text-indigo-100/70 text-base max-w-2xl leading-relaxed">{subtitle}</p>}
                    {actions?.length > 0 && (
                        <div className="flex flex-wrap gap-3 pt-2">
                            {actions.map(({ label, onClick, variant = 'primary', icon: Icon }, index) => (
                                <button
                                    key={label + index}
                                    onClick={onClick}
                                    className={clsx(
                                        'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5',
                                        variant === 'ghost'
                                            ? 'bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 hover:border-white/20'
                                            : 'bg-white text-indigo-950 hover:bg-indigo-50 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30',
                                    )}
                                >
                                    {Icon && <Icon size={16} />}
                                    <span>{label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                {meta}
            </div>

            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        </Card>
    );
};

export default HeroPanel;
