import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneOrder } from '../../redux/actions/orderAction'

export const useUserOneOrderHook = (id) => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)
  const [orderId, setOrderId] = useState([])
  const [user, setUser] = useState([])
  const [totalPrice, setTotalPrice] = useState([])
  const [item, setItem] = useState([])

  useEffect(() => {
    const run = async () => {
      setLoading(true)
      await dispatch(getOneOrder(id))
      setLoading(false)
    }
    run()
  },[])

  const oneOrder = useSelector(state => state.orderReducer.getOneOrder)

  useEffect(() => {
    if (loading === false){
      if (oneOrder.data) {
        setTotalPrice(oneOrder.data.totalOrderPrice)
        setOrderId(oneOrder.data.id)
        if (oneOrder.data.cartItems) {
          setItem(oneOrder.data)
        }
        if (oneOrder.data.user) {
          setUser(oneOrder.data.user)
        }
      }
    }
  },[loading])

  return [ orderId, user, totalPrice, item ]
}
