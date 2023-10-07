import Navbar from './components/Navbar';
import './styles/reset.css';
import './styles/navbar.css';
import './styles/body.css';
import Hero from './components/Hero';
import './styles/hero.css';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
