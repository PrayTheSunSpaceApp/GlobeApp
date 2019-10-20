import React from "react";
import styles from "./NotFound.module.scss";
import image from "./image.svg";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div class={styles.notFound}>
        <img src={image} alt="Not found" />
        <h1>
          <span className={styles.green}>We</span> dont know{" "}
          <span className={styles.blue}>da wae.</span>
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
