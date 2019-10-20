import React from 'react';

import styles from './Profile.module.scss';

const Statistic = ({ data }) => {
    return (
        <div className={styles.statisticContainer}>
            <h1>Hall of Glory:</h1>
            <h2><span>Your range:</span>{data.range}</h2>
            <h2><span>You battles:</span>{data.eventsCount}</h2>
            <h2><span>Money Donated:</span>{data.donate}</h2>
            <h2><span>Popularity:</span>{data.friends}</h2>
        </div>
    );
}

export default Statistic;