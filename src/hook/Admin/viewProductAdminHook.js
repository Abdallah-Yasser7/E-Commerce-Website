import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "../../redux/actions/productsAction";

export const useViewProductAdminHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct(12))
  },[dispatch])

  const products = useSelector(state => state.allProduct.allProduct)


  let items = [];
  if (products) {
    if (products.data) {
      items = products.data;
    }
  }

  let pagination = 0;
  if (products) {
    if (products.paginationResult) {
      if (products.paginationResult.numberOfPages) {
        pagination = products.paginationResult.numberOfPages;
      }
    }
  }

  const onpress = async (data) => {
    await dispatch(getAllProduct(12, data))
  }

  return [items, pagination, onpress]
}
