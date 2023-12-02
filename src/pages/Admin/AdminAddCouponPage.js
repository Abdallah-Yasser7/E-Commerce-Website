import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AdminSideBar } from "../../components/Admin/AdminSideBar";
import { AdminAddCoupon } from "../../components/Admin/AdminAddCoupon";

export const AdminAddCouponPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row className="py-3">
        <Col sm="3" xs="5" md="2" lg="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="7" md="10" lg="10">
          <AdminAddCoupon />
        </Col>
      </Row>
    </Container>
  );
};
