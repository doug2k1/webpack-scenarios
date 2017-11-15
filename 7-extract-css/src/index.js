import cow from './cow'
import './sass/main.scss'

document.querySelector('#box').innerText = cow.say('Now I have CSS in a separated file!')
