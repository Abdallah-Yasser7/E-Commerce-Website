import { useState } from "react"
import notify from './../useNotifaction';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/authAction";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginHook = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(true)
  const [spinner, setSpinner] = useState(false)

  const handelEmail = (e) => {
    setEmail(e.target.value)
  }
  const handelPassword = (e) => {
    setPassword(e.target.value)
  }

  const validationValue = () => {
    if (email === "") {
      notify("من فضلك ادخل الايميل","error")
      return;
    }
    if (password === "") {
      notify("من فضلك ادخل الرقم السري","error")
      return;
    }
  }

  const handelSubmit = async () => {
    validationValue();
    setLoading(true)
    setSpinner(true)
    await dispatch(loginUser({
      email: email,
      password: password,
    }))
    setLoading(false)
    setSpinner(false)
  }

  const res = useSelector(state => state.authReducer.loginUser)

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.status === 200) {
          notify("تم الدخول بنجاح","success")
          setTimeout(() => {
            navigate("/")
          }, 1500);
        }
        if (res.data.token) {
          localStorage.setItem("token", res.data.token)
        } else {
          localStorage.removeItem("token")
        }
        if (res.data.message) {
          if (res.data.message === "Incorrect email or password") {
            localStorage.removeItem("token")
            notify("هناك خطأ في كلمة المرور او الايميل","error")
          }
        }
        setEmail("")
        setPassword("")
        setLoading(true)
      }
    }
  },[loading, res, navigate])

  return [email, password, handelEmail, handelPassword, handelSubmit, spinner];
}
