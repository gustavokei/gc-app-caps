import React from "react";
import { Button, Modal } from "react-bootstrap";

// const ModalDownload = () => {
//     return (

function ModalLogin(props) {
  return (
    <Modal {...props} size="md">
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Don't even try to press escape
        key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLogin;
//   render(<ModalLogin />);