import './App.css';
import Banner from './components/Banner/Banner'
import Nav from './components/Nav/Nav'
import Services from './components/Services'
import Description from './components/Description'
import AboutMe from './components/AboutMe'
import Animated from './components/Animated'
import Contact from './components/Contact/Contact'
import Form from './components/Form'
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Banner  />
      <About />
      {/* <Animated /> */}
      {/* <Services /> */}
      <Experience />
      <Work />
      {/* <Description /> */}
      {/* <AboutMe /> */}
      <Contact />
      {/* <Form /> */}
      
    </div>
  );
}

export default App;
