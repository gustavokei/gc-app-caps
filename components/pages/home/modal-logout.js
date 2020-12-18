import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./modal.module.scss";
import Router from "next/router";

const ModalLogout = props => {
  const close = () => {
    setTimeout(() => Router.push("/"), 1000);
    setTimeout(() => localStorage.clear(), 1000);
    props.onHide();
  };

  return (
    <Modal {...props} size="md">
      <div className={styles.custModal}>
        <Modal.Header className={styles.custModalClose} closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Are you sure you want to logout?</h6>
          <h6 className={styles.custModalLink}>
            <Button type="submit" onClick={close}>
              Yes
            </Button>
            {/* <Button type="submit" >Submit</Button> */}
          </h6>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalLogout;
