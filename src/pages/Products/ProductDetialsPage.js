import React from "react";
import { NavFilter } from "../../components/products/NavFilter";
import { Container } from "react-bootstrap";
import { CardProductComponanet } from "../../components/products/CardProductComponanet";
import { RateContainer } from "../../components/Rate/RateContainer";
import { ProductCardContainer } from "../../components/products/productCardContainer";
import { useSearchHomProductHook } from "../../hook/products/viewSearchProductHook";
import { useParams } from "react-router-dom";

export const ProductDetialsPage = () => {

  const [items] = useSearchHomProductHook()

  const {id} = useParams();

  return (
    <div style={{ minHeight: "760px" }}>
      <NavFilter />
      <Container>
        <CardProductComponanet id = {id}/>
        <RateContainer/>
        <ProductCardContainer products={items} title="منتجات قد تعجبك"/>
      </Container>
    </div>
  );
};
