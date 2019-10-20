import React from 'react';
import styles from './Footer.module.scss';
import facebook from '../../../shared/assets/facebook.svg'
import twitter from '../../../shared/assets/twitter.svg'
import github from '../../../shared/assets/github.svg'

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.rightsContainer}>
                @SPACEAPP2019
            </div>
            <div className={styles.socialContainer}>
                <a className={styles.shareIcon} href="https://facebook.com">
                    <img src={facebook} className={styles.facebookImg} alt="brand"/>
                </a>
                <a className={styles.shareIcon} href="https://twitter.com">
                    <img src={twitter} className={styles.facebookImg} alt="brand"/>
                </a>
                <a className={styles.shareIcon} href="https://github.com">
                    <img src={github} className={styles.facebookImg} alt="brand"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;