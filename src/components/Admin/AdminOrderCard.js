import React from "react";
import { Link } from "react-router-dom";

export const AdminOrderCard = ({ item }) => {
  console.log(item);
  return (
    <Link
      to={`/admin/order/${item._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="parent-cart-item mb-3">
        <div className="w-100 parent-details">
          <div className="d-flex justify-content-between">
            <div style={{ color: "gray", fontSize: "14px" }}>
              طلب رقم #{item.id}
            </div>
          </div>
          <div className="d-flex">
            <div className="mt-2 mx-1">
              طلب من :{" "}
              <span style={{ color: "gray", fontSize: "14px" }}>
                {" "}
                {item.user.name}{" "}
              </span>
            </div>
            <div className="mt-2 mx-1">
              الايميل :{" "}
              <span style={{ color: "gray", fontSize: "14px" }}>
                {" "}
                {item.user.email}{" "}
              </span>
            </div>
            <div className="mt-2 mx-1">
              الموبايل :{" "}
              <span style={{ color: "gray", fontSize: "14px" }}>
                {" "}
                {item.user.phone}{" "}
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <div className="d-flex">
              <div className="mx-1">
                التوصيل{" "}
                <span style={{ color: "gray" }}>
                  {item.isDelivered === false ? "لم يتم" : "تم التوصيل"}
                </span>
              </div>
              <div className="mx-1">
                الدفع{" "}
                <span style={{ color: "gray" }}>
                  {item.isPaid === false ? "لم يتم" : "تم الدفع"}
                </span>
              </div>
              <div className="mx-1">
                طريقة الدفع{" "}
                <span style={{ color: "gray" }}>
                  {item.paymentMethodType === "cash"
                    ? "كاش"
                    : "البطاقه الاتمانيه"}
                </span>
              </div>
            </div>
            <div style={{ color: "rgb(73, 73, 73)" }} className="fw-bold">
              {item.totalOrderPrice} جنية
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
