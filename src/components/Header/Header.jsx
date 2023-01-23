import { Link, useLocation } from 'react-router-dom';
import Logo from "../UI/Logo/Logo";
import "./Header.css";

const Header = () => {

    const location = useLocation();
    const route = location.pathname;

    return (
        <div className="header">
            <div className="header__logo">
                <div><Logo /></div>
                <div className="header__logo-headline"><h2>Континентальный Союз</h2></div>
            </div>
            <div className="header__content">
                <div className="header__content-item">
                    {route === "/" ? <h3 className="current"><Link to="/">Главная</Link></h3> : <h3><Link to="/">Главная</Link></h3>} 
                </div>
                <div className="header__content-item">
                    {route === "/about" ? <h3 className="current"><Link to="/about">Статьи</Link></h3> : <h3><Link to="/about">Статьи</Link></h3>}
                </div>
                <div className="header__content-item">
                    {route === "/news" ? <h3 className="current"><Link to="/news">Новости</Link></h3> : <h3><Link to="/news">Новости</Link></h3>}
                </div>
                <div className="header__content-item">
                    {route === "/gov" ? <h3 className="current"><Link to="/gov">Государственные организации</Link></h3> : <h3><Link to="/gov">Государственные организации</Link></h3>}
                </div>
            </div>
        </div>
    )
}

export default Header;
