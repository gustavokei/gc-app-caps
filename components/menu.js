import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import ModalDownload from "../components/pages/home/modal-download";
import ModalLogin from "../components/pages/home/modal-login";
import ModalRegister from "../components/pages/home/modal-register";

const Menu = () => {
  const [ModalDownloadShow, SetModalDownloadShow] = React.useState(false);
  const [ModalLoginShow, SetModalLoginShow] = React.useState(false);
  const [ModalRegisterShow, SetModalRegisterShow] = React.useState(false);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Project Soluna</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Characters" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Character 1
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Character 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Character 3
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ranking" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Highest EXP
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Best PVP</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => SetModalDownloadShow(true)}>
              Download
            </Nav.Link>
            <Nav.Link onClick={() => SetModalLoginShow(true)}>Login</Nav.Link>
            <Nav.Link onClick={() => SetModalRegisterShow(true)}>
              Register
            </Nav.Link>
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
    </div>
  );
};

export default Menu;
