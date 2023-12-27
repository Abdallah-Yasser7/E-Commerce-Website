import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useDeleteProductCartHook } from "../../hook/cart/deleteProductCartHook";
import { useApplyCouponHook } from "../../hook/cart/applyCouponHook";

export const CartPayment = ({ totalPrice, nameCoupon, totalPriceAfterDiscount }) => {

  const [handelApply, couponName, onChangeCoupon] = useApplyCouponHook()
  const [show, handleClose, handelDeleteAll, handleShow] = useDeleteProductCartHook()

  useEffect(() => {
    if (nameCoupon) {
      onChangeCoupon(nameCoupon)
    }
  },[nameCoupon])

  return (
    <div className="parent-cart-payment">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font-modals">تأكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font-modals">هل انت متأكد من حذف كل المنتجات ؟</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <div className="font-modals">تراجع</div>
          </Button>
          <Button variant="danger" onClick={handleClose}>
            <div className="font-modals" onClick={handelDeleteAll}>
              حذف
            </div>
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        <input
          type="text"
          placeholder="كود الخصم"
          className="text-center input-cart-payment"
          onChange={(e) => onChangeCoupon(e.target.value)}
          value={couponName}
        />
        <button onClick={handelApply} className="btn-cart-payment">تطبيق</button>
      </div>
      <div className="w-100 text-center price my-3">{totalPriceAfterDiscount >=1 ? 
        `${totalPrice} جنية...بعد الخصم ${totalPriceAfterDiscount} جنيه` :
        `${totalPrice || 0} جنية`
      }</div>
      <div>
        <button onClick={handleShow} className="w-100 btn-cart my-1">مسح العربه</button>
        <Link to="/order/paymethod">
          <button className="w-100 btn-cart">اتمام الشراء</button>
        </Link>
      </div>
    </div>
  );
};
