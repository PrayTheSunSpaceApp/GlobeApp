import React from "react";

import styles from "./Events.module.scss";

import {
  ListLayout,
  ListHeader,
  SearchEvents,
  List,
  Pagination
} from "./ListEvent";
import GlobeContainer from "../shared/GlobeContainer";

const mockEventData = [
  {
    title: "Title1",
    count: 100,
    location: {
      lt: 20,
      lg: 20
    },
    isInvited: true
  },
  {
    title: "Title2",
    count: 200,
    location: {
      lt: 30,
      lg: 30
    },
    isInvited: false
  },
  {
    title: "Title3",
    count: 300,
    location: {
      lt: 40,
      lg: 40
    },
    isInvited: false
  }
];

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles.eventsContainer}>
        <div className={styles.listContainer}>
          <ListLayout>
            <ListHeader title={"Raids"}>
              <SearchEvents />
            </ListHeader>
            <List data={mockEventData} />
            <Pagination />
          </ListLayout>
        </div>
        <div className={styles.globeContainer}>
          <h1 className={styles.globeTitle}>World:</h1>
          <GlobeContainer
            marksList={mockEventData.map(event => ({
              label: event.title,
              lt: event.location.lt,
              lg: event.location.lg,
              alt: 100
            }))}
          />
        </div>
      </div>
    );
  }
}

export default Events;
