import { Link } from "react-router-dom";
import routes from "../../constants/routes";
import "./About.css";

const About = () => {
    return (
        <div className="about__wrapper">
            <h1 className="about__headline">Список статей</h1>
            <div className="about__content">
             <h1>Политический анализ на основе международных договоров.</h1>
             <h3>Дата создания: 23.01.2023, 16:57</h3>
             <h3>Авторы: Команда "A potentia ad actum"</h3>
             <Link to={routes.ARTICLE}>&lt;--- Читать статью</Link>
            </div>
        </div>
    )
}

export default About;
