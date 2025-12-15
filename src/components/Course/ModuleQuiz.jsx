import React, { useEffect, useMemo, useState } from 'react';
import { quizBank } from '../../data/quizData';
import { useProgress } from '../../context/ProgressContext';
import { CheckCircle2, Circle } from 'lucide-react';
import clsx from 'clsx';

const ModuleQuiz = ({ moduleId, moduleTitle, disabled = false, disabledReason = '' }) => {
    const { markQuizResult, getModuleProgress } = useProgress();
    const moduleProgress = getModuleProgress(moduleId);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [feedback, setFeedback] = useState('');

    const quiz = useMemo(() => quizBank[moduleId] || quizBank.default, [moduleId]);

    useEffect(() => {
        setSelectedAnswers({});
        setFeedback('');
    }, [moduleId]);

    const handleOptionClick = (questionId, optionIndex) => {
        if (disabled) return;
        setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (disabled) return;
        const correctCount = quiz.questions.reduce((total, question) => {
            const answer = selectedAnswers[question.id];
            return answer === question.correctIndex ? total + 1 : total;
        }, 0);

        const score = Math.round((correctCount / quiz.questions.length) * 100);
        const passed = score >= quiz.passingScore;
        setFeedback(passed ? 'Great job! Quiz passed.' : 'Keep practicing and try again.');
        markQuizResult(moduleId, score, quiz.passingScore);
    };

    return (
        <div className="mt-12 space-y-4 rounded-xl border border-slate-800 bg-surface/50 p-6 shadow-lg">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs uppercase tracking-wide text-primary font-semibold">Knowledge Check</p>
                    <h3 className="text-lg font-semibold text-white">{moduleTitle} Quiz</h3>
                    <p className="text-sm text-slate-400">Pass with {quiz.passingScore}% to unlock completion.</p>
                </div>
                {moduleProgress.quizPassed && (
                    <div className="flex items-center gap-2 text-emerald-400 text-sm">
                        <CheckCircle2 size={18} />
                        <span>Passed ({moduleProgress.quizScore}%)</span>
                    </div>
                )}
            </div>

            {disabled && (
                <div className="rounded-lg border border-amber-500/50 bg-amber-500/10 p-3 text-sm text-amber-50/90">
                    {disabledReason || 'Complete the required steps above to unlock this quiz.'}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {quiz.questions.map((question) => (
                    <div key={question.id} className="space-y-3">
                        <p className="text-sm font-semibold text-white">{question.question}</p>
                        <div className="grid gap-3">
                            {question.options.map((option, optionIndex) => {
                                const isSelected = selectedAnswers[question.id] === optionIndex;
                                const showCorrect = moduleProgress.quizScore !== null;
                                const isCorrect = question.correctIndex === optionIndex;
                                const statusClass = showCorrect
                                    ? isCorrect
                                        ? 'border-emerald-500/60 bg-emerald-500/10'
                                        : isSelected
                                            ? 'border-rose-500/60 bg-rose-500/10'
                                            : 'border-slate-700'
                                    : 'border-slate-700 hover:border-primary/60 hover:bg-primary/5';
                                return (
                                    <button
                                        type="button"
                                        key={option}
                                        className={clsx(
                                            'flex items-center gap-3 rounded-lg border px-3 py-2 text-left text-sm transition-all',
                                            statusClass,
                                            isSelected && !showCorrect && 'border-primary/80 bg-primary/5',
                                            disabled && 'cursor-not-allowed opacity-70'
                                        )}
                                        onClick={() => handleOptionClick(question.id, optionIndex)}
                                        disabled={disabled}
                                    >
                                        <Circle
                                            size={16}
                                            className={clsx(
                                                'shrink-0',
                                                showCorrect && isCorrect
                                                    ? 'text-emerald-400'
                                                    : isSelected
                                                        ? 'text-primary'
                                                        : 'text-slate-500'
                                            )}
                                            fill={isSelected && !showCorrect ? 'currentColor' : 'none'}
                                        />
                                        <span className="text-slate-200">{option}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}

                <div className="flex items-center justify-between gap-4">
                    <button
                        type="submit"
                        className="rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105"
                        disabled={disabled}
                    >
                        Submit Quiz
                    </button>
                    {moduleProgress.quizScore !== null && (
                        <p className={clsx('text-sm font-semibold', moduleProgress.quizPassed ? 'text-emerald-400' : 'text-rose-400')}>
                            Score: {moduleProgress.quizScore}%
                        </p>
                    )}
                </div>

                {feedback && <p className="text-sm text-slate-300">{feedback}</p>}
            </form>
        </div>
    );
};

export default ModuleQuiz;
