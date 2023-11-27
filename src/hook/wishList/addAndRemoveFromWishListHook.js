import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import favOff from "../../images/fav-off.png";
import favOn from "../../images/fav-on.png"
import { useEffect } from "react";
import { addProductToWishList, removeProductFromWishList } from "../../redux/actions/wishListAction";
import notify from "../useNotifaction";


export const useAddAndRemoveFromWishListHook = (products, favProd) => {
  const dispatch = useDispatch()

  const [loadingAdd, setLoadingAdd] = useState(true)
  const [loadingRemove, setLoadingRemove] = useState(true)

  const [iconImg, setIconImg] = useState(favOff)
  if (favProd) {
    var fav = favProd.some(item => item === products._id)
  }
  const [isFav, setIsFav] = useState(fav)

  useEffect(() => {
    if (favProd) {
      setIsFav(favProd.some(item => item === products._id))
    }
  },[favProd])

  const handelFav = () => {
    if (isFav) {
      removeFromWishList()
    } else {
      addToWishList()
    }
  }

  useEffect(() => {
    if (isFav === true) {
      setIconImg(favOn)
    } else {
      setIconImg(favOff)
    }
  },[isFav])


  const resAdd = useSelector(state => state.wishListReducer.addToWishList)

  const addToWishList = async () => {
    setIconImg(favOn)
    setIsFav(true)
    setLoadingAdd(true)
    await dispatch(addProductToWishList({
      productId: products._id
    }))
    setLoadingAdd(false)
  }
  
  useEffect(() => {
    if (loadingAdd === false){
      if (resAdd && resAdd.status === 200) {
        notify("تم الاضافه الي المفضله بنجاح","success")
      }
    }
  },[loadingAdd])

  const resRemove = useSelector(state => state.wishListReducer.removeFromWishList)

  const removeFromWishList = async () => {
    setIconImg(favOff)
    setIsFav(false)
    setLoadingRemove(true)
    console.log(products._id);
    await dispatch(removeProductFromWishList(products._id))
    setLoadingRemove(false)
  }

  useEffect(() => {
    if (loadingRemove === false) {
      if (resRemove && resRemove.status === "success") {
        notify("تم الازاله من المفضله بنجاح","warn")
      }
    }
  },[loadingRemove])


  return [iconImg, handelFav]
}
