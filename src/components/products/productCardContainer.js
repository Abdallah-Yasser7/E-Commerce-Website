import React from "react";
import { Container, Row } from "react-bootstrap";
import { SubTitle } from "../Uitily/SubTitle";
import { ProductCard } from "./productCard";

export const ProductCardContainer = ({ title, btntitle , path, products }) => {
  return (
    <Container>
      <SubTitle btntitle={btntitle} title={title} path={path} />
      <Row>
        {
          products.map((item, index) => <ProductCard key={index} products = {item} />)
        }
      </Row>
    </Container>
  );
};
