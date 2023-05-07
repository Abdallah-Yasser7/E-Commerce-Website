import React from "react";
import { Container, Row } from "react-bootstrap";
import { SubTitle } from "../Uitily/SubTitle";
import { ProductCard } from "./productCard";

export const ProductCardContainer = ({ title, btntitle }) => {
  return (
    <Container>
      <SubTitle btntitle={btntitle} title={title} />
      <Row>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};
