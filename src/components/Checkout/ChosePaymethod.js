import React from "react";
import { Col, Row } from "react-bootstrap";

export const ChosePaymethod = () => {
  return (
    <div>
      <Row
        className="parent"
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <Col sm="12" className="my-4">
          <input type="radio" className="mx-2" name="paymethod" id="1" />
          <label for="1">الدفع عن طريق البطاقه الائتمانيه</label>
        </Col>
        <Col sm="12" className="my-4">
          <input type="radio" className="mx-2" name="paymethod" id="2" />
          <label for="2">الدفع عند الاستلام</label>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-end">
          <div
            style={{
              padding: "5px 40px",
              border: "1px solid gray",
              borderRadius: "8px",
              backgroundColor:"white",
              marginLeft:"5px"
            }}
          >
            43000 جنيه
          </div>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#212529",
              borderRadius: "8px",
              color: "white",
              border: "none",
            }}
          >
            اتمام الشراء
          </button>
        </Col>
      </Row>
    </div>
  );
};
