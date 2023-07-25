import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "../../redux/actions/productsAction";

export const useSearchHomProductHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct())
  },[dispatch])

  const products = useSelector(state => state.allProduct.allProduct)
  let items = [];
  
  if (products.data) {
    items = products.data;
  } else {
    items = [];
  }

  return [items]
}
