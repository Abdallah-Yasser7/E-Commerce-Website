import React from 'react'
import { Container } from 'react-bootstrap'
import { SubTitle } from '../../components/Uitily/SubTitle'
import { BrandCardContainer } from '../../components/Brands/BrandCardContainer'
import { PaginationComponent } from '../../components/Uitily/Pagination'

export const BrandPage = () => {
  return (
    <Container>
      <SubTitle title="كل الماركات"/>
      <BrandCardContainer/>
      <PaginationComponent/>
    </Container>
  )
}
