import React from 'react';
import clsx from 'clsx';

const Skeleton = ({ className, ...props }) => {
    return (
        <div
            className={clsx("animate-pulse rounded-lg bg-white/5", className)}
            {...props}
        />
    );
};

export default Skeleton;
