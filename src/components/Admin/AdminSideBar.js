import React from "react";
import "../../styles/Admin.css";
import { Link } from "react-router-dom";

export const AdminSideBar = () => {
  return (
    <div className="parent-sidebar">
      <Link to="/admin/allorders" style={{textDecoration:"none", color:"black"}}>
        <div className="text-sidebar border-bottom">ادارة الطلبات</div>
      </Link>
      <Link to="/admin/allproducts" style={{textDecoration:"none", color:"black"}}>
        <div className="text-sidebar border-bottom">ادارة المنتجات</div>
      </Link>
      <Link to="/admin/addbrand" style={{textDecoration:"none", color:"black"}}>
        <div className="text-sidebar border-bottom">اضف ماركه</div>
      </Link>
      <Link to="/admin/addcategory" style={{textDecoration:"none", color:"black"}}>
        <div className="text-sidebar border-bottom">اضف تصنيف</div>
      </Link>
      <Link to="/admin/addsubcategory" style={{textDecoration:"none", color:"black"}}>
        <div className="text-sidebar border-bottom">اضف تصنيف فرعي</div>
      </Link>
      <Link to="/admin/addproduct" style={{textDecoration:"none", color:"black"}}>
        <div className="text-sidebar border-bottom">اضف منتج</div>
      </Link>
      <Link to="/admin/addCoupon" style={{textDecoration:"none", color:"black"}}>
        <div className="text-sidebar border-bottom">اضف كوبون</div>
      </Link>
      <Link to="/admin/allCoupon" style={{textDecoration:"none", color:"black"}}>
        <div className="text-sidebar border-bottom">ادارة الكوبونات</div>
      </Link>
    </div>
  );
};
