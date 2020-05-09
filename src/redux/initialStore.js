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
                    'id': '1',
                    'img': ''
                },
                {
                    'title': 'Program 2',
                    'description': '6-10 pushups?',
                    'id': '2',
                    'img': ''
                },
                {
                    'title': 'Program 3',
                    'description': '11-20 pushups?',
                    'id': '3',
                    'img': ''
                },
                {
                    'title': 'Program 4',
                    'description': '16-20 pushups?',
                    'id': '4',
                    'img': ''
                },
                {
                    'title': 'Program 5',
                    'description': '21-25 pushups?',
                    'id': '5',
                    'img': ''
                },
                {
                    'title': 'Program 6',
                    'description': '26-30 pushups?',
                    'id': '6',
                    'img': ''
                },
                {
                    'title': 'Program 7',
                    'description': '31-35 pushups?',
                    'id': '7',
                    'img': ''
                },
                {
                    'title': 'Program 8',
                    'description': '36-40 pushups?',
                    'id': '8',
                    'img': ''
                },
                {
                    'title': 'Program 9',
                    'description': '41-45 pushups?',
                    'id': '10',
                    'img': ''
                },
                {
                    'title': 'Program 10',
                    'description': '46-50 pushups?',
                    'id': '11',
                    'img': ''
                },
                {
                    'title': 'Program 11',
                    'description': '51-55 pushups?',
                    'id': '12',
                    'img': ''
                },
                {
                    'title': 'Program 12',
                    'description': '56-60 pushups?',
                    'id': '13',
                    'img': ''
                },
                {
                    'title': 'Program 13',
                    'description': 'More than 60 pushups?',
                    'id': '14',
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
                    'id': '1',
                    'img': ''
                },
                {
                    'title': 'Program 2',
                    'description': '4-5 pullups?',
                    'id': '2',
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
                    'id': '1',
                    'img': ''
                },
                {
                    'title': 'Program 2',
                    'description': '21-40 squats',
                    'id': '2',
                    'img': ''
                }
            ]
        }
    ]
};

export default initialStore;
