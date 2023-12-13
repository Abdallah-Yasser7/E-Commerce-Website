import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import "../../styles/HomePage.css";
import { useDispatch } from "react-redux";
import { deleteBrand } from "../../redux/actions/brandAction";
import { Link } from "react-router-dom";

export const AdminBrandCard = ({ brand }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handelDelete = async () => {
    await dispatch(deleteBrand(brand._id));
    setShow(false);
    window.location.reload();
  };

  return (
    <Col
      sm="6"
      xs="6"
      md="4"
      lg="3"
      className="d-flex justify-content-center my-2"
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font-modals">تأكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font-modals">هل انت متأكد من حذف الماركه ؟</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <div className="font-modals">تراجع</div>
          </Button>
          <Button variant="danger" onClick={handleClose}>
            <div className="font-modals" onClick={handelDelete}>
              حذف
            </div>
          </Button>
        </Modal.Footer>
      </Modal>

      <Card style={{ width: "18rem" }}>
        <div className="d-flex justify-content-between mb-2">
          <div onClick={handleShow} className="mx-2" style={{ color: "gray", cursor: "pointer" }}>
            ازاله
          </div>
        </div>

        <Card.Img
          style={{ height: "200px", width: "100%" }}
          src={brand.image}
        />
        <Card.Body>
          <Card.Title>{brand.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
