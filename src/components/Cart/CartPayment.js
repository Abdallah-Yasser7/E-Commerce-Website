import React from "react";
import { Link } from "react-router-dom";

export const CartPayment = () => {
  return (
    <div className="parent-cart-payment">
      <div>
        <input
          type="text"
          placeholder="كود الخصم"
          className="text-center input-cart-payment"
        />
        <button className="btn-cart-payment">تطبيق</button>
      </div>
      <div className="w-100 text-center price my-3">34000 جنية</div>
      <div>
        <Link to="/order/paymethod">
          <button className="w-100 btn-cart">اتمام الشراء</button>
        </Link>
      </div>
    </div>
  );
};
