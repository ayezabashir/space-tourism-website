import { NavLink } from 'react-router-dom'

const NavItems = () => {
    const baseClass = "cursor-pointer font-barlow-condensed text-lightblue text-sm transition-all ease-in-out underline-offset-10 md:underline-offset-30 uppercase hover:underline";
    return (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `${baseClass} ${isActive ? "underline" : ""}`
                }
            >
                <span className='font-medium text-white'>00</span> Home
            </NavLink>
            <NavLink
                to="/destination"
                className={({isActive})=>
                    `${baseClass} ${isActive ? "underline" : ""}`
                }  
            >
                <span className='font-medium text-white'>01</span> Destination
            </NavLink>
            <NavLink
                to="/crew"
                className={({isActive})=>
                    `${baseClass} ${isActive ? "underline":""}`
                }
            >
                <span className='font-medium text-white'>02</span> Crew
            </NavLink>
            <NavLink
                to="/technology"
                className={({isActive})=>
                    `${baseClass} ${isActive ? "underline":""}`
                }
            >
                <span className='font-medium text-white'>03</span> Technology
            </NavLink>
        </>
    )
}

export default NavItems