import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import "../../styles/HomePage.css"

export const NavBarLogin = () => {
  return (
    <Navbar bg="dark" expand="sm" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form.Control
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <Nav.Link
             href="/login"
             className="nav-text d-flex justify-content-center align-items-center"
             >
              <img src={login} alt="img login" className="login-img"/>
              <p style={{color: "white", marginBottom: "0", marginRight: "3px"}}>دخول</p>
            </Nav.Link>
            <Nav.Link
             href="/cart"
             className="nav-text d-flex justify-content-center  align-items-center"
             >
              <img src={cart} alt="img cart" className="login-img"/>
              <p style={{color: "white", marginBottom: "0", marginRight: "3px"}}>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
