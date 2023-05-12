import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AdminSideBar } from '../../components/Admin/AdminSideBar'
import { AdminAllProducts } from '../../components/Admin/AdminAllProducts'
import { PaginationComponent } from '../../components/Uitily/Pagination'

export const AdminAllProductsPage = () => {
  return (
    <Container style={{minHeight:"670px"}}>
      <Row className='py-3'>
        <Col sm="3" xs="5" md="2" lg="2" >
          <AdminSideBar/>
        </Col>
        <Col sm="9" xs="7" md="10" lg="10">
          <AdminAllProducts/>
        </Col>
      </Row>
      <PaginationComponent/>
    </Container>
  )
}
