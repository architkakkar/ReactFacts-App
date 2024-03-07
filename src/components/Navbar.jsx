import React from 'react'
import ReactLogo from '../assets/react.svg'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="nav-logo">
                <img src={ReactLogo} alt="React-logo" />
                <h3>ReactFacts</h3>
            </div>
            <h4 className='nav-text'>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar