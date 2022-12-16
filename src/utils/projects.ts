import { v4 } from 'uuid'
export const projects = [
  {id: v4(), name: 'Gofinance', platform: 'Back-end API for Finance managment written in Go', url: 'https://github.com/KaioMarxDEV/gofinance', disabled: false},
  {id: v4(), name: 'GofinanceWeb', platform: 'Website interface to control finances consuming gofinance API', url: 'https://github.com/KaioMarxDEV/gofinanceWeb', disabled: false},
  {id: v4(), name: 'timer', platform: 'Pomodoro style website', url: 'https://github.com/KaioMarxDEV/timer', disabled: false},
  {id: v4(), name: 'todo', platform: 'Productivity Website to control time', url: 'https://github.com/KaioMarxDEV/toDO-Website', disabled: false},
]

// CANDIDATES TO projects array 
// {id: v4(), name: 'Podcaster', platform: 'Website with podcast player', url: 'https://github.com/KaioMarxDEV/', disabled: true},
// {id: v4(), name: 'Ecommerce', platform: 'Website of ecommerce', url: 'https://github.com/KaioMarxDEV/', disabled: true},
 