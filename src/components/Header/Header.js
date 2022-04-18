import React from 'react';
import './Header.css'

function Header() {
    return (
        <header className='header'>
            <div className='cont-main'>
                <div className='rh-logo' >
                    <img src="https://cdnprod4.resumehelp.com/img/rh-logo.svg?v=1871" alt="LOGO" width='161' height='44'/>
                </div>
                <div >
                    <ul className='navigation'>
                        <li className='chat'>LIVE CHAT</li>
                        <li className='account'>MY ACCOUNT</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;