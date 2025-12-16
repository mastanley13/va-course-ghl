import React from 'react';
import clsx from 'clsx';

const toneClasses = {
    default: 'bg-surface/70 backdrop-blur-xl border-white/5 shadow-lg shadow-black/20',
    gradient: 'bg-gradient-to-br from-indigo-900/90 via-slate-900 to-slate-950 backdrop-blur-3xl border-white/10 shadow-2xl shadow-primary/20',
    muted: 'bg-slate-900/60 backdrop-blur-md border-white/5 shadow-md shadow-black/10',
};

const Card = ({ children, className, padding = 'p-6', tone = 'default', border = true }) => {
    return (
        <div
            className={clsx(
                'relative rounded-2xl transition-shadow',
                padding,
                border !== false && 'border',
                toneClasses[tone] || toneClasses.default,
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Card;
