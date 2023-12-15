import React from 'react'
import { SubTitle } from '../Uitily/SubTitle'
import { useUserAddAddressHook } from '../../hook/User/UserAddAddressHook'
import { ToastContainer } from 'react-toastify'

export const UserAddAdress = () => {
  const [alias, details, phone, city, onChangeAlias, onChangeDetails, onChangePhone, onChangeCity, handelClick] = useUserAddAddressHook()
  return (
    <div>
      <SubTitle title="اضافة عنوان جديد"/>
      <div className="mt-3 parent-edit-add">
        <input
          type="text"
          className="input-add-brand"
          placeholder="المدينه"
          value={city}
          onChange={onChangeCity}
        />
        <input
          type="text"
          className="input-add-brand my-3"
          placeholder="تسمية العنوان مثلا (المنزل - العمل )"
          value={alias}
          onChange={onChangeAlias}
        />
        <div>
          <textarea value={details} onChange={onChangeDetails} cols="20" rows="5" placeholder="العنوان بالتفصيل" />
        </div>
        <input
          type="text"
          className="input-add-brand mt-3"
          placeholder="رقم الهاتف"
          value={phone}
          onChange={onChangePhone}
        />
        <div className="d-flex justify-content-end">
          <button onClick={handelClick} className="btn-add-brand">اضافة العنوان</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
