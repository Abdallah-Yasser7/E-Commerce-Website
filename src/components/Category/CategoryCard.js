import React from 'react'
import { Col } from 'react-bootstrap'
import "../../styles/HomePage.css"
import { Link } from 'react-router-dom'

export const CategoryCard = ({id, background, img, title}) => {
  return (
    <Col 
    lg="2"
    md="4"
    sm="6"
    xs="6"
    className='my-4 d-flex justify-content-around pt-3'>
    <div style={{position: "relative"}}>
    <div style={{backgroundColor: `${background}`}} className='card-style'></div>
      <Link to = {`/products/category/${id}`} style={{textDecoration:"none"}}>
        <img alt='card img' src={img} className='img-card'/>
        <p style={{color:"gray"}} className='pt-4 text-center fw-bold'>{title}</p>
      </Link>
    </div>
    </Col>
  )
}
