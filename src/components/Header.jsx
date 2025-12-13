import { useNavigate } from "react-router-dom"
import logo from "/src/assets/shared/logo.svg"
// import menuicon from "/src/assets/icon-hamburger.svg";
// import closeicon from "/src/assets/icon-close.svg";

const Header = () => {
    const nav = useNavigate();
    return (
        <header className='container'>
            <nav>
                <picture>
                    <img src={logo} alt="" />
                </picture>
                <div>
                    <a onClick={() => nav('/')}>00 Home</a>
                    <a onClick={() => nav("/destination")}>01 Destination</a>
                    <a onClick={() => nav("/crew")}>02 Crew</a>
                    <a onClick={() => nav("/technology")}>03 Technology</a>
                </div>
            </nav>
        </header>
    )
}

export default Header