import React from "react";
import { Row } from "react-bootstrap";
import { BrandCard } from "./BrandCard";
import brand1 from "../../images/brand1.png"
import brand2 from "../../images/brand2.png"
import brand3 from "../../images/brand3.png"

export const BrandCardContainer = () => {
  return (
    <div>
      <Row>
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
      </Row>
    </div>
  );
};
