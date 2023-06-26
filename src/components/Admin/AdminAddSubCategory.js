import React from "react";
import { SubTitle } from "../Uitily/SubTitle";
import { ToastContainer } from "react-toastify";
import { useAdminAddSubCategoryHook } from "../../hook/subcategory/AdminAddSubCategoryHook";

export const AdminAddSubCategory = () => {

  const [id, name, category, handelChangeID, handelClick, handelChangeName] = useAdminAddSubCategoryHook()

  return (
    <div>
      <SubTitle title="اضف تصنيف فرعي جديد" />
      <div className="mt-3" style={{ width: "60%" }}>
        <input
          type="text"
          className="input-add-brand"
          placeholder="اسم التصنيف الفرعي"
          onChange={handelChangeName}
          value={name}
        />
        <select
          className="select-add-subcategory"
          onChange={handelChangeID}
          value={id}
        >
          <option value="0" id="0">
            اختر تصنيف فرعي
          </option>
          {category.data
            ? category.data.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })
            : null}
        </select>
        <div className="d-flex justify-content-end">
          <button onClick={handelClick} className="btn-add-brand">
            حفظ التعديلات
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
