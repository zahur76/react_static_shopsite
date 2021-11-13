import './App.css';
import NavBar from '../NavBar/NavBar.js'
import HeroImage from '../HeroImage/HeroImage'
import CarouselDeals from '../Carousel/Carousel.js';
import Departments from '../Departments/Departments.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroImage />      
      <CarouselDeals />
      <Departments />
    </div>
  );
}

export default App;
