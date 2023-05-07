import React from "react";
import { Card, Col } from "react-bootstrap";
import "../../styles/HomePage.css"

export const BrandCard = ({img}) => {
  return (
    <Col sm="6" xs="6" md="4" lg="2" className="d-flex justify-content-center my-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img}/>
      </Card>
    </Col>
  );
};
