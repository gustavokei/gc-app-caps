import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import styles from "./modal.module.scss";

function ModalRegister(props) {
  let register = async (log, emal, pass) => {
    return fetch(process.env.NEXT_PUBLIC_API + "register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Login: log,
        passwd: pass,
        email: emal,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };

  // useEffect(() => {
  //   checkAuth("mylogin", "mypass");
  // });

  return (
    <Modal {...props} size="md">
      <div className={styles.custModal}>
        <Modal.Header className={styles.custModalClose} closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form name="regForm" method="POST">
            <Form.Group>
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                id="login"
                placeholder="Username"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="your@email.com"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Modal.Footer className={styles.custModalFooter}>
              <Button
                type="submit"
                onClick={() =>
                  register(
                    document.getElementById("login").value,
                    document.getElementById("email").value,
                    document.getElementById("password").value
                  )
                }
                variant="primary"
              >
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default ModalRegister;
