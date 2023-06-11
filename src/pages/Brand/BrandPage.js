import React from 'react'
import { Container } from 'react-bootstrap'
import { SubTitle } from '../../components/Uitily/SubTitle'
import { BrandCardContainer } from '../../components/Brands/BrandCardContainer'
import { PaginationComponent } from '../../components/Uitily/Pagination'
import { useBrandCardContainerHook } from '../../hook/brand/BrandPageHook'

export const BrandPage = () => {

  const [brand, loading, pageCount, onpress] = useBrandCardContainerHook();

  return (
    <Container>
      <SubTitle title="كل الماركات"/>
      <BrandCardContainer brand={brand} loading={loading}/>
      <PaginationComponent pageCount={pageCount} onpress={onpress}/>
    </Container>
  )
}
