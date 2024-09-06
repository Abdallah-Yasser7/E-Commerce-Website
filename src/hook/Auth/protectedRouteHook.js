import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const UseProtectedRouteHook = () => {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")));
  const [isUser, setIsUser] = useState();
  const [isAdmin, setIsAdmin] = useState();

useEffect(() => {
  if (userData !== null) {
    if (userData.role === "user") {
      setIsUser(true);
      setIsAdmin(false);
    } else if (userData.role === "admin") {
      setIsUser(false);
      setIsAdmin(true);
    }
  } else {
    setIsUser(false);
    setIsAdmin(false);
  }
},[])

  return [isUser, isAdmin, userData];
};
