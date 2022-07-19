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
    desc: 'Uma Otima Descricao', 
    techs: [
      {
        id: v4(), 
        name: 'React',
      },
    ]
  },
  {
    id: v4(), 
    title: 'Podcaster', 
    img: podcasterIMG, 
    desc: 'Uma Otima Descricao', 
    techs: [
      {
        id: v4(), 
        name: 'React',
      },
    ]
  },
  {
    id: v4(), 
    title: 'moveIt', 
    img: timerIMG, 
    desc: 'Uma Otima Descricao', 
    techs: [
      {
        id: v4(), 
        name: 'React',
      },
    ]
  },
  {
    id: v4(), 
    title: 'CoffeDelivery', 
    img: coffeeIMG, 
    desc: 'Uma Otima Descricao', 
    techs: [
      {
        id: v4(), 
        name: 'React'
      }
    ]
  },
  {
    id: v4(), 
    title: 'toDO', 
    img: todoIMG, 
    desc: 'Uma Otima Descricao', 
    techs: [
      {
        id: v4(), 
        name: 'React',
      },
    ]
  },
]