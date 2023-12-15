import React from "react";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit_icon.png";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserAddress } from "../../redux/actions/userAddressAction";

export const UserAdressCard = ({ userAddress }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handelDelete = async () => {
    await dispatch(deleteUserAddress(userAddress._id));
    setShow(false);
    window.location.reload();
  };

  return (
    <div className="parent-UserAdressCard mt-3">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font-modals">تأكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font-modals">هل انت متأكد من حذف العنوان ؟</div>
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

      <div className="d-flex justify-content-between">
        <div>{userAddress.city}</div>
        <div className="d-flex">
          <div>
            <Link to={`/user/edit-address/${userAddress._id}`} style={{ textDecoration: "none" }}>
              <img alt="" src={editicon} className="deleteicon" />
              <span style={{ color: "gray", fontSize: "14px" }}>تعديل</span>
            </Link>
          </div>
          <div style={{ cursor: "pointer" }} onClick={handleShow}>
            <img alt="" src={deleteicon} className="deleteicon" />
            <span style={{ color: "gray", fontSize: "14px" }}>ازاله</span>
          </div>
        </div>
      </div>
      <div>{userAddress.alias}</div>
      <div className="mt-3 text-fs">{userAddress.details}</div>
      <div className="mt-3 text-fs">
        رقم الهاتف : <span style={{ color: "gray" }}>{userAddress.phone}</span>
      </div>
    </div>
  );
};
