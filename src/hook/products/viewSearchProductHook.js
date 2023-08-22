import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "../../redux/actions/productsAction";
import { useState } from "react";

export const useSearchHomProductHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct())
  },[dispatch])

  const products = useSelector(state => state.allProduct.allProduct)

  const [items, setItems] = useState([]);
  
  if (products) {
    if (products.data) {
      setItems(products.data)
    }
  }

  return [items]
}
