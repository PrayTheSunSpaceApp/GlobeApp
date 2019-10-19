import React from "react";
import styles from "./Event.module.scss";
import { Chat } from "./Chat";
import GlobalContainer from '../shared/GlobeContainer';
import Description from './Description';

const mockMessages = [
  {
    name: "Natalia",
    message: "Hell yeah"
  },
  {
    name: "Petia Poroh",
    message: "Its our victory"
  },
  {
    name: "Spange Bob",
    message: "HEHEEHE"
  },
  {
    name: "Spange Bob",
    message: "HEHEEHE"
  },
  {
    name: "Spange Bob",
    message: "HEHEEHE"
  }
];

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className={styles.eventContainer}>
        <div className={styles.v}>
            <Chat messages={mockMessages}/>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.globeContainer}>
            <GlobalContainer/>
          </div>
          <Description />
        </div>
      </div>
    );
  }
}
export default Event;
