import React from "react";
import { SubTitle } from "../Uitily/SubTitle";
// import avatar from "../../images/avatar.png";
import add from "../../images/add.png";
import "../../styles/Admin.css";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import { useAddProductHook } from "../../hook/products/addProductHook";

export const AdminAddProduct = () => {

  const [
    category,
    brand,
    onSelect,
    onRemove,
    options,
    onSelectCategory,
    onSelectBrand,
    handelClickAddColor,
    handelChangeComplete,
    handelOnRemove,
    handelSubmit,
    images,
    setImages,
    prodName,
    setProdName,
    prodDescription,
    setProdDescription,
    priceBefore,
    setPriceBefore,
    priceAfter,
    setPriceAfter,
    qty,
    setQty,
    colors,
    showColor,
    catID,
    brandID
  ] = useAddProductHook()

  return (
    <div>
      <SubTitle title="اضافة منتج جديد" />
      <div style={{ color: "gray" }} className="fs-5 mb-2">
        صورة للمنتج
      </div>

      <div className="mt-3" style={{ width: "60%" }}>
        <MultiImageInput
          images={images}
          setImages={setImages}
          allowCrop={false}
          max={5}
          theme={{
            background: "#ffffff",
            outlineColor: "gray",
          }}
        />

        <input
          type="text"
          className="input-add-brand"
          placeholder="اسم المنتج"
          value={prodName}
          onChange={(e) => setProdName(e.target.value)}
        />
        <div className="mt-3">
          <textarea
            cols="20"
            rows="5"
            placeholder="وصف المنتج"
            style={{ background: "#ffffff" }}
            value={prodDescription}
            onChange={(e) => setProdDescription(e.target.value)}
          />
        </div>
        <input
          type="text"
          className="input-add-brand mt-3"
          placeholder="السعر قبل الخصم"
          value={priceBefore}
          onChange={(e) => setPriceBefore(e.target.value)}
        />
        <input
          type="text"
          className="input-add-brand mt-3"
          placeholder="السعر بعد الخصم"
          value={priceAfter}
          onChange={(e) => setPriceAfter(e.target.value)}
        />
        <input
          type="text"
          className="input-add-brand mt-3"
          placeholder="الكمية المتاحة"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <select className="select-add-subcategory" onChange={onSelectCategory} value={catID}>
          <option value="0">اختر تصنيف رئيسي</option>
          {category.data
            ? category.data.map((item) => {
                return <option value={item._id}>{item.name}</option>;
              })
            : null}
        </select>

        <Multiselect
          className="mt-2 text-end"
          placeholder="التصنيف الفرعي"
          options={options}
          onSelect={onSelect}
          onRemove={onRemove}
          displayValue="name"
        />

        <select className="select-add-subcategory" onChange={onSelectBrand} value={brandID}>
          <option value="0">اختر ماركه</option>
          {brand.data
            ? brand.data.map((item) => {
                return <option value={item._id}>{item.name}</option>;
              })
            : null}
        </select>

        <div>
          <div className="mt-3" style={{ color: "gray" }}>
            الالوان المتاحه للمنتج
          </div>
          <div className="d-flex align-items-cente mt-2">
            {colors.length >= 1
              ? colors.map((item) => {
                  return (
                    <div
                      style={{ backgroundColor: item, cursor:"pointer" }}
                      className="color-product-admin"
                      onClick={() => handelOnRemove(item)}
                    ></div>
                  );
                })
              : null}

            <img
              alt=""
              src={add}
              style={{ width: "30px", height: "35px", cursor: "pointer" }}
              className="mx-1"
              onClick={handelClickAddColor}
            />
            {showColor ? (
              <CompactPicker
                onChangeComplete={(color) => handelChangeComplete(color)}
              />
            ) : null}
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button onClick={handelSubmit} className="btn-add-brand">حفظ التعديلات</button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};
