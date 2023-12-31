import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { ProductCardContainer } from './../../components/products/productCardContainer';
import { PaginationComponent } from '../../components/Uitily/Pagination';
import { useParams } from 'react-router-dom';
import { useViewProductByBrandHook } from '../../hook/products/viewProductByBrandHook';

export const ProductsByBrandPage = () => {
  const {id} = useParams()

  const [items, pagination, onpress, numberOfResults] = useViewProductByBrandHook(id);

  console.log(items);
  if (pagination) {
    var pageCount = pagination;
  } else {
    pageCount = 0;
  }
  return (
    <div style={{minHeight:"670px"}}>
      <Container>
        <Row>
        {
          items.length >= 1 ? (
            <ProductCardContainer products = {items}/>
          ) : <h4>لا توجد منتاجات الان</h4>
        }
        </Row>
        {
          numberOfResults > 8 ? (
            <PaginationComponent pageCount = {pageCount} onpress = {onpress}/>
          ) : null
        }
      </Container>
    </div>
  )
}
