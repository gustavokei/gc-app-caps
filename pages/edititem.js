import React from "react";
import Head from "../components/head";
import Menu from "../components/menu-account";
import Content from "../components/pages/edititem/content";
import Footer from "../components/footer";
import styles from "../styles.module.css";

const EditItems = () => {
  return (
    <div className={styles.rankexpCustom}>
      <Head title="Project Soluna - Edit Items" />
      <Menu />
      <div>
        <h1 className={styles.ItemsPageTitle}>Edit Items</h1>
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

export default EditItems;
