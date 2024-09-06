import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrder } from '../../redux/actions/orderAction'

export const UserAllOrderHook = () => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      setLoading(true)
      await dispatch(getAllOrder(5))
      setLoading(false)
    }
    run()
  },[])

  const orders = useSelector(state => state.orderReducer.getAllOrder)

  useEffect(() => {
    if (loading === false){
      console.log(orders);
    }
  },[loading])

  const onpress = async (page) => {
    await dispatch(getAllOrder(5, page))
  }

  return [orders, onpress]
}
