import { useNavigate } from 'react-router-dom';

const NavItems = () => {
    const nav = useNavigate();
    return (
        <>
            <a className="hover:underline underline-offset-8 transition-all ease-in-out delay-75 cursor-pointer" onClick={() => nav('/')}><span className="font-medium">00</span>  Home</a>
            <a className="hover:underline underline-offset-8 transition-all ease-in-out delay-75 cursor-pointer" onClick={() => nav("/destination")}><span className="font-medium">01</span>  Destination</a>
            <a className="hover:underline underline-offset-8 transition-all ease-in-out delay-75 cursor-pointer" onClick={() => nav("/crew")}><span className="font-medium">02</span>  Crew</a>
            <a className="hover:underline underline-offset-8 transition-all ease-in-out delay-75 cursor-pointer" onClick={() => nav("/technology")}><span className="font-medium">03</span>  Technology</a>
        </>
    )
}

export default NavItems