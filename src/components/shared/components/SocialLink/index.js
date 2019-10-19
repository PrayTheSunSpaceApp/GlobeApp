import React from "react";
import styles from "./SocialLink.module.scss";

const SocialLink = ({ style, url, imageUrl, ...props }) => {
  return (
    <a className={styles.link} href={url}>
      <div className={`${styles.socialContainer} ${style}`}>
        <img src={url} {...props} />
      </div>
    </a>
  );
};

export default SocialLink;
