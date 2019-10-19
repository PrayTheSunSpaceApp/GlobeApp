import React from 'react';
import style from './header.module.scss';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className={style.container}>
            <div className={style.brandContainer}>
                <img src="url" alt="brand"/>
                <h1>AWESOME TITLE</h1>
                <h2>SUBTITLE</h2>
            </div>
            <nav className={style.headerNav}>
                <Link to="/events">Events</Link>
                <Link to="/events">Near</Link>
                <Link to="/events">Profile</Link>
            </nav>
        </header>
    )
}

export default Header;