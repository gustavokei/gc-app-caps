import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

const FormEditAccount = () => {
  // Set default values
  const initialValue = {
    email: "",
    passwd: "",
    gamePoint: 0,
    Cash: 0,
    VCPoint: 0
  };

  const [accountArray, setAccountArray] = useState(initialValue);

  // Get User Account data from API
  let getAccount = login => {
    return fetch(process.env.NEXT_PUBLIC_API + "account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Login: login
      })
    })
      .then(response => response.json())
      .then(data => {
        setAccountArray(data[0]);
      });
  };

  // Update User Account data from API
  let updateAccount = (login, emailadd, pass, gamepoint, cash, virtualcash) => {
    return fetch(process.env.NEXT_PUBLIC_API + "upaccount", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Login: login,
        email: emailadd,
        passwd: pass,
        gamePoint: gamepoint,
        Cash: cash,
        VCPoint: virtualcash
      })
    })
      .then(response => response.json())
      .then(data => {
        return data;
      });
  };

  // Formik
  const formik = useFormik({
    onSubmit: values => {
      // console.log(values);

      updateAccount(
        localStorage.getItem("userName"),
        values.email,
        values.passwd,
        values.gamePoint,
        values.Cash,
        values.VCPoint
      );
    },
    validationSchema: yup.object({
      Login: yup.string().required(),
      email: yup
        .string()
        .email()
        .required(),
      passwd: yup
        .string()
        .min(3)
        .required(),
      gamePoint: yup
        .number()
        .min(0)
        .required(),
      Cash: yup
        .number()
        .min(0)
        .required(),
      VCPoint: yup
        .number()
        .min(0)
        .required()
    }),
    initialValues: {
      gamePoint: 0,
      Cash: 0,
      VCPoint: 0
    }
  });

  // Update Form
  useEffect(() => {
    formik.resetForm();
    document.getElementById("editAccountForm").reset();
    getAccount(localStorage.getItem("userName"));
  }, []);

  useEffect(() => {
    Object.keys(accountArray).map(key => {
      formik.setFieldValue(key, accountArray[key]);
    });
  }, [accountArray]);

  return (
    <Form id="editAccountForm" noValidate onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="text"
          defaultValue={formik.values.Login}
          name="Login"
          onChange={formik.handleChange}
          disabled
        />
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Login cannot be changed
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          defaultValue={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          isValid={formik.touched.email && !formik.errors.email}
          isInvalid={formik.touched.email && formik.errors.email}
        />
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Email must be an email format
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          // defaultValue={formik.values.passwd}
          name="passwd"
          placeholder="Enter new password"
          onChange={formik.handleChange}
          isValid={formik.touched.passwd && !formik.errors.passwd}
          isInvalid={formik.touched.passwd && formik.errors.passwd}
        />
        <Form.Text className="text-muted">
          Leave it blank to use old password.
        </Form.Text>
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Password must be more than 3 characters
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>GamePoints</Form.Label>
        <Form.Control
          type="number"
          defaultValue={formik.values.gamePoint}
          name="gamePoint"
          onChange={formik.handleChange}
          isValid={formik.touched.gamePoint && !formik.errors.gamePoint}
          isInvalid={formik.touched.gamePoint && formik.errors.gamePoint}
        />
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          GamePoint must be a positive number
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Cash</Form.Label>
        <Form.Control
          type="number"
          defaultValue={formik.values.Cash}
          name="Cash"
          onChange={formik.handleChange}
          isValid={formik.touched.Cash && !formik.errors.Cash}
          isInvalid={formik.touched.Cash && formik.errors.Cash}
        />
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Cash must be a positive number
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Virtual Cash</Form.Label>
        <Form.Control
          type="number"
          defaultValue={formik.values.VCPoint}
          name="VCPoint"
          onChange={formik.handleChange}
          isValid={formik.touched.VCPoint && !formik.errors.VCPoint}
          isInvalid={formik.touched.VCPoint && formik.errors.VCPoint}
        />
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Virtual Cash must be a positive number
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Save</Button>
      {formik.isSubmitting ? (
        <p className="mt-4">Account Settings saved!</p>
      ) : (
        <p></p>
      )}
    </Form>
  );
};

export default FormEditAccount;
