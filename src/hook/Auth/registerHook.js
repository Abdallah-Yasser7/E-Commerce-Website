import { useState } from "react"
import notify from './../useNotifaction';
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/actions/authAction";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRegisterHook = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(true)

  const handelUserName = (e) => {
    setUserName(e.target.value)
  }
  const handelPhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }
  const handelEmail = (e) => {
    setEmail(e.target.value)
  }
  const handelPassword = (e) => {
    setPassword(e.target.value)
  }
  const handelConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const validationValue = () => {
    if (userName === "") {
      notify("من فضلك ادخل الاسم","error")
      return;
    }
    if (phoneNumber.length < 11) {
      notify("من فضلك ادخل رقم الهاتف صحيح","error")
      return;
    }
    if (email === "") {
      notify("من فضلك ادخل الايميل","error")
      return;
    }
    if (password !== confirmPassword) {
      notify("كلمة السر غير متطابقه","error")
      return;
    }
  }

  const handelSubmit = async () => {
    validationValue();
    setLoading(true)
    await dispatch(createUser({
      name: userName,
      email: email,
      password: password,
      passwordConfirm: confirmPassword,
      phone: phoneNumber
    }))
    setLoading(false)
  }

  const res = useSelector(state => state.authReducer.createUser)

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token)
        }
        if (res.status === 201) {
          notify("تم تسجيل الحساب بنجاح","success")
        }
        if (res.data.errors) {
          if (res.data.errors[0].msg === "E-mail already in use") {
            notify("هذا الحساب مستخدم بالفعل","error")
          }
          if (res.data.errors[0].msg === "accept only egypt phone numbers") {
            notify("يجب ان يكون الرقم مصري مكون من 11 رقم","error")
          }
          if (res.data.errors[0].msg === "must be at least 6 chars") {
            notify("يجب ان يكون الرقم السري مكون من 6 ارقام او احرف","error")
          }
        }
        setTimeout(() => {
          navigate("/login")
        }, 1500);
        setUserName("")
        setPhoneNumber("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setLoading(true)
      }
    }
  },[loading, res, navigate])

  return [userName, phoneNumber, email, password, confirmPassword, handelUserName, handelPhoneNumber,
     handelEmail, handelPassword, handelConfirmPassword, handelSubmit];
}
