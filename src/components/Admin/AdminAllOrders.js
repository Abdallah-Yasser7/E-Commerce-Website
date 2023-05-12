import React from 'react'
import { AdminOrderCard } from './AdminOrderCard'
import { Row } from 'react-bootstrap'
import { SubTitle } from '../Uitily/SubTitle'

export const AdminAllOrders = () => {
  return (
    <Row>
    <SubTitle title="ادارة جميع الطلبات"/>
      <AdminOrderCard/>
      <AdminOrderCard/>
      <AdminOrderCard/>
      <AdminOrderCard/>
      <AdminOrderCard/>
      <AdminOrderCard/>
      <AdminOrderCard/>
      <AdminOrderCard/>
    </Row>
  )
}
