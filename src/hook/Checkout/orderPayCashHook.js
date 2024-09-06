import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneUserAddress } from "../../redux/actions/userAddressAction";
import { createOrderCash } from "../../redux/actions/CheckoutAction";
import notify from './../useNotifaction';
import { useNavigate } from "react-router-dom";

export const useOrderPayCashHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addressId, setAddressId] = useState(0);
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCash, setLoadingCash] = useState(true);

  const onSelectAddress = (e) => {
    setAddressId(e.target.value);
  };

  useEffect(() => {
    if (addressId !== 0) {
      const run = async () => {
        setLoading(true);
        await dispatch(getOneUserAddress(addressId));
        setLoading(false);
      };
      run();
    }
  }, [addressId]);

  const resAddress = useSelector(
    (state) => state.userAddressReducer.getOneUserAddress
  );

  useEffect(() => {
    if (loading === false) {
      setAddress(resAddress.data);
    }
  }, [loading]);
  console.log(address);

  const handelClick = async () => {
    setLoadingCash(true)
    await dispatch(
      createOrderCash(id, {
        shippingAddress: {
          details: address.details,
          phone: address.phone,
          city: address.city,
          postalCode: "",
        },
      })
    );
    setLoadingCash(false)
  };

  const resOrder = useSelector(state => state.CheckoutReducer.createOrderCash)

  useEffect(() => {
    if (loadingCash === false) {
      console.log(resOrder.status);
      if (resOrder && resOrder.status === 201) {
        notify("تم عملية الشراء بنجاح","success")
        setTimeout(() => {
          navigate("/user/allorders")
        }, 1000);
      } else {
        notify("هناك مشكلة في عملية الشراء ","error")
      }
    }
  },[loadingCash])

  return [onSelectAddress, handelClick];
};
