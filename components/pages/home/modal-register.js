import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import styles from "./modal.module.scss";
import Router from "next/router";

function ModalRegister(props) {
  // const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;

    register(form.login.value, form.email.value, form.password.value);
  };

  let register = async (log, emal, pass) => {
    fetch("https://dportal.onrender.com/api/" + "register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Login: log,
        passwd: pass,
        email: emal,
      }),
    })
      .then((response) => response.status)
      .then((result) => {
        if (result === 400) {
          alert("User Already Registered !");
        } else {
          alert("User Registered Successfully!");
          Router.push("/");
          props.onHide();
        }
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
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                id="login"
                placeholder="Username"
                maxlength="10"
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
              <Button type="submit" variant="primary">
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
