import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {


  return (
    <div>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/detail">
              <Route path=":id" element={<Detail/>}/>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
