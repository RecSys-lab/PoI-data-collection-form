interface Question {
    question: string;
    options: string[];
}

export const prefrencesQuestionBag: Question[] = [
    {
        question: 'How many days do you speend travelling per year?',
        options: ['Less than 7', '7-15 days', '15-30 days', '30-60 days', 'Over 60 days']
    },
    {
        question: 'How much do you enjoy travelling?',
        options: [`I don't enjoy it`, 'Not much', 'So-So', '30-60 days', 'I die for it']
    }
];