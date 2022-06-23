import './Navbar.css'
import React from 'react';
import copa from '../../assets/logo-qat.png'

function Navbar() {
    return (
        <nav className='navContainer'>
            <img className='copa' src={copa} alt='logo'></img>
            <h3 className='title' >World Cup Qatar 2022 Prediction</h3>
            <div></div>
        </nav>
    );
}

export default Navbar;