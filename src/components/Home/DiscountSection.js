import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import lab from "../../images/laptops.png"

export const DiscountSection = () => {
  return (
    <Container>
      <Row className='discount-backcolor'>
        <Col sm="6" className='text-discount'>خصم يصل حتي 30% علي اجهزة اللاب توب</Col>
        <Col sm="6"><img alt='' src={lab} className='img-lab-discount'/></Col>
      </Row>
    </Container>
  )
}
