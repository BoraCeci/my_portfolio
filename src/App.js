import React, { useState } from "react";
import './App.css';
import Home from './components/Home';
//import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

//adding new staff for the theme

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;



function App() {

  //adding new stuff for theme

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return(

    <Router> 
      <NavigationBar/>

      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
      &emsp;Switch&emsp;
       {console.log(theme)}   
        <button onClick={() => themeToggler()}>Light/Dark</button>
      </StyledApp>
      </ThemeProvider>

      <Routes>

      <Route path="/" element={<Home theme={theme}/>}/>
      <Route path="/about" element={<About theme={theme}/>}/>
      <Route path="/projects" element={<Projects theme={theme}/>}/>
      <Route path="/contact" element={<Contact theme={theme}/>}/>


      </Routes>

    </Router>



  );
  
}

export default App;
