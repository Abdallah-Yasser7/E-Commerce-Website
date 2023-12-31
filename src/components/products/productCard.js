import React from "react";
import { Card, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import "../../styles/HomePage.css";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAddAndRemoveFromWishListHook } from "../../hook/wishList/addAndRemoveFromWishListHook";

export const ProductCard = ({ products, favProd }) => {
  const [iconImg, handelFav] = useAddAndRemoveFromWishListHook(
    products,
    favProd
  );
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
          <Card.Img
            style={{ height: "200px", width: "100%" }}
            src={products.imageCover}
          />
        </Link>
        <Card.Body className="card-body">
          <img
            alt=""
            src={iconImg}
            className="img-fav"
            style={{ cursor: "pointer" }}
            onClick={handelFav}
          />
          <Card.Text className="card-text">{products.title}</Card.Text>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <img alt="" src={rate} className="img-rate" />
              <p className="px-1 fw-bold mb-0" style={{ color: "#ffc107" }}>
                {products.ratingsAverage || 0}
              </p>
            </div>
            <div className="d-flex">
              <p className="fw-bold px-1 mb-0">
                {products.priceAfterDiscount >= 1 ? (
                  <div>
                    <span style={{ textDecorationLine: "line-through" }}>
                      {products.price}
                    </span>{" "}
                    {products.priceAfterDiscount}
                  </div>
                ) : (
                  `${products.price}`
                )}
              </p>
              <p className="mb-0">جنيه</p>
            </div>
          </div>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Col>
  );
};
