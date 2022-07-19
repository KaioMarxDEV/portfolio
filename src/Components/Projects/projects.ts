import { v4 } from 'uuid';

import coffeeIMG from '../../../public/coffee.png';
import ignewsIMG from '../../../public/ignews.png';
import podcasterIMG from '../../../public/podcaster.png';
import timerIMG from '../../../public/timer.png';
import todoIMG from '../../../public/todo.png';

export const projectsArray = [
  {
    id: v4(), 
    title: 'IG News', 
    img: ignewsIMG, 
    desc: "Developed a news platform where the user can quickly access the news and be aware of what's happening. This application resolves the problem of SSG and SEO most sites experience, with 100% perfomance on Desktop benchmark.", 
    techs: [
      {
        id: v4(), 
        name: 'Next.js',
      },
      {
        id: v4(),
        name: 'Typescript'
      },
      {
        id: v4(),
        name: 'JS & React'
      },
      {
        id: v4(), 
        name: 'Zod',
      },
    ]
  },
  {
    id: v4(), 
    title: 'Podcaster', 
    img: podcasterIMG, 
    desc: 'Used Next.js, HTML, CSS to build a podcast platform and consumes external API by handling the data asynchronously. It resolves a lot of what happening in real world song platform by implementing a performatic media player', 
    techs: [
      {
        id: v4(), 
        name: 'Next.js',
      },
      {
        id: v4(),
        name: 'HTML'
      }, {
        id: v4(),
        name: 'CSS'
      }, {
        id: v4(),
        name: 'React & State'
      },
    ]
  },
  {
    id: v4(), 
    title: 'timer', 
    img: timerIMG, 
    desc: 'Created a pomodo style time management website, where resolves a problems of data flow through components by implementing React context API.', 
    techs: [
      {
        id: v4(), 
        name: 'React',
      },
      {
        id: v4(), 
        name: 'Typescript',
      },
      {
        id: v4(), 
        name: 'HTML & CSS',
      },
    ]
  },
  {
    id: v4(), 
    title: 'CoffeDelivery', 
    img: coffeeIMG, 
    desc: 'Developed an application to manage a shopping cart, where resolves some real world problems that you have when buying your coffee.', 
    techs: [
      {
        id: v4(), 
        name: 'React'
      },
      {
        id: v4(), 
        name: 'React Hooks & State',
      },
      {
        id: v4(),
        name: 'Node/Typescript'
      }
    ]
  },
  {
    id: v4(), 
    title: 'toDO', 
    img: todoIMG, 
    desc: 'This application seems simple, but It resolves the problem often seen with task managment. The technologies used here put into action the react state programming and managment to ensure UI dinamic changes.', 
    techs: [
      {
        id: v4(), 
        name: 'React',
      },
      {
        id: v4(), 
        name: 'HTML',
      },
      {
        id: v4(), 
        name: 'CSS',
      },
      {
        id: v4(), 
        name: 'Styled Components',
      },
    ]
  },
]