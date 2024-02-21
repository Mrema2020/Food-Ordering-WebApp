import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import biriani from './assets/birianiKuku.jpg'
import banana from './assets/BananaStew.jpg'
import salad from './assets/fruitsSalad.jpg'
import Body from './Body.jsx'

function App() {
 return(
  <>
 <Header />
 <Body />
 <div className="menu" id="menu">
 <Card  src={biriani} name="Biriani Nyama" />
 <Card  src={banana} name="Ndizi Nyama" />
 <Card  src={salad} name="Fruits Salad" />
 </div>
 <Footer />
 </>
 );
}

export default App
