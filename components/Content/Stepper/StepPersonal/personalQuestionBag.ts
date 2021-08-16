interface Question {
    question: string;
    options: string[];
}

export const personalQuestionBag: Question[] = [
    {
        question: 'How many days do you speend travelling per year?',
        options: ['Less than 7', '7-15 days', '15-30 days', '30-60 days', 'Over 60 days']
    },
    {
        question: 'How much do you enjoy travelling?',
        options: [`I don't enjoy it`, 'Not much', 'So-So', '30-60 days', 'I die for it']
    },
    {
        question: 'what is the main reason for travelling in our opinion?',
        options: ['Leisure', 'Business', 'Meeting friends and family', 'Adventure', 'Other']
    },
    {
        question: 'How many countries have you visited so far?',
        options: ['Never been abroad', '1-3 countries', '4-10 countries', '10-30 countries', 'Over 30 countries']
    },
    {
        question: 'what is the most interesting reason for you to choose a destination?',
        options: ['Adventure', 'Culture and Religion', 'Nature', 'Rest and Relaxation', 'Other (health, sport, etc.)']
    },
    {
        question: 'what is the most challenging problem that you have faced while choosing a destination?',
        options: ['Quality of services', 'Language and Culture shock', 'Reliability', 'Price', 'Other']
    },
    {
        question: 'what means of transport do you prefer for a journey?',
        options: ['Bicycle and Motorbike', 'Bus, Car, and Caravan', 'Ship', 'Train', 'Airplane']
    },
    {
        question: 'what means of transport do you prefer for a journey?',
        options: ['', '', '', '', '']
    }
];
