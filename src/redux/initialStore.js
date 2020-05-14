const initialStore = {
    exerciseTypes: [
        {
            title: '100 push ups',
            id: 'pushups',
            type: 'pushups',
            path: '/pushups',
        },
        {
            title: '50 pull ups',
            id: 'pullups',
            type: 'pullups',
            path: '/pullups',
        },
        {
            title: '300 squats',
            id: 'squats',
            type: 'squats',
            path: '/squats',
        }
    ],
    programs: [
        {
            type: 'pushups',
            list: [
                {
                    'title': 'Program 1',
                    'description': 'Less than 5 pushups?',
                    'id': 'program1',
                    'img': '',
                    'list': [
                        {
                            'day': 1,
                            'approaches': [2, 3, 2, 2, 3],
                            'id': 1
                        },
                        {
                            'day': 2,
                            'approaches': [3, 3, 2, 2, 4],
                            'id': 2
                        },
                        {
                            'day': 3,
                            'approaches': [4, 4, 3, 3, 5],
                            'id': 3
                        },
                        {
                            'day': 4,
                            'approaches': [4, 5, 4, 4, 6],
                            'id': 4
                        },
                        {
                            'day': 5,
                            'approaches': [5, 5, 4, 4, 7],
                            'id': 5
                        },
                        {
                            'day': 6,
                            'approaches': [5, 6, 4, 4, 7],
                            'id': 7
                        }
                    ]
                },
                {
                    'title': 'Program 2',
                    'description': '6-10 pushups?',
                    'id': 'program2',
                    'img': ''
                },
                {
                    'title': 'Program 3',
                    'description': '11-20 pushups?',
                    'id': 'program3',
                    'img': ''
                },
                {
                    'title': 'Program 4',
                    'description': '16-20 pushups?',
                    'id': 'program4',
                    'img': ''
                },
                {
                    'title': 'Program 5',
                    'description': '21-25 pushups?',
                    'id': 'program5',
                    'img': ''
                },
                {
                    'title': 'Program 6',
                    'description': '26-30 pushups?',
                    'id': 'program6',
                    'img': ''
                },
                {
                    'title': 'Program 7',
                    'description': '31-35 pushups?',
                    'id': 'program7',
                    'img': ''
                },
                {
                    'title': 'Program 8',
                    'description': '36-40 pushups?',
                    'id': 'program8',
                    'img': ''
                },
                {
                    'title': 'Program 9',
                    'description': '41-45 pushups?',
                    'id': 'program10',
                    'img': ''
                },
                {
                    'title': 'Program 10',
                    'description': '46-50 pushups?',
                    'id': 'program11',
                    'img': ''
                },
                {
                    'title': 'Program 11',
                    'description': '51-55 pushups?',
                    'id': 'program12',
                    'img': ''
                },
                {
                    'title': 'Program 12',
                    'description': '56-60 pushups?',
                    'id': 'program13',
                    'img': ''
                },
                {
                    'title': 'Program 13',
                    'description': 'More than 60 pushups?',
                    'id': 'program14',
                    'img': ''
                }
            ]
        },
        {
            type: 'pullups',
            list: [
                {
                    'title': 'Program 1',
                    'description': '<4 pullups?',
                    'id': 'program1',
                    'img': ''
                },
                {
                    'title': 'Program 2',
                    'description': '4-5 pullups?',
                    'id': 'program2',
                    'img': ''
                }
            ]
        },
        {
            type: 'squats',
            list: [
                {
                    'title': 'Program 1',
                    'description': '1-20 squats',
                    'id': 'program1',
                    'img': ''
                },
                {
                    'title': 'Program 2',
                    'description': '21-40 squats',
                    'id': 'program2',
                    'img': ''
                }
            ]
        }
    ],
    currentExerciseType: '',
    currentProgramId: ''
};

export default initialStore;
