import React from "react";
import { SubTitle } from "../Uitily/SubTitle";
import { UserAdressCard } from "./UserAdressCard";
import { Link } from "react-router-dom";

export const UserAllAdress = () => {
  return (
    <div>
      <SubTitle title="دفتر العناويين" />
      <UserAdressCard />
      <UserAdressCard />
      <UserAdressCard />
      <div className="d-flex justify-content-center mt-4">
        <Link to="/user/add-address">
          <button className="btn-add-adress">اضافة عنوان جديد</button>
        </Link>
      </div>
    </div>
  );
};
