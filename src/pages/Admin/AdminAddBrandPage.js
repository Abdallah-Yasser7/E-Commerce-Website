import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AdminSideBar } from "../../components/Admin/AdminSideBar";
import { AdminAddBrand } from "../../components/Admin/AdminAddBrand";
import { useAllBrandHook } from "../../hook/brand/allBrandHook";
import { AdminBrandCard } from "../../components/Admin/AdminBrandCard";
import { SubTitle } from "../../components/Uitily/SubTitle";
import { PaginationComponent } from "../../components/Uitily/Pagination";

export const AdminAddBrandPage = () => {
  const [allBrand, pageCount, onpress, allBrandResults] = useAllBrandHook();

  return (
    <Container style={{ minHeight: "670px" }}>
      <Row className="py-3">
        <Col sm="3" xs="5" md="2" lg="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="7" md="10" lg="10">
          <AdminAddBrand />

          <SubTitle title="جميع الماركات" />

          <Row>
            {allBrand ? (
              allBrand.map((item, index) => {
                return <AdminBrandCard key={index} brand={item} />;
              })
            ) : (
              <h4>لا توجد ماركات الان</h4>
            )}
          </Row>
        </Col>
      </Row>
      {allBrandResults.results > 8 ? (
        <PaginationComponent pageCount={pageCount} onpress={onpress} />
      ) : null}
    </Container>
  );
};
