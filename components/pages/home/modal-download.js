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
          <h6>Download the ".exe" file from this link and follow the instructions:</h6>
          <h6 className={styles.custModalLink}>
            <a
              href="https://github.com/gustavokei/electron-game-updater/releases/latest"
              target="_blank"
            >
              Installer
            </a>
          </h6>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalDownload;
