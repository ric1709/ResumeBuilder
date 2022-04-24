import React from 'react';
import useChangePage from '../../hooks/useChangePage';
import i18n from '../../i18n'
import {useTranslation} from 'react-i18next'
import './Header.css'
import {RiAccountCircleLine} from 'react-icons/ri'
import {IoLanguage} from 'react-icons/io5'


function Header() {
    const changePage=useChangePage()
	const {t}=useTranslation()
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
                        <li className='account'><RiAccountCircleLine /> <span>{t('account')}</span></li>
                        <div className='language'>
                        <IoLanguage/>
                        <select className='lang' onChange={onChangeLang}>
                            <option value="en" key="1">ENG</option>
                            <option value="ru" key="2">RU</option>
                        </select>
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;