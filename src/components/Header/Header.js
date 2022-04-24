import React from 'react';
import useChangePage from '../../hooks/useChangePage';
import i18n from '../../i18n'
import './Header.css'

function Header() {
    const changePage=useChangePage()
    const onChangeLang=(e)=>{
        i18n.changeLanguage(e.target.value)
    }
    return (
        <header className='header'>
            <div className='cont-main'>
                <div className='rh-logo' onClick={changePage('/')}>
                    <img src="https://cdnprod4.resumehelp.com/img/rh-logo.svg?v=1871" alt="LOGO" width='161' height='44'/>
                </div>
                <div >
                    <ul className='navigation'>
                        <li className='account'>MY ACCOUNT</li>
                        <select  onChange={onChangeLang}>
                            <option value="en" key="1">ENG</option>
                            <option value="ru" key="2">RU</option>
                        </select>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;