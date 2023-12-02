import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCoupon } from "../../redux/actions/couponAction"
import notify from './../useNotifaction';
import { useEffect } from "react";

export const useAddCouponHook = () => {
  const dispatch = useDispatch()

  const [couponName, setCouponName] = useState("")
  const [couponDate, setCouponDate] = useState("")
  const [couponDiscount, setCouponDiscount] = useState("")
  const [loading, setLoading] = useState(true)
  const [isPress, setIsPress] = useState(false)

  const onChangeName = (e) => {
    setCouponName(e.target.value)
  }

  const onChangeDate = (e) => {
    setCouponDate(e.target.value)
  }

  const onChangeDiscount = (e) => {
    setCouponDiscount(e.target.value)
  }

  const onSubmit = async () => {
    if (couponName === "") {
      notify("من فضلك ادخل اسم الكوبون","warn")
      return;
    }
    if (couponDate === "") {
      notify("من فضلك ادخل صلاحية الكوبون ","warn")
      return;
    }
    if (couponDiscount === "") {
      notify("من فضلك ادخل قيمة الكوبون ","warn")
      return;
    }
    setLoading(true)
    setIsPress(true)
    await dispatch(addCoupon({
      name: couponName,
      expire: couponDate,
      discount: couponDiscount
    }))
    setLoading(false)
  }

  const res = useSelector(state => state.couponReducer.addCoupon)

  useEffect(() => {
    if (loading === false) {
      console.log(res);
      if (res && res.status === 201) {
        notify("تم اضافة الكوبون بنجاح","success")
        setCouponName("")
        setCouponDate("")
        setCouponDiscount("")
      }
      if (res && res.status === 400) {
        notify("هذا الكوبون موجود من قبل اختر اسم اخر","error")
      }
    }
  },[loading])

  return [couponName, couponDate, couponDiscount, onChangeName, onChangeDate, onChangeDiscount, onSubmit, loading, isPress]
}
