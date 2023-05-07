import React from 'react'
import { CategoryCardContainer } from '../../components/Category/CategoryCardContainer'
import { PaginationComponent } from "../../components/Uitily/Pagination"
import { SubTitle } from '../../components/Uitily/SubTitle'
import { Container } from 'react-bootstrap'

export const CategoryPage = () => {
  return (
    <Container>
      <SubTitle title="كل التصنيفات"/>
      <CategoryCardContainer/>
      <PaginationComponent/>
    </Container>
  )
}
