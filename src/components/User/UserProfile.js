import React from "react";
import deleteicon from "../../images/delete.png";
import { SubTitle } from "../Uitily/SubTitle";
import "../../styles/User.css";

export const UserProfile = () => {
  return (
    <div>
      <SubTitle title="الصفحه الشخصية" />
      <div className="parent-UserProfile">
        <div className="d-flex justify-content-between">
          <div>
            الاسم : <span style={{ color: "gray" }}>احمد عبدالله</span>
          </div>
          <div>
            <img alt="" src={deleteicon} className="deleteicon" />
            <span style={{ color: "gray", fontSize: "14px" }}>تعديل</span>
          </div>
        </div>
        <div className="mt-3">
          رقم الهاتف : <span style={{ color: "gray" }}>01016643078</span>
        </div>
        <div className="mt-3">
          الايميل : <span style={{ color: "gray" }}>abdallah@gmail.com</span>
        </div>
      </div>
      <SubTitle title="تغير كلمة المرور" />
      <div className="mt-3 parent-edit-add">
        <input
          type="password"
          className="input-add-brand"
          placeholder="ادخل كلمة المرور القديمه"
        />
        <input
          type="password"
          className="input-add-brand mt-3"
          placeholder="ادخل كلمة المرور الجديده"
        />
        <div className="d-flex justify-content-end">
          <button className="btn-add-brand">حفظ كلمة المرور</button>
        </div>
      </div>
    </div>
  );
};
