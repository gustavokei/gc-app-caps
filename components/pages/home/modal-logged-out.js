import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./modal.module.scss";
import props from "prop-types";
import Router from "next/router";

const ModalLoggedout = (props) => {
  const close = () => {
    localStorage.clear();
    Router.push("/");
  };

  return (
    <Modal {...props} setShow={true} size="md">
      <div className={styles.custModal}>
        <Modal.Header className={styles.custModalClose} closeButton>
          <Modal.Title>Oops ! Access Denied</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Seems you are not Active. Please Login to Continue.</h6>
          <h6 className={styles.custModalLink}>
            <Button type="submit" onClick={close}>
              Ok
            </Button>
            {/* <Button type="submit" >Submit</Button> */}
          </h6>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalLoggedout;
