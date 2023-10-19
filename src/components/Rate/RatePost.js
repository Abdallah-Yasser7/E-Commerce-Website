import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "../../styles/Products.css";
import { useAddRateHook } from "../../hook/rate/addRateHook";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

export const RatePost = () => {
  const {id} = useParams()
  const [user, rateText, onChangeRateText, rateStars, onChangeRateStars, onSubmit] = useAddRateHook(id)
  let name=""
  if (user) {
    name = user.name
  }

  const setting = {
    size: 20,
    count: 5,
    color: "gray",
    activeColor: "#ffc107",
    value: rateStars,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      onChangeRateStars(newValue)
    },
  };

  return (
    <div className="border-bottom">
      <Row className="p-3">
        <Col className="d-flex">
          <p className="fw-bold">{name}</p>
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
            value={rateText}
            onChange={onChangeRateText}
          />
        </Col>
      </Row>
      <Row className="pb-3">
        <Col>
          <div onClick={onSubmit} className="btn-rate">اضف تعليق</div>
        </Col>
      </Row>
      <ToastContainer/>
    </div>
  );
};
