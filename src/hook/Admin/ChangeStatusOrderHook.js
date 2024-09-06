import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDeliverOrder, changePayOrder } from "../../redux/actions/orderAction";
import notify from './../useNotifaction';

export const useChangeStatusOrderHook = (id) => {
  const dispatch = useDispatch();

  const [pay, setPay] = useState("0")
  const [deliver, setDeliver] = useState("0")
  const [loadingPay, setLoadingPay] = useState(true)
  const [loadingDeliver, setLoadingDeliver] = useState(true)
  
  const onChangePay = (e) => {
    setPay(e.target.value)
  }

  const onChangeDeliver = (e) => {
    setDeliver(e.target.value)
  }

  const onClickPay = () => {
    if (pay === "true") {
      setLoadingPay(true)
      dispatch(changePayOrder(id))
      setLoadingPay(false)
    }
  }

  const onClickDeliver = () => {
    if (deliver === "true") {
      setLoadingDeliver(true)
      dispatch(changeDeliverOrder(id))
      setLoadingDeliver(false)
    }
  }

  const changePay = useSelector(state => state.orderReducer.changePayOrder)
  const changeDeliver = useSelector(state => state.orderReducer.changeDeliverOrder)

  useEffect(() => {
    if (loadingPay === false) {
      if (changePay.status === 200) {
        notify("تم تغير حالة الدفع بنجاح","success")
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      }
    }
  },[changePay])

  useEffect(() => {
    if (loadingDeliver === false) {
      if (changeDeliver.status === 200) {
        notify("تم تغير حالة التوصيل بنجاح","success")
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      }
    }
  },[changeDeliver])

  return [onClickPay, onChangePay, onClickDeliver, onChangeDeliver]
}
