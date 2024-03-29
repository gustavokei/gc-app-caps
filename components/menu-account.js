import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "./custom-link";
import styles from "../pages/styles.module.scss";
import ModalLogout from "../components/pages/home/modal-logout";
import ModalLoggedout from "../components/pages/home/modal-logged-out";
import axios from "axios";

const AccountMenu = () => {
  const [auth, isAuth] = React.useState(false);
  const [name, setName] = React.useState("");
  const [ModalLogoutShow, SetModalLogoutShow] = React.useState(false);
  const [ModalLoggedoutShow, SetModalLoggedoutShow] = React.useState(false);

  useEffect(() => {
    let tokenAut = localStorage.getItem("token");

    axios
      .post("https://api.devgames.app/api/" + "verify", {
        token: tokenAut,
      })
      .then(
        (response) => {
          console.log(response.data.message);

          if (response.data.message === "Successful Login...") {
            isAuth(true);
            console.log(auth);
            //    console.log(response.data.verifiedJwt.body.name);
            //setName(response.data.verifiedJwt.body.name);

            axios
              .post("https://api.devgames.app/api/" + "getemail", {
                Login: response.data.verifiedJwt.body.name,
              })
              .then(
                (response) => {
                  console.log(response.data);

                  setName(response.data);
                },
                (err) => {
                  console.log(err);
                }
              );
          } else {
            isAuth(false);
            console.log(auth);
            SetModalLoggedoutShow(true);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  });

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <img
          className={styles.menuLogo}
          alt="it is an image of yellow sun and white moon sword"
          src="logo.svg"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Link href="/account">
                <a className="nav-link">Account Overview</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/server">
                <a className="nav-link">Server Status</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/editchar">
                <a className="nav-link">Edit Characters</a>
              </Link>
            </Nav.Item>
            <NavDropdown title="Items" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/additem">Add Items</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/edititem">Edit Items</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {!auth ? (
            <Nav.Link onClick={() => SetModalLoginShow(true)}>Login</Nav.Link>
          ) : (
            <Nav>
              <NavDropdown title={name} id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => SetModalLogoutShow(true)}>
                  Logout
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Home</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      <ModalLogout
        centered
        show={ModalLogoutShow}
        onHide={() => SetModalLogoutShow(false)}
      />
      <ModalLoggedout
        centered
        show={ModalLoggedoutShow}
        onHide={() => SetModalLoggedoutShow(false)}
      />
    </div>
  );
};

export default AccountMenu;
