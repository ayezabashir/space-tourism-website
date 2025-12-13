import { NavLink } from 'react-router-dom'

const NavItems = () => {
    const baseClass = "cursor-pointer transition-all ease-in-out underline-offset-8 hover:underline";
    return (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `${baseClass} ${isActive ? "underline" : ""}`
                }
            >
                <span className='font-medium'>00</span> Home
            </NavLink>
            <NavLink
                to="/destination"
                className={({isActive})=>
                    `${baseClass} ${isActive ? "underline" : ""}`
                }  
            >
                <span className='font-medium'>01</span> Destination
            </NavLink>
            <NavLink
                to="/crew"
                className={({isActive})=>
                    `${baseClass} ${isActive ? "underline":""}`
                }
            >
                <span className='font-medium'>02</span> Crew
            </NavLink>
            <NavLink
                to="/technology"
                className={({isActive})=>
                    `${baseClass} ${isActive ? "underline":""}`
                }
            >
                <span className='font-medium'>03</span> Technology
            </NavLink>
        </>
    )
}

export default NavItems