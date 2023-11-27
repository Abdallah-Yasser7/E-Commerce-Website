import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getAllWishList } from "../../redux/actions/wishListAction";


export const useGetAllWishListHook = () => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)
  const [favProdID, setFavProdID] = useState()
  const [favProd, setFavProd] = useState()

  useEffect(() => {
    const run = async () => {
      setLoading(true)
      await dispatch(getAllWishList())
      setLoading(false)
    }
    run()
  },[])
  
  const res = useSelector(state => state.wishListReducer.getAllWishList)

  useEffect(() => {
    if (loading === false) {
      if (res.data.length >= 1) {
        setFavProdID(res.data.map((item) => item.id))
        setFavProd(res.data)
      } else {
        setFavProdID([])
        setFavProd([])
      }
    }
  },[loading])

  return [favProdID, favProd]
}
