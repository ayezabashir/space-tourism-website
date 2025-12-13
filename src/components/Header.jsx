import { useNavigate } from "react-router-dom"
import logo from "/src/assets/shared/logo.svg"
import NavItems from "./NavItems";
import menuicon from "/src/assets/shared/icon-hamburger.svg";
import closeicon from "/src/assets/shared/icon-close.svg";
import { useState } from "react";

const Header = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    const nav = useNavigate();
    return (
        <header className='container fixed top-0 left-0 right-0'>
            <nav className="mt-20 md:mt-0 flex justify-between items-center xl:py-30 pl-24">
                <picture onClick={() => nav("/")}>
                    <img className="w-30 md:w-50 cursor-pointer transform hover:rotate-180 duration-300 ease-in-out" src={logo} alt="" />
                </picture>
                <div className="hidden w-[90%] xl:w-[60%] h-100 md:flex justify-end  backdrop-blur-xl ">
                    <div className="flex items-center justify-between gap-40 px-50 font-barlow font-light text-md">
                        <NavItems />
                    </div>
                </div>
                <div className="block relative md:hidden">
                    <picture onClick={() => setOpenSideBar(true)}>
                        <img className="cursor-pointer mr-20" src={menuicon} alt="Menu Icon" />
                    </picture>
                    {
                        openSideBar && <div className="absolute right-0 top-0 h-screen min-w-250 backdrop-blur-xl">
                            <div className="py-0">
                                <picture className="flex justify-end" onClick={() => setOpenSideBar(false)}>
                                    <img className="cursor-pointer mr-20" src={closeicon} alt="Close Icon" />
                                </picture>
                                <div className="flex flex-col gap-40 p-20 mt-50">
                                    <NavItems />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header