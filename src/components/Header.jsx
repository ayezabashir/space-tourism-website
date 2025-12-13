import { useNavigate } from "react-router-dom"
import logo from "/src/assets/shared/logo.svg"
import NavItems from "./NavItems";
// import menuicon from "/src/assets/icon-hamburger.svg";
// import closeicon from "/src/assets/icon-close.svg";

const Header = () => {
    const nav = useNavigate();
    return (
        <header className='container fixed top-0 left-0 right-0'>
            <nav className="flex justify-between items-center xl:py-30 pl-24">
                <picture onClick={()=>nav("/")}>
                    <img className="cursor-pointer transform hover:rotate-180 duration-300 ease-in-out" src={logo} alt="" />
                </picture>
                <div className="w-[90%] xl:w-[60%] h-100 flex justify-end bg-darkblue/50 ">
                    <div className="flex items-center justify-between gap-40 px-50 font-barlow font-light text-md">
                        <NavItems />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header