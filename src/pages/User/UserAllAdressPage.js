import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { UserSideBar } from '../../components/User/UserSideBar'
import { UserAllAdress } from '../../components/User/UserAllAdress'

export const UserAllAdressPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row className="py-3">
        <Col sm="3" xs="4" md="2" lg="2">
          <UserSideBar />
        </Col>
        <Col sm="9" xs="8" md="10" lg="10">
          <UserAllAdress/>
        </Col>
      </Row>
    </Container>
  )
}
