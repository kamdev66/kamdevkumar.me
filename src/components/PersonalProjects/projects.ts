import CSVControlImage from '../../assets/projects/csv-control-vue.png';
import PizzaShopImage from '../../assets/projects/pizza-shop.png';
import ReduxZustandImage from '../../assets/projects/redux-zustand.png';
import PosterrImage from '../../assets/projects/posterr.png';
import MetagameImage from '../../assets/projects/metagame.png';

export const projects = [
  {
    name: 'iShop',
    label: 'control-vue',
    tech_stack: [ 'TypeScript','Next.js','Node.js','MongoDB','Redis','Kafka','Microservice','TensorFlow'],
    github: 'https://github.com/kamdev66/ishop',
    thumb: CSVControlImage,
  },
  {
    name: 'Detecto AI',
    label: 'pizza-shop',
    tech_stack: [ 'Next.js', 'TypeScript', 'Radix UI', 'TensorFlow'],
    github: 'https://github.com/vicentemattos1/pizza-shop-web',
    thumb: PizzaShopImage,
  },
  {
    name: 'iDraw',
    label: 'redux-zustand',
    tech_stack: ['ReactJS', 'Redux', 'Zustand', 'TypeScript', 'JSON'],
    github: 'https://github.com/vicentemattos1/redux-zustand',
    thumb: ReduxZustandImage,
  },
  {
    name: 'AlgoBaba SketchBoard',
    label: 'posterr',
    tech_stack: ['ReactJS', 'Next.js', 'TypeScript', 'CSS'],
    github: 'https://github.com/vicentemattos1/twitter-frontend',
    thumb: PosterrImage,
  },
  {
    name: 'AlgoBaba Sheets',
    label: 'metagame',
    tech_stack: ['ReactJS', 'Next.js', 'JavaScript', 'Docker', 'Python', 'Django'],
    github: 'https://github.com/danilovilhena/metagame-front',
    thumb: MetagameImage,
  },
  
];
