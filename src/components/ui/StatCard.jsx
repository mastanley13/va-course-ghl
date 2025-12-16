import React from 'react';
import clsx from 'clsx';
import Card from './Card';

const toneMap = {
    neutral: {
        border: 'border-slate-800',
        icon: 'text-slate-300',
        value: 'text-white',
    },
    success: {
        border: 'border-emerald-600/50',
        icon: 'text-emerald-400',
        value: 'text-emerald-200',
    },
    info: {
        border: 'border-primary/50',
        icon: 'text-primary',
        value: 'text-white',
    },
};

const StatCard = ({ label, value, helper, icon: Icon, tone = 'neutral' }) => {
    const toneClasses = toneMap[tone] || toneMap.neutral;
    return (
        <Card className={clsx('h-full', toneClasses.border)}>
            <div className="flex items-center justify-between text-sm text-slate-300">
                <span>{label}</span>
                {Icon && <Icon size={16} className={toneClasses.icon} />}
            </div>
            <div className={clsx('mt-2 text-3xl font-bold', toneClasses.value)}>{value}</div>
            {helper && <p className="text-xs text-slate-500 mt-1">{helper}</p>}
        </Card>
    );
};

export default StatCard;
