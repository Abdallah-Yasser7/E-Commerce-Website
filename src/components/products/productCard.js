import React from "react";
import { Card, Col } from "react-bootstrap";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import "../../styles/HomePage.css";
import { Link } from "react-router-dom";

export const ProductCard = ({products}) => {
  return (
    <Col
      sm="6"
      xs="6"
      md="4"
      lg="3"
      className="my-4 d-flex justify-content-center"
    >
      <Card style={{ width: "18rem" }} className="product-card">
        <Link to={`/product/${products._id}`}>
          <Card.Img variant="top" src={products.imageCover} />
        </Link>
        <Card.Body className="card-body">
          <img alt="" src={favoff} className="img-fav" />
          <Card.Text className="card-text">
            {products.description}
          </Card.Text>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <img alt="" src={rate} className="img-rate" />
              <p className="px-1 fw-bold mb-0" style={{ color: "#ffc107" }}>
                {products.ratingsQuantity}
              </p>
            </div>
            <div className="d-flex">
              <p className="fw-bold px-1 mb-0">{products.price}</p>
              <p className="mb-0">جنيه</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
