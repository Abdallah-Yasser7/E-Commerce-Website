import React from "react";
import { NavFilter } from "../../components/products/NavFilter";
import { Container } from "react-bootstrap";
import { CardProductComponanet } from "../../components/products/CardProductComponanet";
import { RateContainer } from "../../components/Rate/RateContainer";
import { ProductCardContainer } from "../../components/products/productCardContainer";

export const ProductDetialsPage = () => {
  return (
    <div style={{ minHeight: "760px" }}>
      <NavFilter />
      <Container>
        <CardProductComponanet />
        <RateContainer/>
        <ProductCardContainer title="منتجات قد تعجبك"/>
      </Container>
    </div>
  );
};
