import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductGallery } from './ProductGallery'
import { ProductDetails } from './ProductDetails'

export const CardProductComponanet = ({id}) => {
  return (
    <div>
      <Container>
        <Row className='p-3'>
          <Col lg="4" md="5" xs="12" sm="12">
            <ProductGallery id = {id}/>
          </Col>
          <Col lg="8" md="7" xs="12" sm="12">
            <ProductDetails id = {id}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
