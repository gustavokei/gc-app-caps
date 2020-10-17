import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import styles from "./modal.module.scss";

function ModalLogin(props) {
  return (
    <Modal {...props} size="md">
      <div className={styles.custModal}>
        <Modal.Header className={styles.custModalClose} closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="loginUser">
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer className={styles.custModalFooter}>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default ModalLogin;

