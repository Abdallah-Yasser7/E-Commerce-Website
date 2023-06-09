import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { CategoryCard } from "./CategoryCard";

export const CategoryCardContainer = ({loading, category}) => {
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];


  return (
    <Container>
      <Row>
        {loading === false ? (
          category.data ? (
            category.data.map((item, index) => (
              <CategoryCard
                title={item.name}
                img={item.image}
                background={colors[Math.trunc(Math.random() * 5) +1]}
              />
            ))
          ) : (
            <h3>لا يوجد تصنيفات</h3>
          )
        ) : (
          <Spinner animation="border" variant="dark" className="Spinner" />
        )}
      </Row>
    </Container>
  );
};
