import React from "react";
import { Button, Modal, Dialog} from "react-bootstrap";


const ModalDownload = () => {
  return (
    <Modal.Dialog>
    <Modal.Header>
        <Modal.Title>Download</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <p>Please, download the installer and follow the instructions.</p>
        <a href="#">Installer</a>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="primary">Close</Button>
    </Modal.Footer>
    </Modal.Dialog>
  );
}

export default ModalDownload;