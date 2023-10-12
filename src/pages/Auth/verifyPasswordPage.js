import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "../../styles/Auth.css";
import { ToastContainer } from "react-toastify";
import { useVerifyPasswordHook } from "../../hook/Auth/verifyPasswordHook";

export const VerifyPasswordPage = () => {

  const [code, spinner, onChangeCode, onSubmit] = useVerifyPasswordHook();

  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="12" className="login-auth mt-5">
          <label className="fw-bold fs-5" style={{ color: "#212529" }}>
            ادخل الكود المرسل للأميل
          </label>
          <input
            value={code}
            onChange={onChangeCode}
            type="email"
            placeholder="ادخل الكود..."
            className="input-login"
          />
          <button onClick={onSubmit} className="btn-login">تأكيد</button>
          {spinner ? (<Spinner animation="border" variant="dark" />) : null }
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  );
};
