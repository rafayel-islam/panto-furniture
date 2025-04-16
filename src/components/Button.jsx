import React from 'react'
import btnIcon from "../assets/button-icon.png"

const Button = ({text}) => {
    return (
        <button className='flex items-center gap-1 text-sm text-primary'> {text}
            <img src={btnIcon} alt="btn icon" />
        </button>
    )
}

export default Button