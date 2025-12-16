import React, { useEffect, useMemo, useState } from 'react';
import { quizBank } from '../../data/quizData';
import { useProgress } from '../../context/ProgressContext';
import { CheckCircle2, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const shuffleQuestionOptions = (question) => {
    const order = question.options.map((_, index) => index);

    for (let i = order.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }

    const shuffledOptions = order.map((originalIndex) => question.options[originalIndex]);
    const correctIndex = order.indexOf(question.correctIndex);

    return { ...question, options: shuffledOptions, correctIndex };
};

const ModuleQuiz = ({ moduleId, moduleTitle }) => {
    const { markQuizResult, getModuleProgress } = useProgress();
    const moduleProgress = getModuleProgress(moduleId);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [feedback, setFeedback] = useState('');

    const quiz = useMemo(() => quizBank[moduleId] || quizBank.default, [moduleId]);
    const [randomizedQuiz, setRandomizedQuiz] = useState(() => ({
        ...quiz,
        questions: quiz.questions.map(shuffleQuestionOptions),
    }));

    useEffect(() => {
        setSelectedAnswers({});
        setFeedback('');
        setRandomizedQuiz({
            ...quiz,
            questions: quiz.questions.map(shuffleQuestionOptions),
        });
    }, [moduleId, quiz]);

    const handleOptionClick = (questionId, optionIndex) => {
        setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const correctCount = randomizedQuiz.questions.reduce((total, question) => {
            const answer = selectedAnswers[question.id];
            return answer === question.correctIndex ? total + 1 : total;
        }, 0);

        const score = Math.round((correctCount / randomizedQuiz.questions.length) * 100);
        const passed = score >= randomizedQuiz.passingScore;
        setFeedback(passed ? 'Great job! Quiz passed.' : 'Keep practicing and try again.');
        markQuizResult(moduleId, score, randomizedQuiz.passingScore);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 space-y-4 rounded-xl border border-slate-800 bg-surface/50 p-6 shadow-lg"
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs uppercase tracking-wide text-primary font-semibold">Knowledge Check</p>
                    <h3 className="text-lg font-semibold text-white">{moduleTitle} Quiz</h3>
                    <p className="text-sm text-slate-400">Pass with {randomizedQuiz.passingScore}% to unlock completion.</p>
                </div>
                {moduleProgress.quizPassed && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-2 text-emerald-400 text-sm"
                    >
                        <CheckCircle2 size={18} />
                        <span>Passed ({moduleProgress.quizScore}%)</span>
                    </motion.div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {randomizedQuiz.questions.map((question) => (
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
                                    <motion.button
                                        type="button"
                                        key={option}
                                        whileTap={{ scale: 0.98 }}
                                        animate={{
                                            backgroundColor: isSelected && !showCorrect ? 'rgba(99, 102, 241, 0.05)' : undefined,
                                            borderColor: isSelected && !showCorrect ? 'rgba(99, 102, 241, 0.8)' : undefined
                                        }}
                                        className={clsx(
                                            'flex items-center gap-3 rounded-lg border px-3 py-2 text-left text-sm transition-all',
                                            statusClass
                                        )}
                                        onClick={() => handleOptionClick(question.id, optionIndex)}
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
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                ))}

                <div className="flex items-center justify-between gap-4">
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20"
                    >
                        Submit Quiz
                    </motion.button>
                    {moduleProgress.quizScore !== null && (
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={clsx('text-sm font-semibold', moduleProgress.quizPassed ? 'text-emerald-400' : 'text-rose-400')}
                        >
                            Score: {moduleProgress.quizScore}%
                        </motion.p>
                    )}
                </div>

                <AnimatePresence>
                    {feedback && (
                        <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm text-slate-300"
                        >
                            {feedback}
                        </motion.p>
                    )}
                </AnimatePresence>
            </form>
        </motion.div>
    );
};

export default ModuleQuiz;
