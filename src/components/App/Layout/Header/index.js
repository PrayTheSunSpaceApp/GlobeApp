import React from 'react';
import logo from '../../../shared/assets/testlogo.png'
import style from './header.module.scss';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className={style.container}>
            <div className={style.brandContainer}>
                <img src={logo} className={style.headerImg} alt="brand"/>
                <div>
                    <span className={style.headerTextSpan}>connect to life</span>
                    <p className={style.headerText}>SUBTITLE</p>
                    <div className={style.headerNavGroup}>
                        <Link to="/events" className={style.headerNav}>events</Link>
                        <Link to="/events" className={style.headerNav}>near</Link>
                        <Link to="/events" className={style.headerLogin}>Profile</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;