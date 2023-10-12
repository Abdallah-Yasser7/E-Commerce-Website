import { useState } from "react"
import notify from "../useNotifaction"
import { useDispatch, useSelector } from "react-redux"
import { forgetPassword } from "../../redux/actions/authAction"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useForgetPasswordHook = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [spinner, setSpinner] = useState(false)
  const [loading, setLoading] = useState(true)


  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onSubmit = async () => {
    if (email === "") {
      notify("من فضلك ادخل الايميل","error")
      return;
    }
    setSpinner(true)
    setLoading(true)
    await dispatch(forgetPassword({ email : email}))
    setLoading(false)
    setSpinner(false)
  }

  const res = useSelector(state => state.authReducer.forgetPassword)

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        console.log(res.status);
        if (res.status === 200) {
          notify("تم ارسال الكود بنجاح","success")
          localStorage.setItem("email-user", email)
          setTimeout(() => {
            navigate("/user/verify-password")
          }, 1000);
        }
        if (res.data.message === "There is no user with this email address abdallahyasser361066@gmail.com") {
          notify("لا يوجد مستخدم لديه عنوان البريد الإلكتروني هذا","error")
        }
      }
    }
  },[loading, res, navigate])

  return [email, spinner, onChangeEmail, onSubmit]
}
