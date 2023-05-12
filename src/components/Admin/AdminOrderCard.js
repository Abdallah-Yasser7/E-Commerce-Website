import React from "react";
import deleteicon from "../../images/delete.png";
import mobile from "../../images/mobile.png";
import { Link } from "react-router-dom";

export const AdminOrderCard = () => {
  return (
    <Link to="/admin/order/:id" style={{ textDecoration: "none", color: "black" }}>
      <div className="parent-cart-item mb-3">
        <div>
          <img alt="" src={mobile} className="img-cart-item" />
        </div>
        <div className="w-100 parent-details">
          <div className="d-flex justify-content-between">
            <div style={{ color: "gray", fontSize: "14px" }}>طلب رقم #2125</div>
            <div>
              <img alt="" src={deleteicon} className="deleteicon" />
              <span style={{ color: "gray", fontSize: "14px" }}>ازاله</span>
            </div>
          </div>
          <div className="mt-2">
            ايفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4GLTE مع تطبيق فيس{" "}
            <span className="cat-rate">4.5</span>
          </div>
          <div>
            <span style={{ color: "gray", fontSize: "14px" }}>الماركه : </span>
            <span style={{ color: "rgb(73, 73, 73)" }} className="fw-bold fs-5">
              ابل
            </span>
          </div>
          <div className="color-item-cart mt-2"></div>
          <div className="d-flex justify-content-between mt-2">
            <div>
              <span style={{ color: "gray", fontSize: "14px" }}>الكمية </span>
              <input type="number" style={{ width: "40px" }} />
            </div>
            <div style={{ color: "rgb(73, 73, 73)" }} className="fw-bold">
              3000 جنية
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
