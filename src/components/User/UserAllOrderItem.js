import React from "react";
import { UserAllOrderCard } from "./UserAllOrderCard";
import "../../styles/User.css";

export const UserAllOrderItem = ({ item }) => {
  return (
    <div className="parent-all-order-item">
      <div className="fw-bold mb-1">طلب رقم #{item.id}</div>
      {
        item.cartItems && item.cartItems.length >= 1
        ? item.cartItems.map((item, index) => {
            return <UserAllOrderCard key={index} item={item} />;
          })
        : null}
      <div className="d-flex justify-content-between mt-2">
        <div className="d-flex">
          <div className="mx-1">
            التوصيل <span style={{ color: "gray" }}>{item.isDelivered === false ? "لم يتم" : "تم التوصيل"}</span>
          </div>
          <div className="mx-1">
            الدفع <span style={{ color: "gray" }}>{item.isPaid === false ? "لم يتم" : "تم الدفع"}</span>
          </div>
          <div className="mx-1">
            طريقة الدفع <span style={{ color: "gray" }}>{item.paymentMethodType === "cash" ? "كاش" : "البطاقه الاتمانيه"}</span>
          </div>
        </div>
        <div className="fw-bold">{item.totalOrderPrice} جنيه</div>
      </div>
    </div>
  );
};
