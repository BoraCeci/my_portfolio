import React,{Component} from "react";
import "./Styles/Projects.css";

const Projects=(props) =>{
  
    return(
        <div className={props.theme}>
            
            <br/>
            <div className="headline">Check Out Some Of  <br/> My Projects  <br/> 👇🏻 </div>
            <ul className="list">

                <li className="list-item">
                <div>Equal Stacks
                    HackerRank Problem Solving </div>
                    <a href="https://youtu.be/ZsuGsDs5vvU" className="navLinkp">Youtube Link! </a>
                </li>
                
                <li className="list-item">
                    <div>Group Project
                        Wordle Remake Game</div>
                    <a href="https://github.com/liger1apwm/wordle-remake" className="navLinkp">Github Repository Link!</a>
                </li>
                <li className="list-item">
                    <div>Minesweeper Game
                        Java</div>
                    <a href="https://youtu.be/mcv0m3cfmTk" className="navLinkp">Youtube Link!</a>
                </li>
               
                <li className="list-item">
                <div> FavLinks Form </div>
                    <a href="https://github.com/BoraCeci/favLinks" className="navLinkp">Github Repository Link! </a>
                </li>

                <li className="list-item">
                <div>Database Project
                    Java
                </div>
                    <a href="https://youtu.be/LgXzP61pjag" className="navLinkp">Youtube Link! </a>
                </li>

            </ul>
        </div>
    );
}
export default Projects;