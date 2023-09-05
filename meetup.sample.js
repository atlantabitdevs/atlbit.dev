'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.meetup = void 0
exports.meetup = {
  city: {
    name: 'New',
    position: 'left',
  },
  description:
    'BitDevs is a community for those interested in discussing and participating in the research and development of Bitcoin and related protocols',
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
      link: 'https://www.meetup.com/BitDevsNYC/',
    },
  ],
  image: '/new-bitdevs-default.jpg',
  ai: [
    {
      name: 'Summarized',
      system:
        'You create useful summaries of long, technical articles in a "cliff notes" format.',
      promptTemplate:
        'Summarize the following using no more than 160 words, splitting into paragraphs where appropriate:',
    },
    {
      name: 'Explain Like I&rsquo;m Five',
      system:
        'You summarize articles in an "explain like I&rsquo;m five" format. Assume that the user may not be familiar with the technical jargon in the original text.',
      promptTemplate: 'Summarize the following using a maximum of 60 words:',
    },
  ],
}
