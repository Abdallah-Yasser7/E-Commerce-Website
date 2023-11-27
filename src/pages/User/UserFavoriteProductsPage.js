import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserSideBar } from "../../components/User/UserSideBar";
import { UserFavoriteProducts } from "../../components/User/UserFavoriteProducts";
import { useGetAllWishListHook } from "../../hook/wishList/getAllWishListHook";
import { ProductCardContainer } from "../../components/products/productCardContainer";
import { SubTitle } from "../../components/Uitily/SubTitle";

export const UserFavoriteProductsPage = () => {
  const [, favProd] = useGetAllWishListHook();
  console.log(favProd);
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row className="py-3">
        <Col sm="3" xs="5" md="2" lg="2">
          <UserSideBar />
        </Col>
        <Col sm="9" xs="7" md="10" lg="10">
          <SubTitle title="قائمة المفضله" />
          {favProd && favProd.length >= 1 ? (
            <ProductCardContainer products={favProd} />
          ) : (
            <h4>لا توجد منتجات مفضله الان</h4>
          )}
        </Col>
      </Row>
    </Container>
  );
};
