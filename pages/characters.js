import React from "react";
import Head from "../components/head";
import Menu from "../components/menu";
import Content from "../components/pages/characters/content";
import CharSelector from "../components/pages/characters/char-selector";
import MobContent from "../components/pages/characters/mob-content";
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
    <div>
      <Head title="Project Soluna - Characters" />
      <Menu />
      <MediaContextProvider>
        <Media at="sm">
          <MobContent />
          <MobCharSelector />
        </Media>
        <Media greaterThanOrEqual="md">
          <Content />
          <CharSelector />
        </Media>
      </MediaContextProvider>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Characters;
