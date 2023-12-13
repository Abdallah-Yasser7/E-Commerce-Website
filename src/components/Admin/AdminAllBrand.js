import React from "react";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit_icon.png";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCoupon } from "../../redux/actions/couponAction";
import { Link } from "react-router-dom";

export const AdminAllCoupon = ({ coupon }) => {
  const dateString = coupon.expire;
  const formatData = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handelDelete = async () => {
    await dispatch(deleteCoupon(coupon._id));
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
          <div className="font-modals">هل انت متأكد من حذف الكوبون ؟</div>
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
        <div>اسم الكوبون : {coupon.name}</div>
        <div className="d-flex">
          <Link to = {`/admin/editCoupon/${coupon._id}`} style={{textDecoration: "none"}}>
            <div>
              <img alt="" src={editicon} className="deleteicon" />
              <span style={{ color: "gray", fontSize: "14px" }}>تعديل</span>
            </div>
          </Link>
          <div onClick={handleShow} style={{ cursor: "pointer" }}>
            <img alt="" src={deleteicon} className="deleteicon" />
            <span style={{ color: "gray", fontSize: "14px" }}>ازاله</span>
          </div>
        </div>
      </div>
      <div className="mt-2">تاريخ الانتهاء : {formatData(dateString)}</div>
      <div className="mt-2">
        نسبة الخصم : <span style={{ color: "gray" }}>{coupon.discount} %</span>
      </div>
    </div>
  );
};
