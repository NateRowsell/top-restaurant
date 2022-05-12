import './styles/style.css'
import ImageMain from './assets/img/home-page-big.jpg'

const MainImage = new Image()
MainImage.src = ImageMain

function createHomePage() {
  let div = document.getElementById('content')
  div.appendChild(testingImage)
}

export default createHomePage
