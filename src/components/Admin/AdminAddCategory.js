import React from "react";
import { SubTitle } from "../Uitily/SubTitle";
import "../../styles/Admin.css";
import { Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import useAddCategoryHook from "../../hook/category/addCategoryHook";

export const AdminAddCategory = () => {

  const [img, name, loading, isPress, onImgChange, handelClick, onNameChange] = useAddCategoryHook();

  return (
    <div>
      <SubTitle title="اضف تصنيف جديد" />
      <div style={{ color: "gray" }} className="fs-5 mb-2">
        صورة التصنيف
      </div>

      <label>
        <input type="file" className="input-file" onChange={onImgChange} />
        <img alt="" src={img} style={{ width: "130px", cursor: "pointer" }} />
      </label>

      <div className="mt-3" style={{ width: "60%" }}>
        <input
          type="text"
          className="input-add-brand"
          placeholder="اسم التصنيف"
          onChange={onNameChange}
          value={name}
        />
        <div className="d-flex justify-content-end">
          <button className="btn-add-brand" onClick={handelClick}>
            حفظ التعديلات
          </button>
        </div>
        {loading ? (
          isPress ? (
            <Spinner animation="border" variant="dark" className="Spinner" />
          ) : null
        ) : null}
      </div>
      <ToastContainer/>
    </div>
  );
};
