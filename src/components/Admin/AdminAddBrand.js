import React from "react";
import { SubTitle } from "../Uitily/SubTitle";
import avatar from "../../images/avatar.png";
import "../../styles/Admin.css"

export const AdminAddBrand = () => {
  return (
    <div>
      <SubTitle title="اضف ماركه جديده" />
      <div style={{ color: "gray" }} className="fs-5 mb-2">
        صورة الماركه
      </div>
      <img alt="" src={avatar} style={{ width: "130px" }} />
      <div className="mt-3" style={{width:"60%"}}>
        <input type="text" className="input-add-brand" placeholder="اسم الماركه"/>
        <div className="d-flex justify-content-end">
          <button className="btn-add-brand">حفظ التعديلات</button>
        </div>
      </div>
    </div>
  );
};
