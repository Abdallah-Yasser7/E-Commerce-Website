import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCoupon, getOneCoupon, updateCoupon } from "../../redux/actions/couponAction"
import notify from './../useNotifaction';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useEditCouponHook = (id) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formatData = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  useEffect(() => {
    const run = async () => {
      await dispatch(getOneCoupon(id))
    }
    run()
  },[])

  const oneCoupon = useSelector(state => state.couponReducer.oneCoupon)

  useEffect(() => {
    if (oneCoupon.data) {
      console.log(oneCoupon.data);
      setCouponName(oneCoupon.data.name)
      setCouponDate(formatData(oneCoupon.data.expire))
      setCouponDiscount(oneCoupon.data.discount)
    }
  },[oneCoupon])

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
    await dispatch(updateCoupon(id,{
      name: couponName,
      expire: couponDate,
      discount: couponDiscount
    }))
    setLoading(false)
  }

  const res = useSelector(state => state.couponReducer.updateCoupon)

  useEffect(() => {
    if (loading === false) {
      console.log(res);
      if (res && res.status === 200) {
        notify("تم تعديل الكوبون بنجاح","success")
        setTimeout(() => {
          navigate("/admin/allCoupon")
        }, 1000);
      } else {
        notify("هناك مشكله في عملية التعديل","error")
      }
    }
  },[loading])

  return [couponName, couponDate, couponDiscount, onChangeName, onChangeDate, onChangeDiscount, onSubmit, loading, isPress]
}
