import React from 'react'
import { AdminProductCard } from './AdminProductCard'
import { Row } from 'react-bootstrap'
import { SubTitle } from '../Uitily/SubTitle'

export const AdminAllProducts = ({items}) => {

  return (
    <Row className='d-flex'>
    <SubTitle title="ادارة جميع المنتجات"/>
      {
        items ? (
          items.map((item, index) => <AdminProductCard key={index} item = {item}/>)
        ) : <h4>لا يوجد منجات حتي الان</h4>
      }
    </Row>
  )
}
