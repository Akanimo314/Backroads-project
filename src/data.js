import img1 from './images/tour-1.jpeg'
import img2 from './images/tour-2.jpeg'
import img3 from './images/tour-3.jpeg'
import img4 from './images/tour-4.jpeg'
import img5 from './images/tour-5.jpeg'

export const pageLink = [
    {id: 1, href: '#home', text: 'home'},
    {id: 3, href: '#services', text: 'services'},
    {id: 2, href: '#about', text: 'about'},
    {id: 4, href: '#tours', text: 'tours'}
]

export const socialLink = [
    {id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook"},
    {id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter"},
    {id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace"}
]

export const serviceLink = [
    {id: 1, 
    icon: "fas fa-wallet fa-fw", 
    title: "saving money", 
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
    {id: 2, 
    icon: "fas fa-tree fa-fw", 
    title: "endless hiking", 
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
    {id: 2, 
    icon: "fas fa-socks fa-fw", 
    title: "amazing comfort", 
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
]

export const tourLink = [
    {id: 1,
    date: "august 26th, 2020", 
    subTitle: "Tibet Adventure", 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    days: '6 days',
    cost: "from $2100", 
    image: img1},
    {id: 2,
    date: "october 1th, 2020", 
    subTitle: "best of java", 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    days: '11 days',
    cost: "from $1400", 
    image: img2},
    {id: 3,
    date: "september 15th, 2020", 
    subTitle: "explore hong kong", 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    days: '8 days',
    cost: "from $5000", 
    image: img3},
    {id: 4,
    date: "december 5th, 2019", 
    subTitle: "kenya highlights", 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    days: '20 days',
    cost: "from $3300", 
    image: img4}, 
    {id: 5,
    date: "december 7th, 2019", 
    subTitle: "Nigeria highlights", 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Nigeria",
    days: '30 days',
    cost: "from $4000", 
    image: img5}, 
]