import './App.css';
import logo from './logo.svg';
import { NavBar } from './components/NavBar';
import { Tagline } from "./components/Tagline";
import { AboutMe } from "./components/AboutMe";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Tagline />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
