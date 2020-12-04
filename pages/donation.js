import React from "react";
import Head from "../components/head";
import Menu from "../components/menu";
import Footer from "../components/footer";
import styles from "./styles.module.scss";
import DonationContent from "../components/pages/donation/content.js";

const Donation = () => {
  return (
    <div>
      <Head title="Project Soluna" />
      <Menu />
      <div className={styles.content}>
        <DonationContent />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Donation;
