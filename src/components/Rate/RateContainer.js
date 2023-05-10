import React from "react";
import rate from "../../images/rate.png";
import "../../styles/Products.css";
import { RatePost } from "./RatePost";
import { Coments } from "./Coments";
import { PaginationComponent } from "../Uitily/Pagination";



export const RateContainer = () => {
  
  return (
    <div className="parent-rate p-3 m-3">
      <div className="d-flex align-items-center">
        <div className="fw-bold fs-5">التقيمات</div>
        <img alt="" src={rate} className="img-rate" />
        <div style={{ color: "#ffc107" }} className="fw-bold">
          4.3
        </div>
        <div className="text-rate">(160 تقيم)</div>
      </div>
      <RatePost/>
      <Coments/>
      <Coments/>
      <Coments/>
      <Coments/>
      <PaginationComponent/>
    </div>
  );
};
