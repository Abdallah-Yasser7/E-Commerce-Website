import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { SubTitle } from "../Uitily/SubTitle";
import { CategoryCard } from "../Category/CategoryCard";
import useHomeCategoryHook from "../../hook/category/HomeCategoryHook";

export const HomeCategory = () => {
  const [colors, category, loading] = useHomeCategoryHook();

  return (
    <Container>
      <SubTitle btntitle="المذيد" title="التصنيفات" path="allcategory" />
      <Row>
        {loading === false ? (
          category ? (
            category.data ? (
              category.data
                .slice(0, 6)
                .map((item, index) => (
                  <CategoryCard
                    id={item._id}
                    title={item.name}
                    img={item.image}
                    background={colors[index]}
                  />
                ))
            ) : (
              <h3>لا يوجد تصنيفات</h3>
            )
          ) : null
        ) : (
          <Spinner animation="border" variant="dark" className="Spinner" />
        )}
      </Row>
    </Container>
  );
};
