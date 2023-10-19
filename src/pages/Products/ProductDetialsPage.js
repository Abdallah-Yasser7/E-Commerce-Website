import React from "react";
import { NavFilter } from "../../components/products/NavFilter";
import { Container } from "react-bootstrap";
import { CardProductComponanet } from "../../components/products/CardProductComponanet";
import { RateContainer } from "../../components/Rate/RateContainer";
import { useParams } from "react-router-dom";
import { ProductCardContainer } from "../../components/products/productCardContainer";
import { useViewDetailsProductHook } from "../../hook/products/viewDetailsProductHook";

export const ProductDetialsPage = () => {
  const { id } = useParams();
  const [item, , , productLike] = useViewDetailsProductHook(id);
  let rateAvg = ""
  let rateQut = ""
  if (item) {
    rateAvg = item.ratingsAverage;
    rateQut = item.ratingsQuantity;
  }
  let prodLike = productLike.slice(0, 4);

  return (
    <div style={{ minHeight: "760px" }}>
      <NavFilter />
      <Container>
        <CardProductComponanet/>
        <RateContainer rateAvg={rateAvg} rateQut={rateQut}/>
        <ProductCardContainer products = {prodLike} title="منتجات قد تعجبك"/>
      </Container>
    </div>
  );
};
