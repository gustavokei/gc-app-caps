import React from "react";
import Head from "../components/head";
import AccountMenu from "../components/menu-account";
import Content from "../components/pages/additem/content.js";
import Footer from "../components/footer";
import styles from "./styles.module.scss";

const AddItem = () => {
  return (
    <div className={styles.editCharCustom}>
      <Head title="Project Soluna" />
      <AccountMenu />
      <div>
        <h1 className={styles.ItemsPageTitle}>Add Items</h1>
      </div>
      <div className={styles.content}>
        <Content />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default AddItem;
