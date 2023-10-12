import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "../../styles/Auth.css";
import { ToastContainer } from "react-toastify";
import { useForgetPasswordHook } from "../../hook/Auth/forgetPasswordHook";

export const ForgetPasswordPage = () => {

  const [email, spinner, onChangeEmail, onSubmit] = useForgetPasswordHook();

  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="12" className="login-auth mt-5">
          <label className="fw-bold fs-5" style={{ color: "#212529" }}>
            نسيت كلمة السر
          </label>
          <input
            value={email}
            onChange={onChangeEmail}
            type="email"
            placeholder="الايميل..."
            className="input-login"
          />
          <button onClick={onSubmit} className="btn-login">ارسل الكود</button>
          {spinner ? (<Spinner animation="border" variant="dark" />) : null }
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  );
};
