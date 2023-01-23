import HeaderLogo from "./headerLogo.jpg";

const Logo = () =>  {
    return (
        <div className="logo__wrapper">
            <img src={HeaderLogo} height="70" width="100" alt="Logo"></img>
        </div>
    )
}

export default Logo;
