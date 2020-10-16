import React from "react";
import { Modal } from "react-bootstrap";

const ModalDownload = (props) => {
  return (
    <Modal {...props} size="md">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Download</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Files:</h4>
        <ul>
          <li>
            <a href="#" target="_blank">
              Launcher
            </a>
          </li>
        </ul>
        <hr />
        <h4>aaaa</h4>
      </Modal.Body>
    </Modal>
  );
};

export default ModalDownload;
