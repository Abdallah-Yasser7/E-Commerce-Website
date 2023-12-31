import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useViewDetailsProductHook } from "../../hook/products/viewDetailsProductHook";
import rate from "../../images/rate.png";
import { useAddProductToCartHook } from "../../hook/cart/addProductToCartHook";
import { ToastContainer } from "react-toastify";

export const ProductDetails = () => {
  const { id } = useParams();
  const [item, catName, brandName] = useViewDetailsProductHook(id);
  const [, colorChecked, colorClick, handelClick] = useAddProductToCartHook(
    id,
    item
  );

  return (
    <div className="p-3">
      <Row className="mt-2">
        <div className="cat-text">{catName} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline-flex">
            {item.title}{" "}
            <img alt="" src={rate} className="img-rate me-2 d-inline mx-1" />
            <div className="cat-rate d-inline">{item.ratingsAverage || 0}</div>
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
                    className="color ms-2"
                    style={{
                      backgroundColor: `${color}`,
                      cursor: "pointer",
                      border:
                        color === colorChecked ? "4px solid #212529" : "none",
                    }}
                    onClick={() => colorClick(index, color)}
                  ></div>
                ))
              : null
            : null}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row>
        <Col md="10">
          <div className="product-description d-inline">{item.description}</div>
        </Col>
      </Row>

      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الكميه المتاحة :</div>
          <div className="barnd-text d-inline mx-1">
              {
                item.quantity > 5 ? `${item.quantity}` : (
                  <div className="d-inline">
                    <span className="mx-1" style={{color:"red"}}>{item.quantity}</span>
                    <p className="d-inline" style={{color:"red"}}>فقط</p>
                  </div>
                )
              }
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md="12">
          {item.priceAfterDiscount >= 1 ? (
            <div className="product-price d-inline p-3 border">
              <span style={{ textDecorationLine: "line-through" }}>
                {item.price}
              </span>{" "}
              <span className="p-1">{item.priceAfterDiscount}</span>
              جنية
            </div>
          ) : (
            <div className="product-price d-inline p-3 border">
              <span className="p-1">{item.price}</span>
              جنية
            </div>
          )}
          <div
            onClick={handelClick}
            className="product-cart-add px-3 py-3 d-inline mx-3"
          >
            اضف للعربة
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};
