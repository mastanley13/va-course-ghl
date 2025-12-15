export const quizBank = {
    default: {
        passingScore: 80,
        questions: [
            {
                id: 'q1',
                question: 'What should you focus on while progressing through this module?',
                options: [
                    'Capturing the key workflows and decisions needed to implement the feature',
                    'Memorizing every menu item by heart',
                    'Skipping the exercises to move faster',
                    'Ignoring how this module connects to the rest of the platform',
                ],
                correctIndex: 0,
            },
            {
                id: 'q2',
                question: 'How do you prove mastery for this module?',
                options: [
                    'By completing the quiz and submitting the lab deliverable',
                    'By only reading the overview text',
                    'By asking another trainee to complete it for you',
                    'By postponing practice until the capstone',
                ],
                correctIndex: 0,
            },
            {
                id: 'q3',
                question: 'When can the next module be unlocked?',
                options: [
                    'After the previous module is marked complete',
                    'Whenever you want, regardless of completion',
                    'Only after the capstone is finished',
                    'It is never unlocked',
                ],
                correctIndex: 0,
            },
        ],
    },
    'module-1': {
        passingScore: 80,
        questions: [
            {
                id: 'm1q1',
                question: 'What is the purpose of the Dashboard module?',
                options: [
                    'To centralize a business snapshot with KPIs and alerts',
                    'To manage reputation reviews',
                    'To build community membership portals',
                    'To configure phone numbers',
                ],
                correctIndex: 0,
            },
            {
                id: 'm1q2',
                question: 'Which action shows understanding of the dashboard widgets?',
                options: [
                    'Configuring widgets that reflect client goals',
                    'Ignoring widget customization options',
                    'Deleting the entire dashboard layout',
                    'Only using default metrics without validation',
                ],
                correctIndex: 0,
            },
        ],
    },
};
