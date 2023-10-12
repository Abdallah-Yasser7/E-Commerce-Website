import { useState } from "react";
import notify from "../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { verifyPassword } from "../../redux/actions/authAction";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useVerifyPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = useState(true);

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onSubmit = async () => {
    if (code === "") {
      notify("من فضلك ادخل الكود", "error");
      return;
    }
    setSpinner(true);
    setLoading(true);
    await dispatch(verifyPassword({
        resetCode: code,
      })
    );
    setLoading(false);
    setSpinner(false);
  };

  const res = useSelector((state) => state.authReducer.verifyPassword);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        console.log(res.status);
        if (res.status === 200) {
          notify("الكود صحيح", "success");
          setTimeout(() => {
            navigate("/user/reset-password");
          }, 1000);
        }
        if (res.data.message === "Reset code is invalid or has expired") {
          notify("الكود خاطئ أو انتهت صلاحيته", "error");
        }
      }
    }
  }, [loading, res, navigate]);

  return [code, spinner, onChangeCode, onSubmit];
};
