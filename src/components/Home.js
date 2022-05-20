import React from "react";
import logo from './BoraC.jpg';
import './App.css';


function Home() {

    return (
        <div className="App">
          <header className="App-header">
            <h1>
              Hello 👋🏻 
            </h1>
            <img src={logo} className="App-logo" alt="logo"/>
            <h3>
              I'm
              <br/>
              Borana Ceci
              <br/>
              THE COMPUTER SCIENTIST!
            </h3>
            <p>
              Click the link below for more 👇🏻
            </p>
            <a
              className="App-link"
              href="https://github.com/BoraCeci"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here
            </a>
          </header>
        </div>
      );
  }
  
  
export default Home;
