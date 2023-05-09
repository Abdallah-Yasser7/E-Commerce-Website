import React from 'react'
import { Container } from 'react-bootstrap'
import "../../styles/Products.css"

export const NavFilter = () => {
  return (
    <div className='parent-nav-search'>
      <Container className='d-flex p-3 content'>
        <div>الكل</div>
        <div>الكترونيات</div>
        <div>ملابس</div>
        <div>كهربيه</div>
        <div>تخفيضات</div>
        <div>تخفيضات</div>
        <div>تخفيضات</div>
        <div>تخفيضات</div>
        <div>المذيد</div>
      </Container>
    </div>
  )
}
