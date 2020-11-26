import React from "react";
import styles from "./modal.module.scss";

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className={styles.formInvalid} >&nbsp;</div>;
  }
  if (message) {
    return <div className={styles.formInvalid} >{message}</div>;
  }
  return <div className={styles.formValid} >All Good!</div>;
};

export default Error;