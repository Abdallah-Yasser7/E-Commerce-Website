import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "../../styles/Auth.css";
import { ToastContainer } from "react-toastify";
import { useResetPasswordHook } from "../../hook/Auth/resetPasswordHook";

export const ResetPasswordPage = () => {

  const [password, confirmPassword, spinner, onChangePassword, onChangeConfirmPassword, onSubmit] = useResetPasswordHook();

  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="12" className="login-auth mt-5">
          <label className="fw-bold fs-5" style={{ color: "#212529" }}>
            ادخل كلمة السر الجديدة
          </label>
          <input
            value={password}
            onChange={onChangePassword}
            type="password"
            placeholder="ادخل كلمة السر الجديدة..."
            className="input-login"
          />
          <input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            type="password"
            placeholder="تأكيد كلمة السر الجديدة..."
            className="input-login"
          />
          <button onClick={onSubmit} className="btn-login">حفظ</button>
          {spinner ? (<Spinner animation="border" variant="dark" />) : null }
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  );
};
