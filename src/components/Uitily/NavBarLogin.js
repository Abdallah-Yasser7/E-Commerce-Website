import React from "react";
import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import "../../styles/HomePage.css";
import { useNavbarSearchHook } from "../../hook/search/navbarSearchHook";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useGetAllUserCartHook } from "../../hook/cart/GetAllUserCartHook";

export const NavBarLogin = () => {
  const [onChangeSearch] = useNavbarSearchHook();
  const [ numOfItem ] = useGetAllUserCartHook()
  const navigate = useNavigate();

  let word = "";
  if (localStorage.getItem("searchWord") != null) {
    word = localStorage.getItem("searchWord");
  }

  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
    navigate("/");
  };

  const profileUser = () => {
    navigate("/user/profile");
  };

  const profileAdmin = () => {
    navigate("/admin/allproducts");
  };

  return (
    <Navbar bg="dark" expand="sm" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
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
            <Nav.Link className="nav-text d-flex justify-content-center align-items-center">
              {user !== "" ? (
                <NavDropdown title={user.name} id="basic-nav-dropdown">
                  {user.role === "admin" ? (
                    <NavDropdown.Item
                      onClick={profileAdmin}
                      href="/admin/allproducts"
                    >
                      لوحة التحكم
                    </NavDropdown.Item>
                  ) : (
                    <NavDropdown.Item
                      onClick={profileUser}
                      href="/user/profile"
                    >
                      الصفحه الشخصيه
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout} href="/">
                    تسجيل الخروج
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link
                  to="/login"
                  style={{ textDecoration: "none" }}
                  className="d-flex"
                >
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
              )}
            </Nav.Link>
            <Nav.Link className="nav-text d-flex justify-content-center  align-items-center">
              <Link
                to="/cart"
                style={{ textDecoration: "none" }}
                className="d-flex"
              >
                <div className="d-flex position-relative">
                  <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                    {numOfItem || 0}
                    <span class="visually-hidden">unread messages</span>
                  </span>
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
                </div>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
