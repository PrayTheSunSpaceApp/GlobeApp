import React from "react";
import logo from "../../../shared/assets/testlogo.png";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={style.container}>
      <div className={style.brandContainer}>
        <Link to="/" className={style.headerLink}>
          <div className={style.logoContainer}>
            <img src={logo} className={style.headerImg} alt="brand" />
          </div>
        </Link>
        <div class={style.mainHeader}>
          <div className={style.titleContainer}>
            <Link to="/" className={style.headerLink}>
              <span className={style.headerTextSpan}>
                <span className={style.headerGreen}>Connect</span> 
                {" "}to{" "}
                <span className={style.headerBlue}>life</span>
              </span>
              <p className={style.headerText}>Find, Discuse, Share</p>
            </Link>
          </div>
          <div className={style.headerNavGroup}>
            <Link to="/events" className={style.headerNav}>
              Events
            </Link>
            <Link to="/events" className={style.headerNav}>
              Near
            </Link>
            <Link to="/signin" className={style.headerLogin}>
              Profile
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
