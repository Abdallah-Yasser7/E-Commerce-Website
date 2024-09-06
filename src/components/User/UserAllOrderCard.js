import React from "react";
import mobile from "../../images/mobile.png";
import "../../styles/User.css"

export const UserAllOrderCard = ({item}) => {
  return (
    <div className="parent-all-order-card">
      <div>
        <img alt="" src={`http://127.0.0.1:8000/products/`+ item.product.imageCover} style={{width:"150px", height:"100%"}} />
      </div>
      <div className="w-100 parent-details">
        <div className="mt-2 text-all-order-card">
          {item.product.title}
          <span className="cat-rate mx-1">{item.product.ratingsAverage || 0}</span>
          <span style={{color:"gray", fontSize:"small"}} className="mx-1">({item.product.ratingsQuantity || 0} تقيم)</span>
        </div>
        <div className="mt-2" style={{backgroundColor:item.color, width:"30px", height:"30px", borderRadius:"15px"}}></div>
        <div className="d-flex style-1 mt-2 ">
          <div>
            <span style={{ color: "gray", fontSize: "14px" }}>الكمية </span>
            <input type="number" style={{ width: "40px" }} value={item.count} />
          </div>
        </div>
      </div>
    </div>
  );
};
