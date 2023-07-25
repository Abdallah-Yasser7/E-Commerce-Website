import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "../../redux/actions/productsAction";

export const useViewHomProductHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct())
  },[dispatch])

  const products = useSelector(state => state.allProduct.allProduct)
  let items = [];
  
  if (products.data) {
    items = products.data.slice(0, 4);
  } else {
    items = [];
  }

  return [items]
}
