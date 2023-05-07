import React from "react";
import "../../styles/HomePage.css";
import { Link } from "react-router-dom";

export const SubTitle = ({ btntitle, title, path }) => {
  return (
    <div className="d-flex justify-content-between py-3">
      <div className="sub-title">{title}</div>
      {btntitle ? (
        <Link to={path} style={{textDecoration:"none", color:"black"}}>
          <div className="option">{btntitle}</div>
        </Link>
      ) : null}
    </div>
  );
};
