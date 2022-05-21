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
              Borana Ceci
              <br/>
              YOUR COMPUTER SCIENTIST!
            </h3>
            <p>
              Click "About Me" for more!
            </p>
          
          </header>
        </div>
      );
  }
  
  
export default Home;
