import { Meetup } from './types/Meetup'

export const meetup: Meetup = {
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
  ai: [
    {
      name: 'Summarized',
      system:
        'You create useful summaries of long, technical articles in a "cliff notes" format.',
      promptTemplate:
        'Summarize the following in a cliff notes format using no more than 160 words, splitting into paragraphs where appropriate:',
    },
    {
      name: 'Explain Like I&rsquo;m Five',
      system:
        'You summarize articles in an "explain like I&rsquo;m five" format. Assume that the user may not be familiar with the technical jargon in the original text.',
      promptTemplate:
        'Summarize the following in an ELI5 format using a maximum of 60 words:',
    },
  ],
}
