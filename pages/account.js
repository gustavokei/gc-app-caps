import React from "react";
import Head from "../components/head";
import AccountMenu from "../components/menu-account";
import AccountContent from "../components/pages/account/content.js";
import Footer from "../components/footer";
import styles from "./styles.module.scss";

const Account = () => {
  return (
    <div>
      <Head title="Project Soluna" />
      <AccountMenu />
      <div className={styles.content}>
        <AccountContent />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Account;
