import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allUserCart } from '../../redux/actions/CartAction'

export const useGetAllUserCartHook = () => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)
  const [numOfItem, setNumOfItem] = useState(0)
  const [itemsCart, setItemsCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [cartId, setCartId] = useState(0)
  const [nameCoupon, setNameCoupon] = useState("")
  const [totalPriceAfterDiscount, setTotalPriceAfterDiscount] = useState(0)

  useEffect(() => {
    const run = async () => {
      setLoading(true)
      await dispatch(allUserCart())
      setLoading(false)
    }
    run()
  },[])

  const res = useSelector(state => state.CartReducer.allUserCart)

  useEffect(() => {
    if (loading === false) {
      // console.log(res);
      if (res) {
        setNumOfItem(res.numOfCartItems)
        setItemsCart(res.data.products)
        setTotalPrice(res.data.totalCartPrice)
        setCartId(res.data._id)
        if (res.data.coupon) {
          setNameCoupon(res.data.coupon)
        } else {
          setNameCoupon("")
        }
        if (res.data.totalAfterDiscount) {
          setTotalPriceAfterDiscount(res.data.totalAfterDiscount)
        } else {
          setTotalPriceAfterDiscount(0)
        }
      }
    }
  },[loading])

  return [ numOfItem, itemsCart, totalPrice, nameCoupon, totalPriceAfterDiscount, cartId]
}
