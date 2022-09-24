import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import styles from "./modal.module.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./Error";
import Router from "next/router";

const ValidationSchema = Yup.object().shape({
  log: Yup.string()
    .min(1, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),
  pass: Yup.string()
    .min(3, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),
});

function ModalLogin(props) {
  const [err, setErr] = React.useState("");
  const [auth, isAuth] = React.useState(false);
  return (
    <Formik
      initialValues={{
        log: "",
        pass: "",
        token: "",
        auth: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        setTimeout(() => {
          fetch("https://dportal.onrender.com/api/" + "auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              Login: values.log,
              passwd: values.pass,
            }),
          })
            .then((response) => response.json())
            .then((result) => {
              if (result.token) {
                console.log(result);
                localStorage.setItem("token", result.token);
                localStorage.setItem("userName", values.log);
                localStorage.setItem("userEmail", "");
                console.log(values.log);
                //  alert(JSON.stringify(localStorage.getItem('token'), null, 2));
                setErr("Correct Credentials");
                isAuth(auth + 1);
                Router.push("/");
                props.onHide();
                resetForm();
                setErr("");
              } else {
                console.log(result);
                setErr("Invalid username or password");
                setSubmitting(false);
                console.log(auth);
                resetForm();
                return isAuth(false);
              }
            });
        }, 500);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Modal {...props} size="md">
          <div className={styles.custModal}>
            <Modal.Header className={styles.custModalClose} closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form id="loginForm" method="POST" onSubmit={handleSubmit}>
                <Form.Group controlId="loginUser">
                  <Form.Label>Login</Form.Label>
                  <Form.Control
                    type="text"
                    name="log"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.log}
                    className={
                      touched.log && errors.log ? styles.haserror : null
                    }
                  />
                  <Error touched={touched.log} message={errors.log} />
                </Form.Group>

                <Form.Group controlId="loginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="pass"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pass}
                    className={
                      touched.pass && errors.pass ? styles.haserror : null
                    }
                  />
                  <Error touched={touched.pass} message={errors.pass} />
                </Form.Group>

                <Modal.Footer className={styles.custModalFooter}>
                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>

                  {!auth ? (
                    <p className={styles.formInvalid}>{err}</p>
                  ) : (
                    <p className={styles.formValid}>{err}</p>
                  )}
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </div>
        </Modal>
      )}
    </Formik>
  );
}

export default ModalLogin;
