import React from 'react'
import { SubTitle } from '../Uitily/SubTitle'
import "../../styles/User.css"

export const UserEditAdress = () => {
  return (
    <div>
      <SubTitle title="تعديل العنوان"/>
      <div className="mt-3 parent-edit-add">
        <input
          type="text"
          className="input-add-brand"
          placeholder="تسمية العنوان مثلا (المنزل - العمل )"
          value="المنزل"
        />
        <div className="mt-3">
          <textarea cols="20" rows="5" placeholder="العنوان بالتفصيل" value="القاهرة 6 اكتوبر" />
        </div>
        <input
          type="text"
          className="input-add-brand mt-3"
          placeholder="رقم الهاتف"
          value="01016643078"
        />
        <div className="d-flex justify-content-end">
          <button className="btn-add-brand">حفظ تعديل العنوان</button>
        </div>
      </div>
    </div>
  )
}
