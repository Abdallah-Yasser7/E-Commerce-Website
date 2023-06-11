import React from "react";
import { Row } from "react-bootstrap";
import { BrandCard } from "./BrandCard";
import { Spinner } from "react-bootstrap";

export const BrandCardContainer = ({ brand, loading }) => {

  return (
    <div style={{minHeight:"670px"}}>
      <Row>
        {loading === false ? (
          brand.data.map((item) => (
            <BrandCard img={item.image} />
          ))
        ) : (
          <Spinner animation="border" variant="dark" className="Spinner" />
        )}
      </Row>
    </div>
  );
};
