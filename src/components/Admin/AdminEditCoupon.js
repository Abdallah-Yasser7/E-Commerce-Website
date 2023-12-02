import React, { useRef } from "react";
import { SubTitle } from "../Uitily/SubTitle";
import "../../styles/Admin.css";
import { ToastContainer } from "react-toastify";
import { Spinner } from "react-bootstrap";
import { useEditCouponHook } from "../../hook/Coupon/editCouponHook";
import { useParams } from "react-router-dom";

export const AdminEditCoupon = () => {
  const {id} = useParams();

  const [couponName, couponDate, couponDiscount, onChangeName, onChangeDate, onChangeDiscount, onSubmit, loading, isPress] = useEditCouponHook(id)

  return (
    <div>
      <SubTitle title="تعديل الكوبون " />

      <div className="mt-3" style={{ width: "60%" }}>
        <input
          type="text"
          className="input-add-brand my-1"
          placeholder="اسم الكوبون"
          onChange={onChangeName}
          value={couponName}
        />
        <input
          type="text"
          className="input-add-brand my-1"
          placeholder="تاريخ الانتهاء"
          onChange={onChangeDate}
          value={couponDate}
        />
        <input
          type="number"
          className="input-add-brand my-1"
          placeholder="نسبة خصم الكوبون"
          onChange={onChangeDiscount}
          value={couponDiscount}
        />
        <div className="d-flex justify-content-end">
          <button className="btn-add-brand" onClick={onSubmit}>
            حفظ التعديلات
          </button>
        </div>
        {loading ? (
          isPress ? (
            <Spinner animation="border" variant="dark" className="Spinner" />
          ) : null
        ) : null}
      </div>
      <ToastContainer />
    </div>
  );
};
