export const HOME = 'home'

export const BLUE = 'blue'
export const GREEN = 'green'
export const RED = 'red'

export const routes = [
  { name: HOME, path: '/', forwardTo: GREEN },

  { name: BLUE, path: '/blue' },
  { name: GREEN, path: '/green' },
  { name: RED, path: '/red' }
]
