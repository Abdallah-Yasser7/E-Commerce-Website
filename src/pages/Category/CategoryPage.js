import React from "react";
import { CategoryCardContainer } from "../../components/Category/CategoryCardContainer";
import { PaginationComponent } from "../../components/Uitily/Pagination";
import { SubTitle } from "../../components/Uitily/SubTitle";
import { Container } from "react-bootstrap";
import useCategoryPageHook from "../../hook/category/CategoryPageHook";

export const CategoryPage = () => {

  const [category, loading, pageCount, onpress] = useCategoryPageHook()

  return (
    <Container style={{ minHeight: "760px" }}>
      <SubTitle title="كل التصنيفات" />
      <CategoryCardContainer loading={loading} category={category} />
      {pageCount > 1 ? (
        <PaginationComponent pageCount={pageCount} onpress={onpress} />
      ) : null}
    </Container>
  );
};
