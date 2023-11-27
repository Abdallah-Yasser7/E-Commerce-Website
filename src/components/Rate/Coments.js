import React from "react";
import rate from "../../images/rate.png";
import deleteIcon from "../../images/delete.png";
import editIcon from "../../images/edit_icon.png";
import { Button, Modal } from "react-bootstrap";
import { useDeleteRateHook } from "../../hook/rate/deleteRateHook";
import { ToastContainer } from "react-toastify";
import { useEditRateHook } from "../../hook/rate/editRateHook";
import ReactStars from "react-rating-stars-component";

export const Coments = ({ item }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(item._id);

const [handleClose, handleShow, handelDelete, showDelete] = useDeleteRateHook(item._id)
const [handleCloseEdit, handleShowEdit, handelEdit, showEdit, textEdit, starEdit,
   onChangeText, onChangeStar] = useEditRateHook(item)

   const setting = {
    size: 20,
    count: 5,
    color: "gray",
    activeColor: "#ffc107",
    value: starEdit,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      onChangeStar(newValue)
    },
  };

  return (
    <div className="border-bottom py-3">
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font-modals">تأكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font-modals">هل انت متأكد من حذف التعليق ؟</div>
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

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header>
          <Modal.Title>
            <div className="font-modals">تعديل التعليق</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactStars {...setting} />
          <input value={textEdit} onChange={onChangeText} className="w-100" style={{border:"none",outline:"none"}} autoFocus/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            <div className="font-modals">تراجع</div>
          </Button>
          <Button variant="success" onClick={handleCloseEdit}>
            <div className="font-modals" onClick={handelEdit}>
              تعديل
            </div>
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="d-flex align-items-center">
        <div className="fw-bold">{item.user.name}</div>
        <img alt="" src={rate} className="img-rate" />
        <div style={{ color: "#ffc107" }} className="fw-bold">
          {item.rating}
        </div>
      </div>
      <div
        style={{ color: "gray" }}
        className="pe-2 d-inline d-flex justify-content-between"
      >
        <div>{item.review}</div>
        {user._id === item.user._id ? (
          <div>
            <img
              onClick={handleShow}
              alt=""
              src={deleteIcon}
              width="20px"
              height="20px"
              style={{ cursor: "pointer" }}
            />
            <img
              onClick={handleShowEdit}
              alt=""
              src={editIcon}
              width="20px"
              height="20px"
              style={{ cursor: "pointer" }}
            />
          </div>
        ) : null}
      </div>
      <ToastContainer/>
    </div>
  );
};
