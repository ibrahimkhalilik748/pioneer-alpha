import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Component/Slider/Slider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutUS from './Component/AboutUS/AboutUS';

function App() {
  return (
    <div className="App">
      <Router>
        <Slider></Slider>
        <AboutUS></AboutUS>
      </Router>
    </div>
  );
}

export default App;
