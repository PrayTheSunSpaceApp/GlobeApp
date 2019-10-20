import React from "react";
import styles from "./Profile.module.scss";
import elon from "../shared/assets/elonava.jpg";

const mockUser = {
  name: "Elon Musk",
  age: 48,
  email: "elonmusk@mail.ru",
  avatar: "blob:https://web.telegram.org/af5ce872-e212-4210-a46a-c6c3deeaab24"
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.leftSide}>Left</div>
        <div className={styles.rightSide}>
            <div>
              <img src={elon} className={styles.avatar} alt="brand" />
            </div>
            <div>
              <p>{mockUser.name}</p>
              <p>Class: Anime-girl tamer</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Profile;
