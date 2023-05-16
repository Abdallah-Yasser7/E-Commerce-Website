import React from 'react'
import { SubTitle } from '../Uitily/SubTitle'

export const UserAddAdress = () => {
  return (
    <div>
      <SubTitle title="اضافة عنوان جديد"/>
      <div className="mt-3 parent-edit-add">
        <input
          type="text"
          className="input-add-brand"
          placeholder="تسمية العنوان مثلا (المنزل - العمل )"
        />
        <div className="mt-3">
          <textarea cols="20" rows="5" placeholder="العنوان بالتفصيل" />
        </div>
        <input
          type="text"
          className="input-add-brand mt-3"
          placeholder="رقم الهاتف"
        />
        <div className="d-flex justify-content-end">
          <button className="btn-add-brand">اضافة العنوان</button>
        </div>
      </div>
    </div>
  )
}
