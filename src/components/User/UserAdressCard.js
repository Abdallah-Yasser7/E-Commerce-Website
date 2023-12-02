import React from "react";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit_icon.png"
import { Link } from "react-router-dom";

export const UserAdressCard = () => {
  return (
    <div className="parent-UserAdressCard mt-3">
      <div className="d-flex justify-content-between">
        <div>المنزل</div>
        <div className="d-flex">
          <div>
            <Link to="/user/edit-address" style={{textDecoration:"none"}}>
              <img alt="" src={editicon} className="deleteicon" />
              <span style={{ color: "gray", fontSize: "14px" }}>تعديل</span>
            </Link>
          </div>
          <div>
            <img alt="" src={deleteicon} className="deleteicon" />
            <span style={{ color: "gray", fontSize: "14px" }}>ازاله</span>
          </div>
        </div>
      </div>
      <div className="mt-3 text-fs">
        القاهرة مدينه نصر شارع التسعين عمارة 14
      </div>
      <div className="mt-3 text-fs">
        رقم الهاتف : <span style={{ color: "gray" }}>01016643078</span>
      </div>
    </div>
  );
};
