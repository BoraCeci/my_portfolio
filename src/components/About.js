import "./Styles/About.css";
import logo from './borac.png';



function About (props) {
    return (

    <div className={props.theme}>
            
            <img src={logo} className="logo" alt="logo"/>

            <p className={props.theme.concat("-text")}> I am currently working as an Office Manager for more than two years now.
             Beside office obligations, I am specialized in doing data entries, analysis, budgets, and any other reports or financial enquires that our clients require.
             Along with my 2 years experience as an Office Manager in my company, I am graduating this spring for Computer Science major along with a Math minor. 
             I have always been passionate to code and create websites and I do love team works so I believe that I will be a great pleasure to working together
             <br/>
             <br/>

             Want to know more? Download my Resume <a href="https://drive.google.com/file/d/1HJmI-H2ZJ64H_ul8q_ef-QXTOeJo3JYo/view" download>Here! </a> </p>
            
        </div>

    );
}

export default About;