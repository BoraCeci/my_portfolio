import './App.css';
import Home from './components/Home';
import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return(

    <Router>
      <NavigationBar/>

      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutMe/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>


      </Routes>

    </Router>



  );
  
}

export default App;
