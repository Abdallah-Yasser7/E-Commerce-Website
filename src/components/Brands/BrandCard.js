import React from "react";
import { Card, Col } from "react-bootstrap";
import "../../styles/HomePage.css"
import { Link } from "react-router-dom";

export const BrandCard = ({img, id}) => {
  return (
    <Col sm="6" xs="6" md="4" lg="2" className="d-flex justify-content-center my-2">
      <Card style={{ width: "18rem" }}>
      <Link to={`/products/brand/${id}`}>
        <Card.Img style={{height: "200px", width: "100%"}} src={img}/>
      </Link>
      </Card>
    </Col>
  );
};
