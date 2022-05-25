import { Link } from "react-router-dom";
import NavigBar from "./Styles/NavigBar.css";


function NavigationBar() {
    return(
        <navigBar>

        <Link to="/" className="navLink"> Home </Link>

        <Link to="/about" className="navLink"> About </Link>

        <Link to="/projects" className="navLink"> Projects </Link>

        <Link to="/contact" className="navLink"> Contact </Link>
        
        </navigBar>
      
  
    );
    
  }
  
  export default NavigationBar;
  