"use strict";

// header
const menu = [
    {
        id: 1,
        name: 'Home',
        link: '#'
    },
    {
        id: 2,
        name: 'About',
        link: '#'
    },
    {
        id: 3,
        name: 'Services',
        link: '#'
    },
    {
        id: 4,
        name: 'Portfolio',
        link: '#'
    },
    {
        id: 5,
        name: 'Pricing',
        link: '#'
    },
    {
        id: 6,
        name: 'Blog',
        link: '#',
        children: [
            {
                id: 11,
                name: 'Blog Home',
                link: '#'
            },
            {
                id: 12,
                name: 'Blog Single',
                link: '#'
            },
        ]
    },
    {
        id: 7,
        name: 'Pages',
        link: '#',
        children: [
            {
                id: 13,
                name: 'Elements',
                link: '#'
            },
            {
                id: 14,
                name: 'Level 2',
                link: '#',
                children: [
                    {
                        id: 20,
                        name: 'Item One',
                        link: '#'
                    },
                    {
                        id: 20,
                        name: 'Item Two',
                        link: '#'
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        name: 'Contact',
        link: '#'
    },
]
// hero

// clients

// about me

// numbers

const numbers = [
    {
        number: 2536,
        name: 'Projects Completed'
    },
    {
        number: 6784,
        name: 'Happy Clients'
    },
    {
        number: 2239,
        name: 'Cups of Coffee'
    },
    {
        number: 434,
        name: 'Real Professionals'
    },
]

// services

const services = [
    {
        icon: 'lnr lnr-pie-chart',
        title: 'Web Design',
        text: '“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”'
    },
    {
        icon: 'lnr lnr-laptop-phone',
        title: 'Web Development',
        text: 'If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.'
    },
    {
        icon: 'lnr lnr-camera',
        title: 'Photography',
        text: 'Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.'
    },
    {
        icon: 'lnr lnr-picture',
        title: 'Clipping Path',
        text: 'Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.'
    },
    {
        icon: 'lnr lnr-tablet',
        title: 'Apps Interface',
        text: 'Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts.'
    },
    {
        icon: 'lnr lnr-rocket',
        title: 'Graphic Design',
        text: 'You’ve heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, ‘believing’ is not just thinking that.'
    },
]

// latest work

// blogs

const blogs = [
    {
        image: 'b1.jpg',
        authorimage: 'user.png',
        authorname: 'Mark Wiens',
        date: '13th Dec',
        likes: '15',
        comments: '04',
        title: 'break through self doubt and fear',
        text: 'Dream interpretation has many forms; it can be done be done for the sake of fun, hobby or can be taken up as a serious career.'
    },
    {
        image: 'b2.jpg',
        authorimage: 'user.png',
        authorname: 'Mark Wiens',
        date: '13th Jan',
        likes: '10',
        comments: '15',
        title: 'portable fashion for young women',
        text: 'You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving.'
    },
    {
        image: 'b3.jpg',
        authorimage: 'user.png',
        authorname: 'Mark Wiens',
        date: '13th Dec',
        likes: '15',
        comments: '04',
        title: 'do dreams serve as a premonition',
        text: 'So many of us are demotivated to achieve anything. Such people are not enthusiastic about anything. They don’t want to work involved.'
    },
]

// projects

const categories = [
    {
        id: 1,
        name: 'Vector'
    },
    {
        id: 2,
        name: 'Raster'
    },
    {
        id: 3,
        name: 'UI/UX'
    },
    {
        id: 4,
        name: 'Printing'
    },

]

const projects = [
    {
        id: 1,
        title: '2D Vinyl Design',
        image: 'p1.jpg',
        category_id: 1
    },
    {
        id: 2,
        title: '3D Helmet Design',
        image: 'p2.jpg',
        category_id: 4
    },
    {
        id: 3,
        title: '3D Helmet Design',
        image: 'p2.jpg',
        category_id: 4
    },
    {
        id: 4,
        title: '2D Vinyl Design',
        image: 'p3.jpg',
        category_id: 2
    },
    {
        id: 5,
        title: '25D Vinyl Design',
        image: 'p4.jpg',
        category_id: 2
    },
    {
        id: 6,
        title: 'Creative Poster Design',
        image: 'p5.jpg',
        category_id: 3
    },

]



// testimonials

const testimonials = [
    {
        id: 'feed1',
        icon: 'user1.png',
        text: 'Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you.',
        name: 'Harriet Maxwell',
        jobtitle: 'CEO at Google'
    },
    {
        id: 'feed2',
        icon: 'user2.png',
        text: 'A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However.',
        name: 'Carolyn Craig',
        jobtitle: 'CEO at Facebook'
    },
    {
        id: 'feed3',
        icon: 'user2.png',
        text: 'A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However.',
        name: 'Petras Jonaitis',
        jobtitle: 'Ukvedys at BIT'
    },
    {
        id: 'feed3',
        icon: 'user2.png',
        text: 'A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However.',
        name: 'Jonas Petraitis',
        jobtitle: 'Gatviu slavejas at Vilniaus savivaldybe'
    },
    {
        id: 'feed3',
        icon: 'user2.png',
        text: 'A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However.',
        name: 'Giedrius Giedraitis',
        jobtitle: 'Statybininkas'
    },
]

//Pricing

const plans = [
    {
        id: 1,
        title: 'Economy',
        description: 'For the individuals',
        feature1: 'Secure Online Transfer',
        feature2: 'Unlimited Styles for interface',
        feature3: 'Reliable Customer Service',
        price: '199.99'
    },
    {
        id: 2,
        title: 'Business',
        description: 'For the individuals',
        feature1: 'Secure Online Transfer',
        feature2: 'Unlimited Styles for interface\n',
        feature3: 'Reliable Customer Service',
        price: '299.99'
    },
    {
        id: 3,
        title: 'Premium',
        description: 'For the individuals',
        feature1: 'Secure Online Transfer',
        feature2: 'Unlimited Styles for interface\n',
        feature3: 'Reliable Customer Service',
        price: '399.99'
    },
    {
        id: 4,
        title: 'Exclusive',
        description: 'For the individuals',
        feature1: 'Secure Online Transfer',
        feature2: 'Unlimited Styles for interface\n',
        feature3: 'Reliable Customer Service',
        price: '499.99'
    },

]


// brands

const brands = [
    {
        id: '1',
        name: 'l1',
        source: 'l1.png'
    },
    {
        id: '2',
        name: 'l2',
        source: 'l2.png'
    },
    {
        id: '3',
        name: 'l3',
        source: 'l3.png'
    },
    {
        id: '4',
        name: 'l4',
        source: 'l4.png'
    },
    {
        id: '5',
        name: 'l5',
        source: 'l5.png'
    }
];

// footer

