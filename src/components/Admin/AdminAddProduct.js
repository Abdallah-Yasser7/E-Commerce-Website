import React from "react";
import { SubTitle } from "../Uitily/SubTitle";
import avatar from "../../images/avatar.png";
import add from "../../images/add.png";
import "../../styles/Admin.css";
import Multiselect from "multiselect-react-dropdown";

export const AdminAddProduct = () => {

  const onSelect = () => {

  }
  const onRemove = () => {

  }

  const options = [
      { name: "التصنيف الاول", id: 1 },
      { name: "التصنيف الثاني", id: 2 },
  ];

  return (
    <div>
      <SubTitle title="اضافة منتج جديد" />
      <div style={{ color: "gray" }} className="fs-5 mb-2">
        صورة للمنتج
      </div>
      <img alt="" src={avatar} style={{ width: "130px" }} />
      <div className="mt-3" style={{ width: "60%" }}>
        <input
          type="text"
          className="input-add-brand"
          placeholder="اسم المنتج"
        />
        <div className="mt-3">
          <textarea cols="20" rows="5" placeholder="وصف المنتج" />
        </div>
        <input
          type="text"
          className="input-add-brand mt-3"
          placeholder="السعر قبل الخصم"
        />
        <input
          type="text"
          className="input-add-brand mt-3"
          placeholder="سعر المنتج"
        />
        <select className="select-add-subcategory">
          <option value="1">التصنيف الرئيسي</option>
          <option value="1">التصنيف الاول</option>
          <option value="2">التصنيف التاني</option>
          <option value="3">التصنيف الثالث</option>
          <option value="4">التصنيف الرابع</option>
        </select>

        <Multiselect
          className="mt-2 text-end"
          placeholder="التصنيف الفرعي"
          options={options} 
          onSelect={onSelect} 
          onRemove={onRemove} 
          displayValue="name" 
        />

        <select className="select-add-subcategory">
          <option value="1">الماركه</option>
          <option value="1">التصنيف الاول</option>
          <option value="2">التصنيف التاني</option>
          <option value="3">التصنيف الثالث</option>
          <option value="4">التصنيف الرابع</option>
        </select>
        <div>
          <div className="mt-3" style={{ color: "gray" }}>
            الالوان المتاحه للمنتج
          </div>
          <div className="d-flex align-items-center mt-2">
            <div
              style={{ backgroundColor: "red" }}
              className="color-product-admin"
            ></div>
            <div
              style={{ backgroundColor: "green" }}
              className="color-product-admin"
            ></div>
            <div
              style={{ backgroundColor: "blue" }}
              className="color-product-admin"
            ></div>
            <img alt="" src={add} style={{ width: "30px" }} />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn-add-brand">حفظ التعديلات</button>
        </div>
      </div>
    </div>
  );
};
