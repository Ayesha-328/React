import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav'
import Home from './components/Home';
import About  from './components/About';
import Features  from './components/Features';
import Menu  from './components/Menu';
import Choose from './components/Choose';
import Stats from './components/Stats'
import Gallery from './components/Gallery';
import Offer from "./components/Offer"
import Team from './components/Team';
import Reservation from './components/Reservation';
import Testimonails from './components/Testimonails';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Features/>
      <Menu/>
      <Choose/>
      <Stats/>
      <Gallery/>
      <Offer/>
      <Team/>
      <Reservation />
      <Testimonails />
      <Footer />
    </div>
  );
}

export default App;
