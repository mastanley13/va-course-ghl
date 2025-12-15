import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const TableOfContents = ({ content }) => {
    const [activeId, setActiveId] = useState('');
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        // Naive regex to extract H2 and H3
        const lines = content.split('\n');
        const extracted = [];
        lines.forEach((line) => {
            const h2Match = line.match(/^##\s+(.+)$/);
            const h3Match = line.match(/^###\s+(.+)$/);

            if (h2Match) {
                const title = h2Match[1].trim();
                const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                extracted.push({ id, title, level: 2 });
            } else if (h3Match) {
                const title = h3Match[1].trim();
                const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                extracted.push({ id, title, level: 3 });
            }
        });
        setHeadings(extracted);
    }, [content]);

    // Scroll spy
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-10% 0px -80% 0px' }
        );

        headings.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <div className="hidden xl:block w-72 shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    On this page
                </h4>
                <nav className="space-y-1">
                    {headings.map((heading) => (
                        <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                                setActiveId(heading.id);
                            }}
                            className={clsx(
                                "block text-sm py-1.5 border-l-2 transition-all duration-200",
                                heading.level === 3 ? "pl-6" : "pl-4",
                                activeId === heading.id
                                    ? "border-primary text-primary font-medium"
                                    : "border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-600"
                            )}
                        >
                            {heading.title}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default TableOfContents;
