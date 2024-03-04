//import logo from './logo.svg';
import React from 'react';
import{ BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        
        <h1 class="title-header">
          Audio Project
        </h1>
        
        <div class="nav-bar">
          <Link to="/" className="nav-element"> Home </Link>
          <Link to="/about" className="nav-element"> About Us </Link>
        </div>

        <Routes>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return(
    <div  className="content">
        <div className="log">

        </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div  className="content">
        <div className="profile">
          Nando
        </div>
        <div className="profile">
          Guillermo
        </div>
        <div className="profile">
          Elyas
        </div>
        <div className="profile">
          Zander
        </div>
    </div>
  );
}

export default App;
