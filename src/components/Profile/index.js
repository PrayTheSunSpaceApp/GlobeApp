import React from "react";
import styles from "./Profile.module.scss";

const mockUser = {
    name: "Elon Musk",
    age: 48,
    email: "elonmusk@mail.ru",
    avatar: "blob:https://web.telegram.org/af5ce872-e212-4210-a46a-c6c3deeaab24"
}


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.leftSide}>Left</div>
        <div className={styles.rightSide}>Right</div>
      </div>
    );
  }
}

export default Profile;