import React from "react";
import Head from "../components/head";
import Menu from "../components/menu";
import Slider from "../components/pages/home/slider";
import Content from "../components/pages/home/content";
import Footer from "../components/footer";
import styles from "../styles.module.css";

const Home = () => {
  return (
    <div>
      <Head title="Project Soluna" />
      <Menu />
      <Slider />
      <div className={styles.content}>
        <Content />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
