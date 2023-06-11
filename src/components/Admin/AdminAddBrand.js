import React from "react";
import { SubTitle } from "../Uitily/SubTitle";
import "../../styles/Admin.css";
import { ToastContainer } from "react-toastify";
import { Spinner } from "react-bootstrap";
import { useAdminAddBrandHook } from "../../hook/brand/AdminAddBrandHook";

export const AdminAddBrand = () => {

  const [img, name, loading, isPress, onImgChange, handelClick, onNameChange] = useAdminAddBrandHook()
  return (
    <div>
      <SubTitle title="اضف ماركه جديده" />
      <div style={{ color: "gray" }} className="fs-5 mb-2">
        صورة الماركه
      </div>

      <label>
        <input type="file" className="input-file" onChange={onImgChange} />
        <img alt="" src={img} style={{ width: "130px", cursor: "pointer" }} />
      </label>

      <div className="mt-3" style={{ width: "60%" }}>
        <input
          type="text"
          className="input-add-brand"
          placeholder="اسم الماركه"
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
      <ToastContainer />
    </div>
  );
};
