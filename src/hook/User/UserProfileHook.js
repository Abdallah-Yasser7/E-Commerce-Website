import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserData,
  updateUserPassword,
} from "../../redux/actions/authAction";
import { useEffect } from "react";
import notify from "./../useNotifaction";
import { useNavigate } from "react-router-dom";

export const UserProfileHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = [];
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [loading, setLoading] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelUpdate = async () => {
    let body;
    if (user.email === email) {
      body = {
        name: name,
        phone: phone,
      };
    } else {
      body = {
        name: name,
        email: email,
        phone: phone,
      };
    }
    setLoading(true);
    await dispatch(updateUserData(body));
    setLoading(false);
    setShow(false);
  };

  const res = useSelector((state) => state.authReducer.updateUserData);

  useEffect(() => {
    if (loading === false) {
      if (res.status === 200) {
        notify("تم التعديل بنجاح", "success");
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else if (res.data.errors[0].msg === "E-mail already in use") {
        notify("هذا الايميل مستخدم بالفعل", "error");
      }
    }
  }, [loading]);

  // section password

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loadingPass, setLoadingPass] = useState(true);

  const onChangeCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  };

  const onChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handelClick = async () => {
    if (
      currentPassword === "" ||
      newPassword === "" ||
      passwordConfirm === ""
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    setLoadingPass(true);
    await dispatch(
      updateUserPassword({
        currentPassword: currentPassword,
        password: newPassword,
        passwordConfirm: passwordConfirm,
      })
    );
    setLoadingPass(false);
  };

  const resPass = useSelector((state) => state.authReducer.updateUserPassword);

  useEffect(() => {
    if (loadingPass === false) {
      console.log(resPass);
      if (resPass.status === 200) {
        notify("تم تغير كلمة المرور بنجاح", "success");
        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
          window.location.reload();
        }, 1000);
      } else if (resPass.data.errors[0].msg === "Incorrect current password") {
        notify("كلمة المرور غير صحيحه", "error");
      } else if (
        resPass.data.errors[0].msg === "Password confirmation is incorrect"
      ) {
        notify("كلمة المرور الجديده غير متطابقه", "error");
      }
    }
  }, [loadingPass]);

  return [
    user,
    show,
    handleClose,
    handleShow,
    handelUpdate,
    name,
    onChangeName,
    phone,
    onChangePhone,
    email,
    onChangeEmail,
    currentPassword,
    onChangeCurrentPassword,
    newPassword,
    onChangeNewPassword,
    passwordConfirm,
    onChangePasswordConfirm,
    handelClick,
  ];
};
