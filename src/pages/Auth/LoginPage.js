import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../styles/Auth.css";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="12" className="login-auth mt-5">
          <label className="fw-bold fs-5" style={{ color: "#212529" }}>
            تسجيل الدخول
          </label>
          <input
            type="email"
            placeholder="الايميل..."
            className="input-login"
          />
          <input
            type="password"
            placeholder="كلمه السر..."
            className="input-login"
          />
          <button className="btn-login">تسجيل الدخول</button>
          <label>
            ليس لديك حساب ؟
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span className="span-login">اضغط هنا</span>
            </Link>
          </label>
        </Col>
      </Row>
      <label className="mt-5 w-100">
        حساب الادمن :
        <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
          <span className="span-login">اضغط هنا</span>
        </Link>
      </label>
      <label className="mt-2">
        حساب المستخدم :
        <Link to="/user/allorders" style={{ textDecoration: "none" }}>
          <span className="span-login">اضغط هنا</span>
        </Link>
      </label>
    </Container>
  );
};
