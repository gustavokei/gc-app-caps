import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import styles from "./modal.module.scss";
 


function ModalLogin(props) {

  const [validated, setValidated] = React.useState(false);
 


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    let log = form.elements.login.value;
    let pass = form.elements.password.value;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();  
     
    }
    else{
      event.preventDefault();
      setValidated(true);
      console.log(log);
  fetch("http://localhost:4000/api" + "/auth", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    Login: log,
    passwd: pass,
  }),
})
  .then((response) => response.json())
  .then((result) => {
    if(result.token)
    {
   console.log(result);
   localStorage.setItem('token', result.token);
   window.open("/characters");
    }
    else{
  console.log(result);
   alert("Invalid username or password");
    }

    
   
  });
 

    }
//   .then(() => {
//     fetch("http://localhost:4000/api" + "/verify", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         token: Cookies.get(token),
//       }),
//     });
//   })
//   .then((res) => {
//     if (res.message == "Successful Login...") {
//       dispatch({ type: "auth"});
//     } else {
//       alert(error);
//     }
//   });
// }

  // useEffect(() => {
  //   if (!auth) {
  //     window.open("/characters");
  //   }
  // }, [state.auth]);
  // }
  


  return (
    <Modal {...props} size="md">
      <div className={styles.custModal}>
        <Modal.Header className={styles.custModalClose} closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} method="POST" onSubmit={handleSubmit}>
          <Form.Group controlId="loginUser">
            <Form.Label>Login</Form.Label>
            <Form.Control type="text" name="login" placeholder="Username" required/>
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required/>
            <Form.Control.Feedback type="invalid">
              Please provide password.
            </Form.Control.Feedback>
          </Form.Group>
          <Modal.Footer className={styles.custModalFooter}>
          <Button type="submit" variant="primary">Submit</Button>
        </Modal.Footer>
        </Form>
        </Modal.Body>

      </div>
    </Modal>
  );
}
}

export default ModalLogin;

