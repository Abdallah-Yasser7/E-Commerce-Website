import React from "react";
import { SubTitle } from "../Uitily/SubTitle";
import { Row } from "react-bootstrap";
import { UserProductCard } from "../../pages/User/UserProductCard";

export const UserFavoriteProducts = () => {
  return (
    <div>
      <SubTitle title="قائمة المفضله" />
      <Row>
        <UserProductCard />
        <UserProductCard />
        <UserProductCard />
        <UserProductCard />
        <UserProductCard />
        <UserProductCard />
        <UserProductCard />
        <UserProductCard />
        <UserProductCard />
        <UserProductCard />
        <UserProductCard />
        <UserProductCard />
        <UserProductCard />
      </Row>
    </div>
  );
};
