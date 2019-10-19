import React from "react";
import styles from "./Event.module.scss";

import facebook from "../shared/assets/facebook.svg";
import twitter from "../shared/assets/twitter.svg";
import github from "../shared/assets/github.svg";

const Share = () => {
  return (
    <div className={styles.shareContainer}>
      <h1 className={styles.shareTitle}>Share Event:</h1>
      <div className={styles.socialContainer}>
        <a className={styles.shareIcon} href="https://facebook.com">
          <img src={facebook}  alt="brand" />
        </a>
        <a className={styles.shareIcon} href="https://twitter.com">
          <img src={twitter}  alt="brand" />
        </a>
        <a className={styles.shareIcon} href="https://github.com">
          <img src={github}  alt="brand" />
        </a>
      </div>
    </div>
  );
};

export default Share;
