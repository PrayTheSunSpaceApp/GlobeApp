import React from "react";
import styles from "./Profile.module.scss";
import { ListLayout, ListHeader, List, Pagination } from "../Events/ListEvent";
import Statistic from "./Statistic";
import elon from "../shared/assets/elonava.jpg";

const mockUser = {
  name: "Elon Musk",
  age: 48,
  email: "elonmusk@mail.ru",
  avatar: elon
};

const mockEventData = [
  {
    title: "Save pandas",
    count: 100000
  },
  {
    title: "Raid White House",
    count: 200000
  },
  {
    title: "Green Party",
    count: 400000
  }
];

const mockStatistic = {
  range: "Holy Emperor",
  eventsCount: 20000,
  donate: 1000000000,
  friends: 1000000
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.profileContainer}>
        <div className={styles.leftSide}>
          <div className={styles.eventContainer}>
            <ListLayout>
              <ListHeader title={"Your Events"}></ListHeader>
              <List data={mockEventData} />
              <Pagination />
            </ListLayout>
          </div>
          <Statistic data={mockStatistic} />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.mainInfo}>
            <div className={styles.avatarContainer}>
              <img src={mockUser.avatar} className={styles.avatar} alt="brand" />
            </div>
            <div class={styles.description}>
              <p>
                <span>Name: </span> {mockUser.name}
              </p>
              <p>
                <span>Age: </span> {mockUser.age}
              </p>
              <p>
                <span>Email: </span> {mockUser.email}
              </p>
              <p>
                <span>Class: </span> Anime-girl tamer
              </p>
            </div>
          </div>
          <div className={styles.additionInfo}>
            <h1>Your legend: </h1>
            <p>Care about Earth is my duty</p>
            <p>Helpful links</p>
            <p>Social links</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
