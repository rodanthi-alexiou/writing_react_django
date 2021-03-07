import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from "./HomePage"



function App() {
  return (
    <div className='body'>
      <HomePage />
    </div>
  );
}

export default App;
