import React from "react";
import { SubTitle } from "../Uitily/SubTitle";
import { UserAdressCard } from "./UserAdressCard";
import { Link } from "react-router-dom";
import { useUserAllAddressHook } from './../../hook/User/UserAllAddressHook';

export const UserAllAdress = () => {
  const [userAddresses] = useUserAllAddressHook()
  return (
    <div>
      <SubTitle title="دفتر العناويين" />
      {
        userAddresses.length !== 0 ? (
          userAddresses.map((item,index) => {
            return <UserAdressCard key={index} userAddress={item} />
          })
        ) : <h4>لا توجد عناوين الان</h4>
      }
      <div className="d-flex justify-content-center mt-4">
        <Link to="/user/add-address">
          <button className="btn-add-adress">اضافة عنوان جديد</button>
        </Link>
      </div>
    </div>
  );
};
