import React from "react";
import { Card, Col } from "react-bootstrap";
import item from "../../images/item.png";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import "../../styles/HomePage.css";
import { Link } from "react-router-dom";

export const UserProductCard = ({product}) => {
  console.log(product.imageCover
    );
  return (
    <Col
      sm="6"
      xs="12"
      md="4"
      lg="3"
      className="my-4 d-flex justify-content-center"
    >
      <Card style={{ width: "18rem" }} className="product-card">
        <Link to="/product/:id">
          <Card.Img style={{height: "200px", width: "100%"}} src={product.imageCover} />
        </Link>
        <Card.Body className="card-body">
          <img alt="" src={favoff} className="img-fav" />
          <Card.Text className="card-text">
            {product.title}
          </Card.Text>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <img alt="" src={rate} className="img-rate" />
              <p className="px-1 fw-bold mb-0" style={{ color: "#ffc107" }}>
                {product.ratingsAverage || 0}
              </p>
            </div>
            <div className="d-flex">
              <p className="fw-bold px-1 mb-0">{product.price}</p>
              <p className="mb-0">جنيه</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
