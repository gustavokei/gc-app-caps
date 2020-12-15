import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { GlobalContext } from "../../models/global-provider";
import charData from "../characters/char-selector-data";
import { useFormik } from "formik";
import * as yup from "yup";

const FormEditCharacter = () => {
  // Global context for char-selector component
  let { state } = useContext(GlobalContext);

  // Set default values
  const initialValue = {
    CharType: 0,
    Exp: 0,
    ExpS4: 0,
    Level: 0,
    Login: "",
    LoginUID: 0,
    Lose: 0,
    Promotion: 0,
    Win: 0,
  };
  const [charArray, setCharArray] = useState(initialValue);

  // Get Character data from API
  let getChar = (login, char) => {
    return fetch(process.env.NEXT_PUBLIC_API + "getchar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Login: login,
        CharType: char,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCharArray(data[0]);
      });
  };

  // Update Character data from API
  let updateChar = (login, char, lvl, exp, promo, win, lose) => {
    return fetch(process.env.NEXT_PUBLIC_API + "upchar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Login: login,
        CharType: char,
        Level: lvl,
        ExpS4: exp,
        Promotion: promo,
        Win: win,
        Lose: lose,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  // Formik
  const formik = useFormik({
    onSubmit: (values) => {
      // console.log(values);
      // console.log(expArray[values.Level]);
      updateChar(
        localStorage.getItem("userName"),
        state.char,
        values.Level,
        expArray[values.Level - 1],
        values.Promotion,
        values.Win,
        values.Lose
      );
    },
    validationSchema: yup.object({
      Level: yup.number().integer().min(0).max(90).required(),
      Promotion: yup.number().integer().min(0).max(3).required(),
      Win: yup.number().integer().min(0).required(),
      Lose: yup.number().integer().min(0).required(),
    }),
    initialValues: {
      Level: 0,
      Promotion: 0,
      Win: 0,
      Lose: 0,
    },
  });

  // Update Form
  useEffect(() => {
    formik.resetForm();
    document.getElementById("editCharForm").reset();
    getChar(localStorage.getItem("userName"), state.char);
  }, [state.char]);

  useEffect(() => {
    Object.keys(charArray).map((key) => {
      formik.setFieldValue(key, charArray[key]);
    });
  }, [charArray]);

  // expArray
  const expArray = [
    100,
    140,
    422,
    863,
    1314,
    1995,
    2625,
    3424,
    4202,
    5156,
    6090,
    7930,
    9491,
    11824,
    14630,
    16487,
    19613,
    21740,
    24444,
    28655,
    33733,
    38598,
    46099,
    53437,
    60997,
    69229,
    78301,
    88297,
    99301,
    112405,
    127987,
    146257,
    167761,
    192870,
    222102,
    254232,
    301440,
    353352,
    410472,
    473304,
    542352,
    618456,
    702120,
    794184,
    895320,
    1006704,
    1159794,
    1328214,
    1513434,
    1717134,
    1941204,
    2187744,
    2458854,
    2757054,
    3150678,
    3583866,
    4060398,
    4584558,
    5161134,
    5795166,
    6608958,
    7504188,
    8488794,
    9571890,
    10933698,
    12431586,
    14285298,
    16324230,
    18816090,
    21557430,
    24874590,
    28523004,
    32901252,
    37717476,
    43457028,
    49770426,
    57249198,
    65475906,
    75171606,
    89391966,
    108802350,
    129137038,
    150396030,
    174427934,
    203081358,
    233081358,
    263081358,
    293081358,
    333081358,
    379000000,
  ];

  return (
    <Form id="editCharForm" noValidate onSubmit={formik.handleSubmit}>
      <Form.Group controlId="char">
        <Form.Label>Character</Form.Label>
        <Form.Control type="text" value={charData[state.char].name} disabled />
      </Form.Group>
      <Form.Group>
        <Form.Label>Level</Form.Label>
        <Form.Control
          type="number"
          defaultValue={formik.values.Level}
          name="Level"
          onChange={formik.handleChange}
          isValid={formik.touched.Level && !formik.errors.Level}
          isInvalid={formik.touched.Level && formik.errors.Level}
        />
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Level must be a number between 0 and 90
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Promotion</Form.Label>
        <Form.Control
          type="number"
          defaultValue={formik.values.Promotion}
          name="Promotion"
          onChange={formik.handleChange}
          isValid={formik.touched.Promotion && !formik.errors.Promotion}
          isInvalid={formik.touched.Promotion && formik.errors.Promotion}
        />
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Promotion must be a number between 0 and 3
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Win</Form.Label>
        <Form.Control
          type="number"
          defaultValue={formik.values.Win}
          name="Win"
          onChange={formik.handleChange}
          isValid={formik.touched.Win && !formik.errors.Win}
          isInvalid={formik.touched.Win && formik.errors.Win}
        />
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Win must be a positive number
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Lose</Form.Label>
        <Form.Control
          type="number"
          defaultValue={formik.values.Lose}
          name="Lose"
          onChange={formik.handleChange}
          isValid={formik.touched.Lose && !formik.errors.Lose}
          isInvalid={formik.touched.Lose && formik.errors.Lose}
        />
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Lose must be a positive number
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Save</Button>
      {formik.isSubmitting ? <p className="mt-4">Settings saved!</p> : <p></p>}
    </Form>
  );
};

export default FormEditCharacter;
