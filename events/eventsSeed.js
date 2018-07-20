const Event = require('./event')


const events = [
    {
        title: 'Unity Gamemaker for Kids',
        facilitatorss: 'Tyson Butler-Boschma (Ph. 0448639179)',
        facilitators: '5b502d77b043e3052a687882',
        attendees: 0,
        status: 'Confirmed',
        creator: null,
        notes: '3 as extra child Amelie (Chi)  from App Course cancelled.',
        onsite: true,
        price: 55000,
        organisation: 'CA Mel',

        bookings: [
            {
                start: '08/04/2018 12:00',
                end: '08/04/2018 16:00',
                location: 'Room 005'
            },
            {
                start: '08/11/2018 12:00',
                end: '08/11/2018 16:00',
                location: 'Room 005'
            },
            {
                start: '08/18/2018 12:00',
                end: '08/18/2018 16:00',
                location: 'Room 005'
            }
        ]
    },
    {
        title: 'Hands-on Coding for Intermediate',
        facilitatorss: 'Simon Dwyer',
        facilitators: '5b502d77b043e3052a687882',
        attendees: 20,
        status: 'Confirmed',
        creator: null,
        notes: '',
        onsite: true,
        price: 55000,
        organisation: 'CA Mel L13-RM18',

        bookings: [
            {
                start: '08/25/2018 10:00',
                end: '08/25/2018 16:00',
                location: 'CA Mel L13-RM18'
            },
            {
                start: '09/01/2018 10:00',
                end: '09/01/2018 16:00',
                location: 'CA Mel L13-RM18'
            }
        ]
    },
    {
        title: 'Hands-on Coding for Beginners',
        facilitatorss: 'Simon Dwyer',
        facilitators: '5b502d77b043e3052a687882',
        attendees: 20,
        status: 'Pending',
        creator: null,
        notes: '',
        onsite: true,
        price: 55000,
        organisation: 'TBC',

        bookings: [
            {
                start: '09/22/2018 10:00',
                end: '09/22/2018 16:00',
                location: 'TBC'
            },
            {
                start: '09/29/2018 10:00',
                end: '09/29/2018 16:00',
                location: 'TBC'
            }
        ]
    }
]

Event.create(events)
    .then(() => {
        console.info(`seeded events`)

    })