import React from 'react'
import { NavFilter } from './../../components/products/NavFilter';
import { Col, Container, Row } from 'react-bootstrap';
import { DropdownTitle } from '../../components/Uitily/DropdownTitle';
import SideFilter from './../../components/Uitily/SideFilter';
import { ProductCardContainer } from './../../components/products/productCardContainer';
import { PaginationComponent } from '../../components/Uitily/Pagination';
import { useSearchHomProductHook } from '../../hook/products/viewSearchProductHook';

export const ProductsPage = () => {

  const [items] = useSearchHomProductHook();
  return (
    <div style={{minHeight:"670px"}}>
      <NavFilter/>
      <Container>
        <DropdownTitle title="400 نتيجة بحث..."/>
        <Row>
          <Col sm="2" xs="2" >
            <SideFilter/>
          </Col>
          <Col sm="10" xs="10" >
            <ProductCardContainer products = {items}/>
          </Col>
        </Row>
        <PaginationComponent/>
      </Container>
    </div>
  )
}
