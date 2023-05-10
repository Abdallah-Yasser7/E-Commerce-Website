import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "../../styles/Products.css";

export const RatePost = () => {
  const setting = {
    size: 20,
    count: 5,
    color: "gray",
    activeColor: "#ffc107",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };

  return (
    <div className="border-bottom">
      <Row className="p-3">
        <Col className="d-flex">
          <p className="fw-bold">علي محمد</p>
          <ReactStars {...setting} />
        </Col>
      </Row>
      <Row>
        <Col>
          <textarea
            cols="20"
            rows="2"
            className="textarea"
            placeholder="اكتب تعليقك..."
          />
        </Col>
      </Row>
      <Row className="pb-3">
        <Col>
          <div className="btn-rate">اضف تعليق</div>
        </Col>
      </Row>
    </div>
  );
};
