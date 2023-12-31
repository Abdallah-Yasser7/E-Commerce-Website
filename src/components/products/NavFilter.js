import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import "../../styles/Products.css"
import useHomeCategoryHook from '../../hook/category/HomeCategoryHook'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const NavFilter = () => {
  const [ , category] = useHomeCategoryHook()
  const [nameCat, setNameCat] = useState([])
  useEffect(() => {
    if (category && category.data) {
      setNameCat(category.data.slice(0, 7))
    }
  },[category])
  return (
    <div className='parent-nav-search'>
      <Container className='d-flex p-3 content'>
        {
          nameCat ? (
            nameCat.map((item, index) => {
              return (
                <Link to={`/products/category/${item._id}`} style={{textDecoration:"none"}}>
                  <div key={index}>{item.name}</div>
                </Link>
                )
            })
          ) : null
        }
        <Link to="/allcategory" style={{textDecoration:"none"}}>
          <div>المذيد</div>
        </Link>
      </Container>
    </div>
  )
}
