import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct, getProductLike } from "../../redux/actions/productsAction";
import { getOneCategory } from "../../redux/actions/categoryAction";
import { getOneBrand } from "../../redux/actions/brandAction";

export const useViewDetailsProductHook = (ID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(ID))
  },[dispatch, ID])

  const oneProduct = useSelector(state => state.allProduct.oneProduct)

  const [item, setItem] = useState([]);
  const [productLike, setProductLike] = useState([]);


  useEffect(() => {
    if (oneProduct) {
      if (oneProduct.data) {
        setItem(oneProduct.data)
      } 
    }
  },[oneProduct])

  useEffect(() => {
    if (item.category) {
      dispatch(getOneCategory(item.category))
    }
    if (item.brand) {
      dispatch(getOneBrand(item.brand))
    }
    if (item.category) {
      dispatch(getProductLike(item.category))
    }
  },[dispatch, item])

  const Category = useSelector(state => state.allCategory.oneCategory)
  const Brand = useSelector(state => state.allBrand.oneBrand)
  const prodLike = useSelector(state => state.allProduct.productsLike)

  useEffect(() => {
    if (prodLike) {
      if (prodLike.data) {
        setProductLike(prodLike.data)
      } 
    }
  },[prodLike])


  let catName = [];
  if (Category) {
    if (Category.data) {
      catName = Category.data.name;
    } else {
      catName = [];
    }
  }

  let brandName = [];
  if (Brand) {
    if (Brand.data) {
      brandName = Brand.data.name;
    } else {
      brandName = [];
    }
  }


  return [item, catName, brandName, productLike]

}
