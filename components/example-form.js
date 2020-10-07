import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { checkAuth } from "./controllers/controller";
import { GlobalContext } from "./models/global-provider";

const ExampleForm = () => {
  let { state, dispatch } = useContext(GlobalContext);

  const handleSubmit = (event) => {
    let login = document.getElementById("validationCustom01").value;
    console.log(login);

    checkAuth(login).then((result) => {
      if (result == "success") {
        dispatch({ type: "auth" });
      } else if (result == "oops") {
        dispatch({ type: "reset" });
      }
    });

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="validationCustom01">
          <Form.Label>Login</Form.Label>
          <Form.Control required type="text" />
        </Form.Group>
        <Button type="submit">Test Login</Button>
      </Form>
      <p>API: {JSON.stringify(state.isAuth)}</p>
      {state.isAuth ? (
        <span>authenticated!</span>
      ) : (
        <span>not authenticated...</span>
      )}
    </div>
  );
};

export default ExampleForm;
