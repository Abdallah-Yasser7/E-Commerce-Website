import React from 'react'
import { UserAllOrderCard } from './UserAllOrderCard'
import "../../styles/User.css"


export const UserAllOrderItem = () => {
  return (
    <div className='parent-all-order-item'>
      <div className='fw-bold mb-1'>طلب رقم #5469</div>
      <UserAllOrderCard/>
      <UserAllOrderCard/>
      <div className='d-flex justify-content-between mt-2'>
        <div>الحالة <span style={{color:"gray"}}>قيد التفيذ</span></div>
        <div className='fw-bold'>4000 جنيه</div>
      </div>
    </div>
  )
}
