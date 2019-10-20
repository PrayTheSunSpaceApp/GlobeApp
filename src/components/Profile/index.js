import React from "react";
import styles from "./Profile.module.scss";
import { ListLayout, ListHeader, List, Pagination } from "../Events/ListEvent";
import Statistic from './Statistic';


const mockUser = {
  name: "Elon Musk",
  age: 48,
  email: "elonmusk@mail.ru",
  avatar: "blob:https://web.telegram.org/af5ce872-e212-4210-a46a-c6c3deeaab24"
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
    range: "Holy Emeror",
    eventsCount: 20000,
    donate: 1000000000,
    friends: 1000000,
}

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
              <ListHeader title={"Your Events"}>
              </ListHeader>
              <List data={mockEventData} />
              <Pagination />
            </ListLayout>
          </div>
          <Statistic data={mockStatistic}/>
        </div>
        <div className={styles.rightSide}>Right</div>
      </div>
    );
  }
}

export default Profile;
