import React from "react";
import { AdminOrderCard } from "./AdminOrderCard";
import { Row } from "react-bootstrap";
import { SubTitle } from "../Uitily/SubTitle";
import { PaginationComponent } from "../Uitily/Pagination";
import { UserAllOrderHook } from "../../hook/User/UserAllOrderHook";

export const AdminAllOrders = () => {
  const [orders, onpress] = UserAllOrderHook();
  return (
    <Row>
      <SubTitle title="ادارة جميع الطلبات" />
      {orders.results >= 1 ? (
        orders.data.map((item, index) => {
          return <AdminOrderCard key={index} item={item} />;
        })
      ) : (
        <h4>لا توجد طلبات</h4>
      )}
      {orders.results > 5 ? (
        <PaginationComponent
          onpress={onpress}
          pageCount={
            orders.paginationResult
              ? orders.paginationResult.numberOfPages || 0
              : null
          }
        />
      ) : null}{" "}
    </Row>
  );
};
