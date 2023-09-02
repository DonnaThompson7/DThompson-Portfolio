import './App.css';
import logo from './logo.svg';
import { NavBar } from './components/NavBar';
import { About } from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
    </div>
  );
}

export default App;
