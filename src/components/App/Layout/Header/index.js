import React from "react";
import logo from "../../../shared/assets/testlogo.png";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={style.container}>
      <div className={style.brandContainer}>
        <div className={style.logoContainer}>
          <img src={logo} className={style.headerImg} alt="brand" />
        </div>
        <div class={style.mainHeader}>
          <div className={style.titleContainer}>
            <span className={style.headerTextSpan}>
              <span className={style.headerGreen}>Connect</span> 
              {" "}to{" "}
              <span className={style.headerBlue}>life</span>
            </span>
            <p className={style.headerText}>Find, Discuse, Share</p>
          </div>
          <div className={style.headerNavGroup}>
            <Link to="/events" className={style.headerNav}>
              Events
            </Link>
            <Link to="/events" className={style.headerNav}>
              Near
            </Link>
            <Link to="/events" className={style.headerLogin}>
              Profile
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
