import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "../../redux/actions/productsAction";

export const useSearchHomProductHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct(2))
  },[dispatch])

  const products = useSelector(state => state.allProduct.allProduct)
  
  let items = [];
  if (products) {
    if (products.data) {
      items = products.data;
    }
  }

  let pagination = []
  if (products) {
    if (products.paginationResult) {
      if (products.paginationResult.numberOfPages) {
        pagination = products.paginationResult.numberOfPages;
      }
    }
  }

  const onpress = async (data) => {
    await dispatch(getAllProduct(2, data))
  }

  return [items, pagination, onpress]
}
