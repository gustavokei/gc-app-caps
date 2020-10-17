import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import styles from "./modal.module.scss";

function ModalRegister(props) {
  return (
    <Modal {...props} size="md">
      <div className={styles.custModal}>
        <Modal.Header className={styles.custModalClose} closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="registerUser">
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group controlId="registerEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="your@email.com" />
            </Form.Group>
          <Form.Group controlId="registerPassword">
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

export default ModalRegister;
