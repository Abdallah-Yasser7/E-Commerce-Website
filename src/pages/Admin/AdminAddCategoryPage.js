import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AdminSideBar } from "../../components/Admin/AdminSideBar";
import { AdminAddCategory } from "../../components/Admin/AdminAddCategory";
import { SubTitle } from "../../components/Uitily/SubTitle";
import useCategoryPageHook from "../../hook/category/CategoryPageHook";
import { PaginationComponent } from "../../components/Uitily/Pagination";
import { AdminCategoryCard } from "../../components/Admin/AdminCategoryCard";

export const AdminAddCategoryPage = () => {
  const [category, , pageCount, onpress] = useCategoryPageHook();

  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];

  return (
    <Container style={{ minHeight: "670px" }}>
      <Row className="py-3">
        <Col sm="3" xs="5" md="2" lg="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="7" md="10" lg="10">
          <AdminAddCategory />

          <SubTitle title="جميع التصنيفات"/>
          <Row className="py-3">
            {category ? (
              category.data ? (
                category.data.map((item, index) => {
                  return (
                    <AdminCategoryCard
                      key={index}
                      category={item}
                      background={colors[Math.trunc(Math.random() * 5) + 1]}
                    />
                  );
                })
              ) : null
            ) : (
              <h4>لا توجد تصنيفات الان</h4>
            )}
          </Row>
        </Col>
      </Row>
      {category ? (
        category.results > 12 ? (
          <PaginationComponent pageCount={pageCount} onpress={onpress} />
        ) : null
      ) : null}
    </Container>
  );
};
