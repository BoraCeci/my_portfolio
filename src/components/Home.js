import React from "react";
import logo from './BoraC.jpg';
import './App.css';



function Home(props) {



    return (
        <div className="App">
          <header className={props.theme}>
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
              Click <a href="https://boraceci.netlify.app/about" className="navLinkh">
              About
            </a> for more!
            </p>

            
          
          </header>
        </div>
      );
  }
  
  
export default Home;
