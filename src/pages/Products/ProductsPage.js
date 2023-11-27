import React from 'react'
import { NavFilter } from './../../components/products/NavFilter';
import { Col, Container, Row } from 'react-bootstrap';
import { DropdownTitle } from '../../components/Uitily/DropdownTitle';
import SideFilter from './../../components/Uitily/SideFilter';
import { ProductCardContainer } from './../../components/products/productCardContainer';
import { PaginationComponent } from '../../components/Uitily/Pagination';
import { useSearchHomProductHook } from '../../hook/products/viewSearchProductHook';

export const ProductsPage = () => {

  const [items, pagination, onpress, getProductFromSearch, numberOfResults] = useSearchHomProductHook();

  if (pagination) {
    var pageCount = pagination;
  } else {
    pageCount = 0;
  }
  return (
    <div style={{minHeight:"670px"}}>
      <NavFilter/>
      <Container>
        <DropdownTitle onclick={getProductFromSearch} title= {`${numberOfResults} نتيجة بحث...`}/>
        <Row>
          <Col sm="2" xs="2" >
            <SideFilter/>
          </Col>
          <Col sm="10" xs="10" >
            <ProductCardContainer products = {items}/>
          </Col>
        </Row>
        <PaginationComponent pageCount = {pageCount} onpress = {onpress}/>
      </Container>
    </div>
  )
}
