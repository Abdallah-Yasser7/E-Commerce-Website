import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotifaction";
import { applyCoupon } from "../../redux/actions/CartAction";
import { useEffect } from "react";

export const useApplyCouponHook = () => {
  const dispatch = useDispatch();

  const [couponName, setCouponName] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeCoupon = (e) => {
    setCouponName(e)
  };

  const handelApply = async () => {
    if (couponName === "") {
      notify("من فضلك ادخل الكوبون", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      applyCoupon({
        couponName: couponName,
      })
    );
    setLoading(false);
  };

  const res = useSelector(state => state.CartReducer.applyCoupon)

  useEffect(() => {
    if (loading === false) {
      // console.log(res);
      if (res.status === 200) {
        notify("تم تطبيق الكوبون بنجاح","success")
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      } else {
        notify("هذا الكوبون غير صحيح او منتهي الصلاحيه","warn")
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      }
      setLoading(true)
    }
  },[loading])

  return [handelApply, couponName, onChangeCoupon];
};
