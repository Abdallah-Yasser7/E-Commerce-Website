import { useState } from "react";
import notify from "../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/actions/authAction";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useResetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = useState(true);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = async () => {
    if (password === "") {
      notify("من فضلك ادخل الرقم السري الجديد", "error");
      return;
    }
    if (password !== confirmPassword) {
      notify("كلمة السر غير متطابقه", "error");
      return;
    }
    setSpinner(true);
    setLoading(true);
    await dispatch(
      resetPassword({
        email: localStorage.getItem("email-user"),
        newPassword: password,
      })
    );
    setLoading(false);
    setSpinner(false);
  };

  const res = useSelector((state) => state.authReducer.resetPassword);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        console.log(res.status);
        if (res.status === 200) {
          notify("تم تغير كلمة السر بنجاح", "success");
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }
      }
    }
  }, [loading, res, navigate]);

  return [
    password,
    confirmPassword,
    spinner,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  ];
};
