import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

const FormAddItem = () => {
  // Set default values
  const initialValue = {
    LoginUid: 0,
    ItemId: 0,
  };
  const [LoginUid, setLoginUid] = useState("");

  // Update Character data from API
  let additem = (loginuid, itemid) => {
    return fetch(
      "https://gc-dportal-caps.herokuapp.com/api/" +
        "additem/" +
        loginuid +
        "/" +
        itemid,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data == "Error! Invalid ItemId") {
          alert(data);
        } else alert("Item '" + Object.values(data[0]) + "' was added!");
      });
  };

  // Formik
  const formik = useFormik({
    onSubmit: (values) => {
      // console.log(values);
      // console.log(expArray[values.ItemId]);
      additem(localStorage.getItem("UniqueID"), values.ItemId);
    },
    validationSchema: yup.object({
      ItemId: yup.number().integer().min(0).required(),
    }),
    initialValues: {
      LoginUid: 1936,
      ItemId: 106120,
    },
  });

  useEffect(() => {
    const UID = localStorage.getItem("UniqueID");
    setLoginUid(UID);
  });

  return (
    <Form id="addItemForm" noValidate onSubmit={formik.handleSubmit}>
      <Form.Group controlId="char">
        <Form.Label>LoginUID</Form.Label>
        <Form.Control type="text" value={LoginUid} disabled />
      </Form.Group>
      <Form.Group>
        <Form.Label>ItemId</Form.Label>
        <Form.Control
          type="number"
          defaultValue={formik.values.ItemId}
          name="ItemId"
          onChange={formik.handleChange}
          isValid={formik.touched.ItemId && !formik.errors.ItemId}
          isInvalid={formik.touched.ItemId && formik.errors.ItemId}
        />
        {/* <Form.Control.Feedback type="valid">Valid ItemId</Form.Control.Feedback> */}
        <Form.Control.Feedback type="invalid">
          ItemId must be a positive number
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Add Item</Button>
      {/* {formik.isSubmitting ? <p className="mt-4">Item added!</p> : <p></p>} */}
    </Form>
  );
};

export default FormAddItem;
