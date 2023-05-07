import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { SubTitle } from '../Uitily/SubTitle'
import { BrandCard } from './BrandCard'
import brand1 from "../../images/brand1.png"
import brand2 from "../../images/brand2.png"
import brand3 from "../../images/brand3.png"

export const BrandFeature = ({btntitle, title}) => {
  return (
    <Container>
        <SubTitle btntitle={btntitle} title={title} />
        <Row>
          <BrandCard img={brand1}/>
          <BrandCard img={brand2}/>
          <BrandCard img={brand3}/>
          <BrandCard img={brand1}/>
          <BrandCard img={brand2}/>
          <BrandCard img={brand3}/>
        </Row>
    </Container>
  )
}
