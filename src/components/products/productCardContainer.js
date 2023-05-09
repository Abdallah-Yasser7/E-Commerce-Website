import React from "react";
import { Container, Row } from "react-bootstrap";
import { SubTitle } from "../Uitily/SubTitle";
import { ProductCard } from "./productCard";

export const ProductCardContainer = ({ title, btntitle , path }) => {
  return (
    <Container>
      <SubTitle btntitle={btntitle} title={title} path={path} />
      <Row>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};
