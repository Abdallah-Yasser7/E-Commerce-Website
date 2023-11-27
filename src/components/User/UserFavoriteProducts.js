import React from "react";
import { SubTitle } from "../Uitily/SubTitle";
import { Row } from "react-bootstrap";
import { UserProductCard } from "../../pages/User/UserProductCard";

export const UserFavoriteProducts = ({favProd}) => {
  return (
    <div>
      <SubTitle title="قائمة المفضله" />
      <Row>
        {
          favProd ? (
              favProd.map((item, index) => <UserProductCard key={index} product={item}/>)
          ) : null
        }
      </Row>
    </div>
  );
};
