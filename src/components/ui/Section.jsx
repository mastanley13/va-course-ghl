import React from 'react';
import clsx from 'clsx';
import Card from './Card';

const SectionHeader = ({ title, description, icon: Icon, action }) => (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex items-center gap-3">
            {Icon && (
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={18} />
                </span>
            )}
            <div>
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">{description}</p>
                <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
        </div>
        {action}
    </div>
);

const Section = ({ children, title, description = 'Component driven', icon, action, className, padded = true }) => (
    <Card className={clsx('w-full', className)} padding={padded ? 'p-6' : 'p-0'}>
        {(title || description || icon) && (
            <SectionHeader title={title} description={description} icon={icon} action={action} />
        )}
        {children}
    </Card>
);

export default Section;
