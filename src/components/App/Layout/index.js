import React from "react";
import styles from "./Layout.module.scss";

import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
    console.log(children);
  return (
    <div className={styles.pageLayout}>
      <Header />
      <main className={styles.mainLayout}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;