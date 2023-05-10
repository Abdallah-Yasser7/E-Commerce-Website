import React from "react";
import rate from "../../images/rate.png";

export const Coments = () => {
  return (
    <div className="border-bottom py-3">
      <div className="d-flex align-items-center">
        <div className="fw-bold">احمد محمود</div>
        <img alt="" src={rate} className="img-rate" />
        <div style={{ color: "#ffc107" }} className="fw-bold">
          4.3
        </div>
      </div>
      <div style={{ color: "gray" }} className="px-2">
        منتج مناسب سعره للوقت الحالي وجه مناسب جدا ومعاه دراع ذياده
      </div>
    </div>
  );
};
