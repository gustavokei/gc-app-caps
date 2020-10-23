import React from "react";
import Head from "../components/head";
import Menu from "../components/menu";
import Footer from "../components/footer";
import styles from "../styles.module.css";
import AboutHeader from "../components/pages/about/header.js"
import VideoContent from "../components/pages/about/content.js"

const Home = () => {
  return (
    <div>
      <Head title="Project Soluna" />
      <Menu />
      <AboutHeader />
      <div className={styles.content}>
        <VideoContent />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
