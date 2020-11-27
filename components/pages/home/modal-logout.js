import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./modal.module.scss";
import props from 'prop-types';

const ModalLogout = (props) => {

  const close = () => {localStorage.clear();window.open("/");
  window.close();}

  return (
    <Modal {...props} setShow={true} size="md">
      <div className={styles.custModal}>
        <Modal.Header className={styles.custModalClose} closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Are You Sure You Want To Logout ?</h6>
          <h6 className={styles.custModalLink}>
          
          <Button type="submit" onClick={close}>Submit</Button>
          {/* <Button type="submit" >Submit</Button> */}
          </h6>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalLogout;