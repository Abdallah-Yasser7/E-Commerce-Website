import { useState } from "react"
import notify from './../useNotifaction';
import { useDispatch, useSelector } from "react-redux";
import { createRate } from "../../redux/actions/rateAction";
import { useEffect } from "react";

export const useAddRateHook = (id) => {

  const dispatch = useDispatch();

  let user =""
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"))
  }

  const [rateText, setRateText] = useState("")
  const [rateStars, setRateStars] = useState("")
  const [loading, setLoading] = useState(true)

  const onChangeRateText = (e) => {
    setRateText(e.target.value)
  }

  const onChangeRateStars = (newValue) => {
    setRateStars(newValue)
  }

  const onSubmit = async () => {
    if (rateText === "") {
      notify("من فضلك اكتب تعليق","error")
      return
    }
    if (rateStars === "") {
      notify("من فضلك قيم المنتج","error")
      return
    }

    setLoading(true)
    await dispatch(createRate(id, {
      review: rateText,
      rating: rateStars
    }))
    setLoading(false)
  }

  const res = useSelector(state => state.rateReducer.createRate)

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.message === "You are not allowed to perform this action") {
          notify("غير مسموح للأدمن ان يقيم المنتجات","error")
        }
        if (res.status === 201) {
          notify("تم اضافة التعليق بنجاح","success")
          setTimeout(() => {
            window.location.reload()
          }, 1000);
        }
        if (res.data.errors && res.data.errors[0].msg === "You already added review on this product") {
          notify("بالفعل علقت علي هذا المنتج مسبقاّ","error")
        }
      }
    }
  }, [loading, res])

  return [user, rateText, onChangeRateText, rateStars, onChangeRateStars, onSubmit]
}
