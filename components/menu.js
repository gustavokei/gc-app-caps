import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import ModalDownload from "../components/pages/home/modal-download";
import ModalLogin from "../components/pages/home/modal-login";
import ModalLogout from "../components/pages/home/modal-logout";
import ModalRegister from "../components/pages/home/modal-register";
import Link from "./custom-link";
import axios from "axios";
import styles from "../pages/styles.module.scss";

const Menu = () => {
  const [ModalDownloadShow, SetModalDownloadShow] = useState(false);
  const [ModalLoginShow, SetModalLoginShow] = useState(false);
  const [ModalRegisterShow, SetModalRegisterShow] = useState(false);
  const [ModalLogoutShow, SetModalLogoutShow] = useState(false);
  const [auth, isAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [usrname, setUsrName] = useState("");

  useEffect(() => {
    let tokenAut = localStorage.getItem("token");

    axios
      .post("https://gc-dportal-caps.herokuapp.com/api/" + "verify", {
        token: tokenAut,
      })
      .then(
        (response) => {
          //    console.log(response.data.message);

          if (response.data.message === "Successful Login...") {
            isAuth(true);
            //     console.log(auth);
            setUsrName(response.data.verifiedJwt.body.name);
            //    console.log(response.data.verifiedJwt.body.name);
            //setName(response.data.verifiedJwt.body.name);
            localStorage.setItem(
              "UniqueID",
              response.data.verifiedJwt.body.UniqueID
            );
            if (email === "") {
              axios
                .post(
                  "https://gc-dportal-caps.herokuapp.com/api/" + "getemail",
                  {
                    Login: response.data.verifiedJwt.body.name,
                  }
                )
                .then(
                  (response) => {
                    //     console.log(response.data);
                    localStorage.setItem("userEmail", response.data);
                    setEmail(response.data);
                  },
                  (err) => {
                    console.log(err);
                  }
                );
            } else {
              setEmail(localStorage.getItem("userEmail"));
            }
          } else {
            isAuth(false);
            setUsrName("0");
            setEmail("");
            localStorage.setItem("userName", usrname);
            console.log(auth);
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
          src="logo.svg"
          alt="it is an image of yellow sun and white moon sword"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/characters">
                <a className="nav-link">Characters</a>
              </Link>
            </Nav.Item>
            <NavDropdown title="Ranking" id="collasible-nav-dropdown">
              <NavDropdown.Item href="rankexp">Highest EXP</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="rankwin">Best PVP</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {!auth ? (
              <Nav.Link onClick={() => SetModalDownloadShow(true)}>
                Download
              </Nav.Link>
            ) : (
              <span></span>
            )}

            {!auth ? (
              <Nav.Link onClick={() => SetModalRegisterShow(true)}>
                Register
              </Nav.Link>
            ) : (
              <span></span>
            )}

            {!auth ? (
              <Nav.Link onClick={() => SetModalLoginShow(true)}>Login</Nav.Link>
            ) : (
              <Nav>
                <NavDropdown title={email} id="collasible-nav-dropdown">
                  <NavDropdown.Item onClick={() => SetModalLogoutShow(true)}>
                    Logout
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/editchar">Settings</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ModalDownload
        centered
        show={ModalDownloadShow}
        onHide={() => SetModalDownloadShow(false)}
      />
      <ModalRegister
        centered
        show={ModalRegisterShow}
        onHide={() => SetModalRegisterShow(false)}
      />
      <ModalLogin
        centered
        show={ModalLoginShow}
        onHide={() => SetModalLoginShow(false)}
      />
      <ModalLogout
        centered
        show={ModalLogoutShow}
        onHide={() => SetModalLogoutShow(false)}
      />
    </div>
  );
};

export default Menu;
