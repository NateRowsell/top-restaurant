import './styles/style.css'
import {
  createNavBar,
  renderBackground,
  renderHomeContent,
  clearContent,
} from './home.js'

createNavBar()
renderBackground()
renderHomeContent()

// FIX ONCLICK //

const content = document.getElementById('content')
const renderHome = document.getElementById('renderHome')
const renderMenu = document.getElementById('renderMenu')
const renderAbout = document.getElementById('renderAbout')

function homeClick() {
  clearContent()
  createNavBar()
  renderBackground()
  renderHomeContent()
  document.getElementById('renderHome').classList.add('active')
  document.getElementById('content').classList.add('homeBackground')
  document.getElementById('content').classList.remove('menuBackground')
  document.getElementById('content').classList.remove('aboutBackground')
  document.getElementById('renderMenu').classList.remove('active')
  document.getElementById('renderAbout').classList.remove('active')
}

function menuClick() {
  clearContent()
  createNavBar()
  renderBackground()
  document.getElementById('renderMenu').classList.add('active')
  document.getElementById('content').classList.add('menuBackground')
  document.getElementById('content').classList.remove('homeBackground')
  document.getElementById('content').classList.remove('aboutBackground')
  document.getElementById('renderHome').classList.remove('active')
  document.getElementById('renderAbout').classList.remove('active')
}

renderHome.onclick = () => {
  homeClick()
  document.getElementById('renderHome').onclick = homeClick()
}

renderMenu.onclick = () => {
  menuClick()
  document.getElementById('renderMenu').onclick = menuClick()
}

renderAbout.onclick = () => {
  clearContent()
  createNavBar()
  renderBackground()
  renderAbout.classList.add('active')
  content.classList.add('aboutBackground')
  content.classList.remove('menuBackground')
  content.classList.remove('homeBackground')
  renderMenu.classList.remove('active')
  renderHome.classList.remove('active')
}
