import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import notify from './../useNotifaction';
import { createUserAddress } from "../../redux/actions/userAddressAction";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useUserAddAddressHook = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()

  const [alias, setAlias] = useState("")
  const [details, setDetails] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(true)

  const onChangeAlias = (e) => {
    setAlias(e.target.value)
  }

  const onChangeDetails = (e) => {
    setDetails(e.target.value)
  }

  const onChangePhone = (e) => {
    if (e.target.value.length <= 11) {
      setPhone(e.target.value)
    }
  }

  const onChangeCity = (e) => {
    setCity(e.target.value)
  }

  const handelClick = async () => {
    if (alias === "" || details === "" || phone === "" || city === "") {
      notify("من فضلك اكمل البيانات","warn")
      return;
    }

    if (phone.length < 11) {
      notify("ادخل رقم تيلفون صحيح مكون من 11 رقم","warn")
      return;
    }

    setLoading(true)
    await dispatch(createUserAddress({
      alias: alias,
      details: details,
      phone: phone,
      city: city,
      postalCode: ""
  }))
    setLoading(false)

  }

  const res = useSelector(state => state.userAddressReducer.createUserAddress)

  useEffect(() => {
    if (loading === false) {
      if (res.status === 200) {
        notify("تم اضافة العنوان بنجاح","success")
        setTimeout(() => {
          Navigate("/user/alladress")
        }, 1000);
      } else {
        notify("هتاك مشكلة في عملية الاضافه","error")
      }
    }
  },[loading])

  return [alias, details, phone, city, onChangeAlias, onChangeDetails, onChangePhone, onChangeCity, handelClick]
}
