import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="12" className="login-auth mt-5">
          <label className="fw-bold fs-5" style={{ color: "#212529" }}>
            تسجيل حساب جديد
          </label>
          <input
            type="text"
            placeholder="اسم المستخدم..."
            className="input-login"
          />
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
          <button className="btn-login">تسجيل الحساب</button>
          <label>
            لديك حساب بالفعل ؟
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="span-login">اضغط هنا</span>
            </Link>
          </label>
        </Col>
      </Row>
    </Container>
  );
};
