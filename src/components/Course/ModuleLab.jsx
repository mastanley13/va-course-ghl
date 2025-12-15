import React, { useEffect, useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import { ClipboardCheck } from 'lucide-react';

const ModuleLab = ({ moduleId, moduleTitle }) => {
    const { submitLab, getModuleProgress } = useProgress();
    const moduleProgress = getModuleProgress(moduleId);
    const [submission, setSubmission] = useState(moduleProgress.labSubmission || '');
    const [message, setMessage] = useState('');

    useEffect(() => {
        setSubmission(moduleProgress.labSubmission || '');
        setMessage('');
    }, [moduleId, moduleProgress.labSubmission]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!submission.trim()) {
            setMessage('Add a brief note or link before submitting.');
            return;
        }
        submitLab(moduleId, submission.trim());
        setMessage('Lab submission saved. You can update this anytime.');
    };

    return (
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/40 p-6 shadow-lg">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                <ClipboardCheck size={18} />
                <span>Hands-on Lab</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{moduleTitle} Lab Notes</h3>
            <p className="text-sm text-slate-400 mb-4">
                Capture deliverables, links, or evidence for this module's lab work. Submitting helps track progress toward
                completion.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
                <textarea
                    className="w-full rounded-lg border border-slate-700 bg-surface p-3 text-sm text-white focus:border-primary focus:outline-none"
                    rows={4}
                    value={submission}
                    onChange={(event) => setSubmission(event.target.value)}
                    placeholder="Paste loom links, screenshots, or completion notes here"
                />
                <div className="flex items-center justify-between gap-3">
                    <button
                        type="submit"
                        className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                    >
                        Save Lab Evidence
                    </button>
                    {moduleProgress.labSubmitted && <span className="text-xs text-emerald-400">Submission saved</span>}
                </div>
                {message && <p className="text-xs text-slate-300">{message}</p>}
            </form>
        </div>
    );
};

export default ModuleLab;
