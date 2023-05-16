import React from 'react'
import { Link } from 'react-router-dom'

export const UserSideBar = () => {
  return (
    <div className="parent-sidebar">
      <Link to="/user/allorders" style={{textDecoration:"none", color:"black"}}>
        <div className="text-sidebar border-bottom">ادارة الطلبات</div>
      </Link>
      <Link to="/user/favoriteproducts" style={{textDecoration:"none", color:"black"}}>
      <div className="text-sidebar border-bottom">المنتجات المفضلة</div>
      </Link>
      <Link to="/user/alladress" style={{textDecoration:"none", color:"black"}}>
      <div className="text-sidebar border-bottom">العناوين الشخصيه</div>
      </Link>
      <Link to="/user/profile" style={{textDecoration:"none", color:"black"}}>
      <div className="text-sidebar border-bottom">الملف الشخصي</div>
      </Link>
    </div>
  )
}
