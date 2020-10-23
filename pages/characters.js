import React from "react";
import Head from "../components/head";
import Menu from "../components/menu";
import Slider from "../components/pages/home/slider";
import Content from "../components/pages/home/content";
import Footer from "../components/footer";
import styles from "../styles.module.css";
import ExampleStateChange from "../components/pages/home/state.change";

const Home = () => {
  return (
    <div>
      <Head title="Project Soluna" />
      <Menu />
     
    <ExampleStateChange></ExampleStateChange>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
