import { useLocation, useNavigate } from 'react-router-dom';

const NavItems = () => {
    const nav = useNavigate();
    const currLocation = useLocation();
    const currPage = currLocation.pathname
    return (
        <>
            <a className={`hover:underline underline-offset-8 transition-all ease-in-out delay-75 cursor-pointer
                            ${currPage==="/" ? "underline" : ""} `}
                onClick={() => nav('/')}>
                <span className="font-medium">00</span>  Home
            </a>
            <a className={`hover:underline underline-offset-8 transition-all ease-in-out delay-75 cursor-pointer
                            ${currPage==="/destination" ? "underline" : ""} `}
                onClick={() => nav("/destination")}>
                <span className="font-medium">01</span>  Destination
            </a>
            <a className={`hover:underline underline-offset-8 transition-all ease-in-out delay-75 cursor-pointer
                            ${currPage==="/crew" ? "underline" : ""} `}
                onClick={() => nav("/crew")}>
                <span className="font-medium">02</span>  Crew
            </a>
            <a className={`hover:underline underline-offset-8 transition-all ease-in-out delay-75 cursor-pointer
                            ${currPage==="/technology" ? "underline" : ""} `}
                onClick={() => nav("/technology")}>
                <span className="font-medium">03</span>  Technology
            </a>
        </>
    )
}

export default NavItems