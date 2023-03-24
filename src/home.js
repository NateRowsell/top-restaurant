import LogoImage from './assets/img/Logo.png'

export function createNavBar() {
  //Main container for Nav bar
  let navContainer = document.createElement('div')
  navContainer.setAttribute('id', 'navContainer')

  // Nav bar Logo for left side
  let logoContainer = document.createElement('div')
  const Logo = new Image()
  Logo.src = LogoImage
  logoContainer.setAttribute('id', 'logoContainer')
  logoContainer.appendChild(Logo)

  // Nav Bar Menu Items for center of nav bar
  let navBarMenu = document.createElement('div')
  navBarMenu.setAttribute('id', 'navBarMenu')
  let navBarItem1 = document.createElement('div')
  navBarItem1.id = 'renderHome'
  navBarItem1.className = 'navBarItem'
  navBarItem1.innerText = 'Home'
  let navBarItem2 = document.createElement('div')
  navBarItem2.id = 'renderMenu'
  navBarItem2.className = 'navBarItem'
  navBarItem2.innerText = 'Menu'
  let navBarItem3 = document.createElement('div')
  navBarItem3.id = 'renderAbout'
  navBarItem3.className = 'navBarItem'
  navBarItem3.innerText = 'About'

  // Icons for right side of nav bar
  let navBarIcons = document.createElement('div')
  navBarIcons.setAttribute('id', 'navBarIcons')
  let navBarIcon1 = document.createElement('div')
  navBarIcon1.className = 'navBarIcon'
  let searchIcon = document.createElement('span')
  searchIcon.className = 'material-symbols-outlined'
  searchIcon.innerText = 'search'
  navBarIcon1.appendChild(searchIcon)
  let navBarIcon2 = document.createElement('div')
  navBarIcon2.className = 'navBarIcon'
  let favIcon = document.createElement('span')
  favIcon.className = 'material-symbols-outlined'
  favIcon.innerText = 'favorite'
  navBarIcon2.appendChild(favIcon)
  let navBarIcon3 = document.createElement('div')
  navBarIcon3.className = 'navBarIcon'
  let cartIcon = document.createElement('span')
  cartIcon.className = 'material-symbols-outlined'
  cartIcon.innerText = 'shopping_cart'
  navBarIcon3.appendChild(cartIcon)

  navBarMenu.append(navBarItem1, navBarItem2, navBarItem3)
  navBarIcons.append(navBarIcon1, navBarIcon2, navBarIcon3)

  navContainer.append(logoContainer, navBarMenu, navBarIcons)

  let mainContainer = document.getElementById('content')
  mainContainer.appendChild(navContainer)
}

export function renderBackground() {
  let mainDiv = document.getElementById('content')
  mainDiv.classList.add('homeBackground')
}

export function renderHomeContent() {
  let mainDiv = document.getElementById('content')
  let homeDiv = document.createElement('div')
  let homeTitle = document.createElement('h1')
  let homeText = document.createElement('p')
  homeDiv.id = 'homeContent'
  homeTitle.textContent = 'The Cake Shop'
  homeText.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae odio id tortor sagittis iaculis.'
  homeDiv.append(homeTitle, homeText)
  mainDiv.appendChild(homeDiv)
}

export function clearContent() {
  let mainDiv = document.getElementById('content')
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.lastChild)
  }
}
