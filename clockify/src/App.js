import './App.css';
import Calendar from './components/Calendar';
import Details from './components/Details';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
        <Route path='/' element={<><Header/><Calendar/></>}/>
        <Route path='/details' element={<><Header/><Details/></>}/>
       </Routes>
      </div>
    </Router>  
  );
}

export default App;


