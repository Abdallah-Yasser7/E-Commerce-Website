import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { UserSideBar } from '../../components/User/UserSideBar'
import { UserFavoriteProducts } from '../../components/User/UserFavoriteProducts'
import { PaginationComponent } from '../../components/Uitily/Pagination'

export const UserFavoriteProductsPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row className="py-3">
        <Col sm="3" xs="5" md="2" lg="2">
          <UserSideBar />
        </Col>
        <Col sm="9" xs="7" md="10" lg="10">
          <UserFavoriteProducts/>
        </Col>
      </Row>
      <PaginationComponent />
    </Container>
  )
}
