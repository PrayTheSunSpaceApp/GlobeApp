import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import first from "./assets/1.jpg";

const Home = () => {
  return (
    <div class={styles.homeContainer}>
      <section class={styles.first}>
        <h1 className={styles.firstTitle}>
          You are not alone. We are the allied army of the Earth.
          <br />
          <br />
          Unite, create, communicate, have fun, discuss hot problems and help
          make this world a better place.
          <br />
          <br />
          Find an interesting event for you and let them all understand that
          your voice makes sense.{" "}
          <span class={styles.link}>
            <Link to="/signin"> Join up</Link>
          </span>
        </h1>
      </section>
      <section class={styles.second}>
        <h1 className={styles.secondTitle}>
          Already join? What are you wait for?
          <br />
          <br />
          Find a cool event or problem and help to share it.
          <br />
          <br />
          Together we can change the world.{" "}
          <span class={styles.link}>
            <Link to="/events"> Find the raid</Link>
          </span>
        </h1>
      </section>
    </div>
  );
};

export default Home;
