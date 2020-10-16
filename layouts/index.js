import React from "react"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
//import Link from "next/link"
import { PageBody } from "../styles"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <Head>
        <style>
          {`body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }
          a {
            text-decoration: none;
          }`}
        </style>
      </Head>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Project Soluna</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <NavDropdown title="Characters" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Character 1</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Character 2</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Character 3</NavDropdown.Item>
      
      
      </NavDropdown>
      <NavDropdown title="Ranking" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Highest EXP</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Best PVP</NavDropdown.Item>
      </NavDropdown>
     
    </Nav>
     
    <Nav>
    <Nav.Link href="/home">Download</Nav.Link>
    <Nav.Link href="/home">Login</Nav.Link>
      <Nav.Link href="/about">Register</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      <PageBody>{children}</PageBody>
    </React.Fragment>
  )
}

export default Layout