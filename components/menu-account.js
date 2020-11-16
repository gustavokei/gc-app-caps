import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "./custom-link";
import styles from "../styles.module.css";

const AccountMenu = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <img className={styles.menuLogo} src="logo.svg" />
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
            <NavDropdown title="Item" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#item/">Items</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#itemn/1">Item 1</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="your@email.com" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#logout/">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#settings/1">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AccountMenu;
