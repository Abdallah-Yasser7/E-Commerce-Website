import React from 'react'
import { SubTitle } from '../Uitily/SubTitle'
import "../../styles/User.css"
import { useUserEditAddressHook } from '../../hook/User/UserEditAddressHook'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export const UserEditAdress = () => {
  const {id} = useParams()
  const [alias, details, phone, city, onChangeAlias, onChangeDetails, onChangePhone, onChangeCity, handelClick] = useUserEditAddressHook(id)
  return (
    <div>
      <SubTitle title="تعديل العنوان"/>
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
          className="input-add-brand mt-3"
          placeholder="تسمية العنوان مثلا (المنزل - العمل )"
          value={alias}
          onChange={onChangeAlias}
        />
        <div className="mt-3">
          <textarea onChange={onChangeDetails} cols="20" rows="5" placeholder="العنوان بالتفصيل" value={details} />
        </div>
        <input
          type="text"
          className="input-add-brand mt-3"
          placeholder="رقم الهاتف"
          value={phone}
          onChange={onChangePhone}
        />
        <div className="d-flex justify-content-end">
          <button className="btn-add-brand" onClick={handelClick}>حفظ تعديل العنوان</button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
