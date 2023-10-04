import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRegisterHook } from "../../hook/Auth/registerHook";
import { ToastContainer } from "react-toastify";

export const RegisterPage = () => {
  const [userName, phoneNumber, email, password, confirmPassword, handelUserName, handelPhoneNumber,
    handelEmail, handelPassword, handelConfirmPassword, handelSubmit] = useRegisterHook()
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="12" className="login-auth mt-5">
          <label className="fw-bold fs-5" style={{ color: "#212529" }}>
            تسجيل حساب جديد
          </label>
          <input
            value={userName}
            onChange={handelUserName}
            type="text"
            placeholder="اسم المستخدم..."
            className="input-login"
          />
          <input
            value={phoneNumber}
            onChange={handelPhoneNumber}
            type="phone"
            placeholder="رقم الهاتف..."
            className="input-login"
          />
          <input
            value={email}
            onChange={handelEmail}
            type="email"
            placeholder="الايميل..."
            className="input-login"
          />
          <input
            value={password}
            onChange={handelPassword}
            type="password"
            placeholder="كلمه السر..."
            className="input-login"
          />
          <input
            value={confirmPassword}
            onChange={handelConfirmPassword}
            type="password"
            placeholder="تأكيد كلمة السر..."
            className="input-login"
          />
          <button onClick={handelSubmit} className="btn-login">تسجيل الحساب</button>
          <label>
            لديك حساب بالفعل ؟
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="span-login">اضغط هنا</span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  );
};
