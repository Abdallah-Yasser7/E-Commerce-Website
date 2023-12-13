import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AdminSideBar } from "../../components/Admin/AdminSideBar";
import { AdminAddSubCategory } from "../../components/Admin/AdminAddSubCategory";
import { AdminAllSubCategory } from "../../components/Admin/AdminAllSubCategory";
import { useAdminAllSubCategoryHook } from "../../hook/subcategory/AdminAllSubCategoryHook";

export const AdminAddSubCategoryPage = () => {
  const [ , , allSubCategory] = useAdminAllSubCategoryHook()

  return (
    <Container style={{ minHeight: "670px" }}>
      <Row className="py-3">
        <Col sm="3" xs="5" md="2" lg="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="7" md="10" lg="10">
          <AdminAddSubCategory />
          {
            allSubCategory ? (
              allSubCategory.map((item, index) => {
                return <AdminAllSubCategory key={index} subCategory={item} />
              })
            ) : null
          }
        </Col>
      </Row>
    </Container>
  );
};
