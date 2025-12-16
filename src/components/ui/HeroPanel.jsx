import React from 'react';
import clsx from 'clsx';
import Card from './Card';

const HeroPanel = ({ kicker, title, subtitle, actions = [], meta, className }) => {
    return (
        <Card
            tone="gradient"
            padding="p-8"
            className={clsx('overflow-hidden border-white/10 relative', className)}
        >
            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-4 max-w-2xl">
                    {kicker && <p className="text-xs uppercase tracking-widest text-indigo-200 font-semibold">{kicker}</p>}
                    <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">{title}</h1>
                    {subtitle && <p className="text-indigo-100/80 text-base max-w-2xl">{subtitle}</p>}
                    {actions?.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                            {actions.map(({ label, onClick, variant = 'primary', icon: Icon }, index) => (
                                <button
                                    key={label + index}
                                    onClick={onClick}
                                    className={clsx(
                                        'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all',
                                        variant === 'ghost'
                                            ? 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                                            : 'bg-white text-indigo-900 hover:bg-indigo-50 shadow-lg shadow-black/20',
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

            <div className="absolute top-0 right-0 -mt-14 -mr-12 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-16 -ml-12 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl" />
        </Card>
    );
};

export default HeroPanel;
