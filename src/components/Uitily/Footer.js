import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../styles/HomePage.css"
import twi from "../../images/twitter.png"
import inst from "../../images/instagram.png"
import face from "../../images/facebook.png"
import phone from "../../images/phone.png"

export const Footer = () => {
  return (
    <div style={{backgroundColor: "white"}} className='py-3'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col sm="6" className='text-end d-flex footer-sec1'>
            <div className='px-2' style={{color: "gray"}}>الشروط والاحكام</div>
            <div className='px-2' style={{color: "gray"}}>سياسة الخصوصيه</div>
            <div className='px-2' style={{color: "gray"}}>اتصل بنا</div>
          </Col>
          <Col sm="6" className='text-start footer-sec2'>
            <img alt='' src={phone} className='icon-img'/>
            <span style={{color: "gray"}}>01016643078</span>
            <img alt='' src={face} className='icon-img'/>
            <img alt='' src={inst} className='icon-img'/>
            <img alt='' src={twi} className='icon-img'/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
