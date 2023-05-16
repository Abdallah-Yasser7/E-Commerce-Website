import React from "react";
import mobile from "../../images/mobile.png";
import "../../styles/User.css"

export const UserAllOrderCard = () => {
  return (
    <div className="parent-all-order-card">
      <div>
        <img alt="" src={mobile}  style={{width:"90px"}} />
      </div>
      <div className="w-100 parent-details">
        <div className="mt-2 text-all-order-card">
           ايفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4GLTE مع تطبيق فيس تايم (برودكت) احمر{" "}
          <span className="cat-rate">4.5</span>
          <span style={{color:"gray", fontSize:"small"}} className="mx-1">(160 تقيم)</span>
        </div>
        <div className="d-flex style-1 mt-2 ">
          <div className="mt-3">
            <span style={{ color: "gray", fontSize: "14px" }}>الكمية </span>
            <input type="number" style={{ width: "40px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
