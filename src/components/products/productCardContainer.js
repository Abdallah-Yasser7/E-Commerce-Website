import React from "react";
import { Container, Row } from "react-bootstrap";
import { SubTitle } from "../Uitily/SubTitle";
import { ProductCard } from "./productCard";
import { useGetAllWishListHook } from "../../hook/wishList/getAllWishListHook";


export const ProductCardContainer = ({ title, btntitle , path, products }) => {

  const [ favProdID ] = useGetAllWishListHook()
  return (
    <Container>
      <SubTitle btntitle={btntitle} title={title} path={path} />
      <Row>
        {
          products ? (
            products.map((item, index) => <ProductCard favProd={favProdID} key={index} products = {item} />)
          ) : null
        }
      </Row>
    </Container>
  );
};
