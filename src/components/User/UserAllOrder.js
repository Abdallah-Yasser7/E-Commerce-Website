import React from 'react'
import { SubTitle } from '../Uitily/SubTitle'
import { UserAllOrderItem } from './UserAllOrderItem'

export const UserAllOrder = () => {
  return (
    <div>
      <SubTitle title="اهلا محمد علي"/>
      <UserAllOrderItem/>
      <UserAllOrderItem/>
      <UserAllOrderItem/>
    </div>
  )
}
