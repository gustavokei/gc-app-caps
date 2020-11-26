import React, {useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import ModalDownload from "../components/pages/home/modal-download";
import ModalLogin from "../components/pages/home/modal-login";
import ModalRegister from "../components/pages/home/modal-register";
import Link from "./custom-link";
import axios from 'axios';

const Menu = () => {
  const [ModalDownloadShow, SetModalDownloadShow] = React.useState(false);
  const [ModalLoginShow, SetModalLoginShow] = React.useState(false);
  const [ModalRegisterShow, SetModalRegisterShow] = React.useState(false);
  const [auth, isAuth] = React.useState(false);

  useEffect(() => {



      let tokenAut = localStorage.getItem('token');

      function aut(){
      axios.post('http://localhost:4000/api' + "/verify", {
          token: tokenAut
      })
      .then((response) => {

        console.log(response.data.message);
  //      let kaku = response.data.message;
  //      console.log(kaku);
        if(response.data.message === "Successful Login..."){
        isAuth(true);
        console.log(auth);
        }
        else{
          isAuth(false);
          console.log(auth);
        }
 //       console.log(auth);
      },
      err => {
        
      });
    }

  aut();
   


      
      
  });

  
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Project Soluna</Navbar.Brand>
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
            
            <Nav.Link onClick={() => SetModalRegisterShow(true)}>
              Register
            </Nav.Link>
            {  (!auth) ? <Nav.Link onClick={() => SetModalLoginShow(true)}>Login</Nav.Link> : <Nav.Link onClick={() => SetModalLoginShow(true)}>Logout</Nav.Link>}
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
  )
};

export default Menu;
