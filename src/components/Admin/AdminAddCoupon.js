import React, { useRef } from "react";
import { SubTitle } from "../Uitily/SubTitle";
import "../../styles/Admin.css";
import { ToastContainer } from "react-toastify";
import { Spinner } from "react-bootstrap";
import { useAddCouponHook } from "../../hook/Coupon/addCouponHook";

export const AdminAddCoupon = () => {

  const dateRef = useRef()
  const [couponName, couponDate, couponDiscount, onChangeName, onChangeDate, onChangeDiscount, onSubmit, loading, isPress] = useAddCouponHook()

  return (
    <div>
      <SubTitle title="اضف كوبون " />

      <div className="mt-3" style={{ width: "60%" }}>
        <input
          type="text"
          className="input-add-brand my-1"
          placeholder="اسم الكوبون"
          onChange={onChangeName}
          value={couponName}
        />
        <input
          ref={dateRef}
          type="text"
          className="input-add-brand my-1"
          placeholder="تاريخ الانتهاء"
          onFocus={() => dateRef.current.type = "date"}
          onBlur={() => dateRef.current.type = "text"}
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
