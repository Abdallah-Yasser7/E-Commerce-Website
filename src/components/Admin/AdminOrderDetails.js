import React from "react";
import { SubTitle } from "../Uitily/SubTitle";
import "../../styles/Admin.css";
import { useParams } from "react-router-dom";
import { useUserOneOrderHook } from "../../hook/User/UserOneOrderHook";
import { UserAllOrderItem } from "../User/UserAllOrderItem";
import { useChangeStatusOrderHook } from "../../hook/Admin/ChangeStatusOrderHook";
import { ToastContainer } from "react-toastify";

export const AdminOrderDetails = () => {
  const { id } = useParams();
  const [orderId, user, , item] = useUserOneOrderHook(id);
  const [onClickPay, onChangePay, onClickDeliver, onChangeDeliver] = useChangeStatusOrderHook(id)

  const date = (e) => {
    const newDate = e.substring(8, 10) + "/" + e.substring(5, 7) + "/" + e.substring(0, 4)
    return newDate
  }
  let game = ""
  if (item && item.createdAt) {
    game = date(item.createdAt)
  }
  return (
    <div>
    <div className="d-flex justify-content-between">
      <SubTitle title={`تفاصيل الطلب رقم #${orderId}`} />
      <SubTitle title={` بتاريخ ${game}`} />
    </div>
      <UserAllOrderItem item={item}/>
      <div className="parent-detials-order">
        <div className="sub-title">تفاصيل العميل</div>
        <div className="my-2">
          <span>الاسم : </span>
          <span style={{ color: "gray" }}>{user.name}</span>
        </div>
        <div className="my-2">
          <span>رقم الهاتف : </span>
          <span style={{ color: "gray" }}>{user.phone}</span>
        </div>
        <div className="my-2">
          <span>الايميل : </span>
          <span style={{ color: "gray" }}>{user.email}</span>
        </div>
        <div className="border-bottom my-3"></div>
        <div className="text-center my-2">

          <label for="select">حالة الطلب : </label>

          <select id="select" className="select-details" onChange={onChangePay}>
            <option value="0">الدفع</option>
            <option value="true">تم الدفع</option>
          </select>
          <button onClick={onClickPay} className="btn-details">حفظ</button>

          <select id="select" className="select-details" onChange={onChangeDeliver}>
            <option value="0">التوصيل</option>
            <option value="true">تم التوصيل</option>
          </select>
          <button onClick={onClickDeliver} className="btn-details">حفظ</button>

        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};
