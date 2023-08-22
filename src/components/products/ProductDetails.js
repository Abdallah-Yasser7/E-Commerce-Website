import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useViewDetailsProductHook } from "../../hook/products/viewDetailsProductHook";

export const ProductDetails = () => {
  const { id } = useParams();
  const [item, catName, brandName] = useViewDetailsProductHook(id);

  return (
    <div className="p-3">
      <Row className="mt-2">
        <div className="cat-text">{catName} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {item.title}{" "}
            <div className="cat-rate d-inline mx-3">{item.ratingsQuantity}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{brandName}</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item
            ? item.availableColors
              ? item.availableColors.map((color, index) => (
                  <div
                    key={index}
                    className="color ms-2 border"
                    style={{ backgroundColor: `${color}` }}
                  ></div>
                ))
              : null
            : null}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
                {item.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline p-3 border">{item.price} جنية</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">
            اضف للعربة
          </div>
        </Col>
      </Row>
    </div>
  );
};
