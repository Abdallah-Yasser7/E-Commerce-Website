import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import rate from "../../images/rate.png";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actions/productsAction";

export const AdminProductCard = ({ item }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const handelDelete = async () => {
    await dispatch(deleteProduct(item._id))
    setShow(false)
    window.location.reload();
  }

  return (
    <Col
      sm="6"
      xs="12"
      md="4"
      lg="3"
      className="my-4 d-flex justify-content-center"
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title><div className="font-modals">تأكيد الحذف</div></Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="font-modals">هل انت متأكد من حذف المنتج ؟</div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <div className="font-modals">تراجع</div>
          </Button>
          <Button variant="danger" onClick={handleClose}>
            <div className="font-modals" onClick={handelDelete}>حذف</div>
          </Button>
        </Modal.Footer>
      </Modal>

      <Card style={{ width: "18rem" }} className="product-card">
        <div className="d-flex justify-content-between px-2">
          <div style={{ color: "gray", cursor: "pointer" }} onClick={handleShow}>ازاله</div>
          <div style={{ color: "gray", cursor: "pointer" }}>تعديل</div>
        </div>
        <Link to={`/product/${item._id}`}>
          <Card.Img variant="top" src={item.imageCover} />
        </Link>
        <Card.Body className="card-body">
          <Card.Text className="card-text">{item.title}</Card.Text>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <img alt="" src={rate} className="img-rate" />
              <p className="px-1 fw-bold mb-0" style={{ color: "#ffc107" }}>
                {item.ratingsQuantity}
              </p>
            </div>
            <div className="d-flex">
              <p className="fw-bold px-1 mb-0">{item.price}</p>
              <p className="mb-0">جنيه</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
