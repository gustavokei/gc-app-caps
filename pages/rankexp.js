import React from "react";
import Head from "../components/head";
import Menu from "../components/menu";
import Content from "../components/pages/rankexp/content";
import CharSelector from "../components/pages/characters/char-selector";
import MobCharSelector from "../components/pages/characters/mob-char-selector";
import Footer from "../components/footer";
import styles from "../styles.module.css";
import { createMedia } from "@artsy/fresnel";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 992,
  },
});

const Characters = () => {
  return (
    <div className={styles.rankexpCustom}>
      <Head title="Project Soluna - Characters" />
      <Menu />
      <MediaContextProvider>
        <Media at="sm">
          <MobCharSelector />
          <Content />
        </Media>
        <Media greaterThanOrEqual="md">
          <CharSelector />
          <Content />
        </Media>
      </MediaContextProvider>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Characters;
