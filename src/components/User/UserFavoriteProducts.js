import React from "react";
import { Row } from "react-bootstrap";
import { UserProductCard } from "./UserProductCard";
import { useGetAllWishListHook } from "../../hook/wishList/getAllWishListHook";

export const UserFavoriteProducts = () => {
  const [favProdID, favProd] = useGetAllWishListHook();

  return (
    <div>
      <Row>
        {
          favProd && favProd.length >=1 ? (
              favProd.map((item, index) => <UserProductCard favProdID={favProdID} key={index} product={item}/>)
          ) : <h4>لا توجد منتجات مفضله الان</h4>
        }
      </Row>
    </div>
  );
};
