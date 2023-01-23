import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
    return (
        <div className="about__wrapper">
            <div className="about">
             <h2>About</h2>
             <Link to="/">Go to home</Link>
            </div>
        </div>
    )
}

export default About;
