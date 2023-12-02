import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AdminSideBar } from "../../components/Admin/AdminSideBar";
import { AdminAllCoupon } from "../../components/Admin/AdminAllCoupon";
import { SubTitle } from "../../components/Uitily/SubTitle";
import { useAllCouponHook } from "../../hook/Coupon/allCouponHook";
import { PaginationComponent } from './../../components/Uitily/Pagination';

export const AdminAllCouponPage = () => {
  const [allCoupons, pageCount, onpress, allCouponResults] = useAllCouponHook()
  console.log(allCoupons);
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row className="py-3">
        <Col sm="3" xs="5" md="2" lg="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="7" md="10" lg="10">
          <SubTitle title="ادارة جميع الكوبونات" />
          {
            allCoupons ? (
              allCoupons.map((item, index) => {
                return <AdminAllCoupon key={index} coupon={item}/>
              })
            ) : <h4>لا توجد كوبونات الا</h4>
          }
        </Col>
      </Row>
      {
        allCouponResults.results > 5 ? (
          <PaginationComponent pageCount = {pageCount} onpress = {onpress}/>
        ) : null
      }
    </Container>
  );
};
