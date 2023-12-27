import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/actions/CartAction";
import { useEffect } from "react";
import notify from './../useNotifaction';

export const useAddProductToCartHook = (id, item) => {
  const dispatch = useDispatch();

  const [colorIndex, setColorIndex] = useState("");
  const [colorChecked, setColorChecked] = useState("");
  const [loading, setLoading] = useState(true);

  const colorClick = (index, color) => {
    setColorIndex(index);
    setColorChecked(color);
  };

  const handelClick = async () => {
    if (localStorage.getItem("user")) {
      if (item.availableColors.length >= 1) {
        if (colorChecked === "") {
          notify("اختر لون المنتج اولاّ","warn")
          return;
        }
      }
    }
    setLoading(true);
    await dispatch(
      addProductToCart({
        productId: id,
        color: colorChecked,
      })
    );
    setLoading(false);
  };

  const res = useSelector(state => state.CartReducer.addProductToCart)

  useEffect(() => {
    if (loading === false) {
      console.log(res);
      if (res.status === 200) {
        notify("تم اضافة المنتج الي العربه","success")
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      } else if (res.data.message === "Invalid Token. please login again") {
        notify("يجب تسجيل الدخول اولاّ","error")
      }
    }
  },[loading])

  return [colorIndex, colorChecked, colorClick, handelClick];
};
