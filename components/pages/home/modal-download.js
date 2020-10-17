import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./modal.module.scss";

const ModalDownload = (props) => {
  return (
    <Modal {...props} size="md">
      <div className={styles.custModal}>
        <Modal.Header className={styles.custModalClose} closeButton>
          <Modal.Title>Download</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Please, download the installer and follow the instructions:</h6>
          <h6 className={styles.custModalLink}>
            <a href="#" target="_blank">
              Installer
            </a>
          </h6>
        </Modal.Body>
        {/* <Modal.Footer className={styles.custModalFooter}>
          <Button variant="primary">Close</Button>
        </Modal.Footer> */}
      </div>
    </Modal>
  );
};

export default ModalDownload;
