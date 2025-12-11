import React from 'react'

const Button = ({onClick, children}) => {
    return (
        <button className="bg-white hover:ring-70 ring-white/30 rounded-full w-144 h-144 md:w-272 md:h-272 text-lg md:text-2xl hover:text-lightblue cursor-pointer transition-all ease-in-out delay-75 font-bellefair text-darkblue"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button