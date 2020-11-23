import React from "react";
import Head from "../components/head";
import AccountMenu from "../components/menu-account";
import Content from "../components/pages/server/content";
import Footer from "../components/footer";
import styles from "../styles.module.css";

const Server = () => {
  return (
    <div>
      <Head title="Project Soluna" />
      <AccountMenu />
      <div className={styles.content}>
        <Content />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Server;
