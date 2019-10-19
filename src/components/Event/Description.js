import React from 'react';
import styles from './Event.module.scss';

const Description = ({}) => {
    return (
        <div className={styles.descriptionContainer}>
            <h2>Description:</h2>
            <p>Here you can store every important information. Links, addition info, sponsors links and other</p>
        </div>
    );
}

export default Description;