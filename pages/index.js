import React from "react";
import Head from "../components/head";
import Menu from "../components/menu";
import Slider from "../components/pages/home/slider";
import Content from "../components/pages/home/content";
import Footer from "../components/footer";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <title>Project Soluna</title>
      <div>
        <Head title="Project Soluna - Home" />
        <Menu />
        {/* <Slider /> */}
        <h1>THIS IS A CHANGE</h1>
        <div className={styles.content}>
          <Content />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </html>
  );
};

export default Home;
