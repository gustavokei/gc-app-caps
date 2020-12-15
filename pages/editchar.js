import React from "react";
import Head from "../components/head";
import AccountMenu from "../components/menu-account";
import CharSelector from "../components/pages/characters/char-selector";
import MobCharSelector from "../components/pages/characters/mob-char-selector";
import EditCharactersContent from "../components/pages/editchar/content.js";
import Footer from "../components/footer";
import styles from "./styles.module.scss";
import { createMedia } from "@artsy/fresnel";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 992,
  },
});

const EditCharacter = () => {
  return (
    <div className={styles.editCharCustom}>
      <Head title="Project Soluna" />
      <AccountMenu />
      <div>
        <h1 className={styles.editCharPageTitle}>Edit Characters</h1>
      </div>
      <MediaContextProvider>
        <Media at="sm">
          <MobCharSelector />
        </Media>
        <Media greaterThanOrEqual="md">
          <CharSelector />
        </Media>
      </MediaContextProvider>
      <div className={styles.content}>
        <EditCharactersContent />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default EditCharacter;
