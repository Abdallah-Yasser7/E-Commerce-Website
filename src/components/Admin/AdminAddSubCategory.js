import React from "react";
import { SubTitle } from "../Uitily/SubTitle";

export const AdminAddSubCategory = () => {
  return (
    <div>
      <SubTitle title="اضف تصنيف فرعي جديد" />
      <div className="mt-3" style={{ width: "60%" }}>
        <input
          type="text"
          className="input-add-brand"
          placeholder="اسم التصنيف الفرعي"
        />
        <select className="select-add-subcategory">
          <option value="1">التصنيف الاول</option>
          <option value="2">التصنيف التاني</option>
          <option value="3">التصنيف الثالث</option>
          <option value="4">التصنيف الرابع</option>
        </select>
        <div className="d-flex justify-content-end">
          <button className="btn-add-brand">حفظ التعديلات</button>
        </div>
      </div>
    </div>
  );
};
