import React from "react";
import { SubTitle } from "../Uitily/SubTitle";
import { CartItem } from "../Cart/CartItem";
import "../../styles/Admin.css";

export const AdminOrderDetails = () => {
  return (
    <div>
      <SubTitle title="تفاصيل الطلب رقم #55" />
      <CartItem />
      <CartItem />
      <div className="parent-detials-order">
        <div className="sub-title">تفاصيل العميل</div>
        <div className="my-2">
          <span>الاسم : </span>
          <span style={{ color: "gray" }}>احمد عبدالله</span>
        </div>
        <div className="my-2">
          <span>رقم الهاتف : </span>
          <span style={{ color: "gray" }}>01016643078</span>
        </div>
        <div className="my-2">
          <span>الايميل : </span>
          <span style={{ color: "gray" }}>abdallah@gmail.com</span>
        </div>
        <div className="border-bottom border-top py-3 text-center">
          المجموع 4000 جنية
        </div>
        <div className="text-center my-2">
          <label for="select">حالة الطلب : </label>
          <select id="select" className="select-details">
            <option value="1">قيد التنفيذ</option>
            <option value="2">تم الانتهاء</option>
            <option value="3">الغاء</option>
          </select>
          <button className="btn-details">حفظ</button>
        </div>
      </div>
    </div>
  );
};
