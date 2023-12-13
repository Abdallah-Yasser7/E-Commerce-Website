import React from "react";
import { Button, Col, Modal } from "react-bootstrap";
import "../../styles/HomePage.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCategory } from "../../redux/actions/categoryAction";

export const AdminCategoryCard = ({ category, background }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handelDelete = async () => {
    await dispatch(deleteCategory(category._id));
    setShow(false);
    window.location.reload();
  };

  return (
    <Col
      lg="2"
      md="4"
      sm="6"
      xs="6"
      className="my-4 d-flex justify-content-around pt-3"
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font-modals">تأكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font-modals">هل انت متأكد من حذف التصنيف ؟</div>
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

      <div style={{ position: "relative" }}>

        <div
          style={{ position: "absolute", top:"-45px", left:"25px" }}
          className="d-flex justify-content-between mb-2"
        >
          <div onClick={handleShow} className="mx-2" style={{ color: "gray", cursor: "pointer" }}>
            ازاله
          </div>
        </div>

        <div
          style={{ backgroundColor: `${background}` }}
          className="card-style"
        ></div>
        <img alt="card img" src={category.image} className="img-card" />
        <p className="pt-4 text-center">{category.name}</p>
      </div>
    </Col>
  );
};
