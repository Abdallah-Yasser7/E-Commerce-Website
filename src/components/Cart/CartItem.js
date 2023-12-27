import React from "react";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";
import "../../styles/Cart.css";
import { useDeleteProductCartHook } from "../../hook/cart/deleteProductCartHook";
import { Button, Modal } from "react-bootstrap";
import { useUpdateCountFromCartHook } from "../../hook/cart/updateCountFromCartHook";

export const CartItem = ({ item }) => {
  const [, , , , showOne, handleCloseOne, handelDeleteOne, handleShowOne] = useDeleteProductCartHook(item);
  const [countItem, onChangeCount, handelClick] = useUpdateCountFromCartHook(item)

  return (
    <div className="parent-cart-item mb-3">
      <Modal show={showOne} onHide={handleCloseOne}>
        <Modal.Header>
          <Modal.Title>
            <div className="font-modals">تأكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font-modals">هل انت متأكد من حذف المنتج ؟</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseOne}>
            <div className="font-modals">تراجع</div>
          </Button>
          <Button variant="danger" onClick={handleCloseOne}>
            <div className="font-modals" onClick={handelDeleteOne}>
              حذف
            </div>
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        <img
          alt=""
          src={`http://127.0.0.1:8000/products/${item.product.imageCover}`}
          className="img-cart-item"
        />
      </div>
      <div className="w-100 parent-details">
        <div className="d-flex justify-content-between">
          <div style={{ color: "gray", fontSize: "14px" }}>
            {item.product.category ? item.product.category.name : `بدون تصنيف`}
          </div>
          <div style={{ cursor: "pointer" }} onClick={handleShowOne}>
            <img alt="" src={deleteicon} className="deleteicon" />
            <span style={{ color: "gray", fontSize: "14px" }}>ازاله</span>
          </div>
        </div>
        <div className="mt-2">
          {item.product.title}
          <span className="cat-rate px-1">
            {item.product.ratingsAverage || 0}
          </span>
        </div>
        <div>
          <span style={{ color: "gray", fontSize: "14px" }}>الماركه : </span>
          <span style={{ color: "rgb(73, 73, 73)" }} className="fw-bold">
            {item.product.brand ? item.product.brand.name : `بدون ماركه`}
          </span>
        </div>
        {item.color !== "" ? (
          <div
            className="color-item-cart mt-2"
            style={{ backgroundColor: item.color }}
          ></div>
        ) : null}
        <div className="d-flex justify-content-between mt-2">
          <div>
            <span style={{ color: "gray", fontSize: "14px" }}>الكمية : </span>
            <input type="number" className="text-center" style={{ width: "55px", height:"37px" }} onChange={onChangeCount} value={countItem} />
            <button onClick={handelClick} className="mx-1 btn" style={{backgroundColor:"#212529", color:"white"}}>تطبيق</button>
          </div>
          <div style={{ color: "rgb(73, 73, 73)" }} className="fw-bold">
            {item.price} جنية
          </div>
        </div>
      </div>
    </div>
  );
};
