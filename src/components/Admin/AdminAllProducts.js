import React from 'react'
import { AdminProductCard } from './AdminProductCard'
import { Row } from 'react-bootstrap'
import { SubTitle } from '../Uitily/SubTitle'

export const AdminAllProducts = () => {
  return (
    <Row className='d-flex'>
    <SubTitle title="ادارة جميع المنتجات"/>
      <AdminProductCard/>
      <AdminProductCard/>
      <AdminProductCard/>
      <AdminProductCard/>
      <AdminProductCard/>
      <AdminProductCard/>
      <AdminProductCard/>
      <AdminProductCard/>
      <AdminProductCard/>
      <AdminProductCard/>
      <AdminProductCard/>
    </Row>
  )
}
