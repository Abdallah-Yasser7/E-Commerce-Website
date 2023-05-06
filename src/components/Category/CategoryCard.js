import React from 'react'
import { Col } from 'react-bootstrap'
import "../../styles/HomePage.css"

export const CategoryCard = ({background, img, title}) => {
  return (
    <Col 
    lg="2"
    md="4"
    sm="6"
    xs="6"
    className='my-4 d-flex justify-content-around pt-3'>
    <div style={{position: "relative"}}>
    <div style={{backgroundColor: `${background}`}} className='card-style'></div>
      <img alt='card img' src={img} className='img-card'/>
      <p className='pt-4'>{title}</p>
    </div>
    </Col>
  )
}
