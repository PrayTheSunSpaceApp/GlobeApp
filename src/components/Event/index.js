import React from "react";
import styles from "./Event.module.scss";
import { Chat } from "./Chat";
import GlobalContainer from "../shared/GlobeContainer";
import Description from "./Description";
import Share from './Share';

const mockMessages = [
  {
    name: "Natalia",
    message: "Hell yeah"
  },
  {
    name: "Petya Poroh",
    message: "Its our victory"
  },
  {
    name: "Spange Bob",
    message: "HEHEEHE"
  },
  {
    name: "Spange Bob",
    message: "Where is my pants?"
  },
  {
    name: "Spange Bob",
    message: "HEHEEHE"
  }
];

const mockMembers = [
  { label: "", lt: 21, lg: 21, alt: 100 },
  { label: "", lt: 25, lg: 20, alt: 100 },
  { label: "", lt: 34, lg: 35, alt: 100 },
  { label: "", lt: 32, lg: 27, alt: 100 },
  { label: "", lt: 21, lg: 21, alt: 100 },
  { label: "", lt: 29, lg: 21, alt: 100 },
  { label: "", lt: 37, lg: 31, alt: 100 },
  { label: "", lt: 33, lg: 20, alt: 100 },
  { label: "", lt: 19, lg: 28, alt: 100 },
  { label: "", lt: 28, lg: 41, alt: 100 },
  { label: "", lt: 34, lg: 30, alt: 100 },
  { label: "", lt: 32, lg: 22, alt: 100 }
];

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles.eventContainer}>
        <div className={styles.v}>
          <Chat messages={mockMessages} />
          <Share />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.globeContainer}>
            <h1 className={styles.globeTitle}>Event: Title</h1>
            <GlobalContainer marksList={mockMembers} />
          </div>
          <Description />
        </div>
      </div>
    );
  }
}
export default Event;
