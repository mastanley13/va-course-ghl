import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CheckCircle2, AlertTriangle, Info, Copy, ClipboardCheck, Terminal } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

// --- Helper Components ---

const CopyButton = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all opacity-0 group-hover:opacity-100"
            title="Copy to clipboard"
        >
            {copied ? <ClipboardCheck size={16} className="text-emerald-500" /> : <Copy size={16} />}
        </button>
    );
};

// --- Custom Renderers ---

const CodeBlock = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    const codeString = String(children).replace(/\n$/, '');

    if (!inline && match) {
        return (
            <div className="relative group my-6 overflow-hidden rounded-xl border border-slate-700/50 shadow-2xl bg-[#1e1e1e]">
                {/* Mac-style Window Controls mock */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-black/20">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    </div>
                    <div className="ml-2 text-xs text-slate-500 font-mono flex items-center gap-1">
                        <Terminal size={10} />
                        {match[1]}
                    </div>
                </div>

                <div className="text-sm font-mono">
                    <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent' }}
                        {...props}
                    >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
                <CopyButton text={codeString} />
            </div>
        );
    }

    return (
        <code className={clsx("px-1.5 py-0.5 rounded-md bg-slate-800 text-indigo-300 font-mono text-sm border border-slate-700/50", className)} {...props}>
            {children}
        </code>
    );
};

const CustomLink = ({ href, children }) => {
    const isAnchor = href.startsWith('#');
    const isExternal = href.startsWith('http');

    return (
        <a
            href={href}
            className="inline-flex items-center gap-0.5 text-primary hover:text-accent underline decoration-primary/30 underline-offset-4 transition-colors font-medium"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
        >
            {children}
        </a>
    )
}

const Blockquote = ({ children }) => {
    // Logic to detect alert types from content (naive implementation, can be enhanced)
    // E.g. if content starts with [IMPORTANT], [WARNING], etc.
    // For now, default styling:

    return (
        <div className="my-6 pl-6 pr-4 py-4 border-l-4 border-primary bg-primary/5 rounded-r-xl">
            <div className="flex items-start gap-3">
                <Info className="shrink-0 text-primary mt-1" size={20} />
                <div className="text-slate-300 italic">
                    {children}
                </div>
            </div>
        </div>
    );
};

const Heading1 = ({ children }) => (
    <h1 className="text-4xl font-bold mb-8 mt-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent pb-2 border-b border-slate-800">
        {children}
    </h1>
);

const Heading2 = ({ children }) => (
    <h2 className="text-2xl font-semibold mb-4 mt-10 text-white flex items-center gap-3 group">
        <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
        {children}
    </h2>
);

const Heading3 = ({ children }) => (
    <h3 className="text-xl font-medium mb-3 mt-6 text-indigo-100">
        {children}
    </h3>
);

const CheckListItem = ({ children, checked }) => (
    <li className="flex items-start gap-3 my-2 group">
        <div className={clsx(
            "mt-1 w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-colors",
            checked
                ? "bg-emerald-500 border-emerald-500 text-white"
                : "bg-slate-800 border-slate-600 group-hover:border-primary/50"
        )}>
            {checked && <CheckCircle2 size={14} strokeWidth={3} />}
        </div>
        <div className={clsx("leading-relaxed", checked ? "opacity-50 line-through decoration-slate-600" : "text-slate-300")}>
            {children}
        </div>
    </li>
);

// Map for ReactMarkdown components
export const MarkdownComponents = {
    code: CodeBlock,
    a: CustomLink,
    blockquote: Blockquote,
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    // Custom logic for checklists is harder with standard react-markdown w/o specific plugins,
    // but we can style standard lists nicely:
    ul: ({ children }) => <ul className="space-y-2 my-4">{children}</ul>,
    li: ({ children, checked, ...props }) => {
        // If checkbox-style list (GFM)
        if (typeof checked === 'boolean') {
            return <CheckListItem checked={checked}>{children}</CheckListItem>
        }
        return (
            <li className="flex items-start gap-3 my-2 text-slate-300">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                <span className="leading-relaxed">{children}</span>
            </li>
        )
    },
    hr: () => <hr className="my-10 border-slate-800" />,
    table: ({ children }) => <div className="overflow-x-auto my-8 rounded-lg border border-slate-700/50"><table className="w-full text-left border-collapse">{children}</table></div>,
    thead: ({ children }) => <thead className="bg-slate-800/50 text-slate-200">{children}</thead>,
    th: ({ children }) => <th className="p-4 font-semibold border-b border-slate-700">{children}</th>,
    td: ({ children }) => <td className="p-4 border-b border-slate-800/50 text-slate-400">{children}</td>,
};
