import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import "../../styles/HomePage.css";
import { useNavbarSearchHook } from "../../hook/search/navbarSearchHook";
import { Link } from "react-router-dom";

export const NavBarLogin = () => {
  const [onChangeSearch] = useNavbarSearchHook();

  let word = "";
  if (localStorage.getItem("searchWord") != null) {
    word = localStorage.getItem("searchWord");
  }


  return (
    <Navbar bg="dark" expand="sm" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand>
          <Link to = "/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form.Control
            value={word}
            onChange={onChangeSearch}
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center custom-form-control"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <Nav.Link
              className="nav-text d-flex justify-content-center align-items-center"
            >
            <Link to = "/login" style={{textDecoration: "none"}} className="d-flex">
              <img src={login} alt="img login" className="login-img" />
              <p
                style={{
                  color: "white",
                  marginBottom: "0",
                  marginRight: "3px",
                }}
              >
                دخول
              </p>
            </Link>
            </Nav.Link>
            <Nav.Link
              className="nav-text d-flex justify-content-center  align-items-center"
            >
            <Link to = "/cart" style={{textDecoration: "none"}} className="d-flex">
              <img src={cart} alt="img cart" className="login-img" />
              <p
                style={{
                  color: "white",
                  marginBottom: "0",
                  marginRight: "3px",
                }}
              >
                العربه
              </p>
            </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
