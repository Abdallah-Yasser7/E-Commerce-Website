import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { SubTitle } from "../Uitily/SubTitle";
import { BrandCard } from "./BrandCard";
import useBrandFeatureHook from "../../hook/brand/BrandFeatureHook";

export const BrandFeature = ({ btntitle, title }) => {
  const [brand, loading] = useBrandFeatureHook();

  return (
    <Container>
      <SubTitle btntitle={btntitle} title={title} path="allbrand" />
      <Row>
        {loading === false ? (
          brand ? (
            brand.data
              .slice(0, 6)
              .map((item, index) => <BrandCard id={item._id} img={item.image} key={index} />)
          ) : null
        ) : (
          <Spinner animation="border" variant="dark" className="Spinner" />
        )}
      </Row>
    </Container>
  );
};
