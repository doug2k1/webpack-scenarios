import cow from './cow'
import './sass/main.scss'

const message = 'is awesome'
document.querySelector('#box').innerText = cow.say(`Webpack with Babel and SASS ${message}!`)
