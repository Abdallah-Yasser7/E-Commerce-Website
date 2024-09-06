import React from "react";
import { SubTitle } from "../Uitily/SubTitle";
import { UserAllOrderItem } from "./UserAllOrderItem";
import { UserAllOrderHook } from "./../../hook/User/UserAllOrderHook";
import { PaginationComponent } from "../Uitily/Pagination";
import { Row } from "react-bootstrap";

export const UserAllOrder = () => {
  const [orders, onpress] = UserAllOrderHook();
  console.log(orders);
  return (
    <div>
      <SubTitle title={`عدد الطلبات #${orders.results}`} />
      <Row>
        {orders.results >= 1 ? (
          orders.data.map((item, index) => {
            return <UserAllOrderItem key={index} item={item} />;
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
        ) : null}
      </Row>
    </div>
  );
};
