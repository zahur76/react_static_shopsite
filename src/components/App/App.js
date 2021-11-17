import './App.css';
import NavBar from '../NavBar/NavBar.js'
import HeroImage from '../HeroImage/HeroImage'
import CarouselDeals from '../Carousel/Carousel.js';
import Departments from '../Departments/Departments.js';
import Footer from '../Footer/Footer.js'
import Menu from '../Menu/Menu.js'

function App() {
  return (
    <div className="App">
      <NavBar title="Shop All Day"/>
      <HeroImage /> 
      <Menu />     
      <CarouselDeals />
      <Departments />
      <Footer />       
    </div>
  );
}

export default App;
