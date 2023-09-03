import './App.css';
import logo from './logo.svg';
import { NavBar } from './components/NavBar';
import { Tagline } from "./components/Tagline";
import { AboutMe } from "./components/AboutMe";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Tagline />
      <AboutMe />
    </div>
  );
}

export default App;
