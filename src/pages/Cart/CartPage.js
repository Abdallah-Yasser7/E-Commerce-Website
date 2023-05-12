import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SubTitle } from '../../components/Uitily/SubTitle'
import { CartItem } from '../../components/Cart/CartItem'
import { CartPayment } from '../../components/Cart/CartPayment'

export const CartPage = () => {
  return (
    <Container style={{minHeight:"670px"}} className=''>
      <SubTitle title="عربة التسوق"/>
      <Row className='d-flex justify-content-center'>
        <Col lg="9" xs="12" md="8">
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </Col>
        <Col lg="3" xs="12" md="4">
          <CartPayment/>
        </Col>
      </Row>
    </Container>
  )
}
