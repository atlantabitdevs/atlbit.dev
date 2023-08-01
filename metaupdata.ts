import { Metaupdata } from './types/Metaupdata'

export const metaupdata: Metaupdata = {
  city: {
    name: 'Atlanta',
    position: 'left',
  },
  description:
    'The Atlanta BitDevs is a place for free and open Bitcoin education in Atlanta. Discussions will be technical but are open to people of all skill levels. Join the community and #LearnBitcoinTogether!',
  colors: {
    primary: {
      hex: '#FFFFFF',
      rgb: 'rgb(255, 153, 0)',
    },
    secondary: {
      hex: '#333333',
      rgb: 'rgb(51, 51, 51)',
    },
    tertiary: {
      hex: '#FF9900',
      rgb: 'rgb(255, 255, 255)',
    },
  },
  mainNav: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/page/about',
    },
    {
      text: 'Meetup',
      link: 'https://www.meetup.com/atlantabitdevs/',
    },
    {
      text: 'Contact',
      link: '/page/contact',
    },
  ],
  image: '/atlanta-bitdevs-poster.jpg',
}
