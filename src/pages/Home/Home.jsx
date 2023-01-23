import { Link } from "react-router-dom";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Slider from "../../components/Slider/Slider";
import Logo from "../../assets/logo.png";
import Handshake from "../../assets/handshake.png";
import "animate.css/animate.min.css";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home__gradient">
                <div className="home__greeting">
                   
                    <div className="home__greeting-headline">
                        <div><img className="home__logo" src={Logo} width={500} height={400} alt="No img found"></img></div>
                        <div className="home__greeting-headline--text">
                            <h1>Континентальный Союз - объединение будущего!</h1>
                            <h1 className="home__greeting-headline--quote">A potentia ad actum — от возможного к действительному.</h1>
                            <h3>Международная площадка для ведения переговоров, новое интеграционное объединение, объединяющее функции, возможности, привилегии международных организаций на евразийском пространстве.</h3>
                        </div>
                    </div>
                  
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <div className="home__main">
                          <div>
                            <h1 className="home__main-goal--headline">Цель Континентального Союза</h1>
                            <h2 className="home__main-goal">Основной задачей Союза является объединение дружественных стран для построения крепкой культурной и экономической базы 
                              с дальнейшим развитием научно-технического потенциала и увеличения качества жизни населения.
                              Континентальный союз представляет собой международную наднациональную организацию для управления важными 
                              социально-экономическими процессами, а также продвижения общих политических интересов для гармоничного развития каждой из стран.</h2>
                          </div>
                          <div>
                            <img className="home__logo" src={Handshake} width={500} height={400} alt="Img not found" />
                          </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className="home__slider">
                  <AnimationOnScroll animateIn="animate__fadeInLeft">
                   <h1 className="home__slider-headline">Основные направления деятельности</h1>
                   <Slider />
                  </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

export default Home;
