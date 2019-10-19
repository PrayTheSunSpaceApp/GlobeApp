import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.rightsContainer}>
                @SPACEAPP2019
            </div>
            <div className={styles.socialContainer}>
                Social
            </div>
        </footer>
    );
}

export default Footer;