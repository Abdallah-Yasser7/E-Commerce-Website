import React from "react";
import rate from "../../images/rate.png";
import "../../styles/Products.css";
import { RatePost } from "./RatePost";
import { Coments } from "./Coments";
import { PaginationComponent } from "../Uitily/Pagination";
import { useGetAllRateHook } from "../../hook/rate/getAllRateHook";
import { useParams } from "react-router-dom";

export const RateContainer = ({ rateAvg, rateQut }) => {
  const { id } = useParams();
  const [allRate, onPress] = useGetAllRateHook(id);

  return (
    <div className="parent-rate p-3 m-3">
      <div className="d-flex align-items-center">
        <div className="fw-bold fs-5">التقيمات</div>
        <img alt="" src={rate} className="img-rate" />
        <div style={{ color: "#ffc107" }} className="fw-bold">
          {rateAvg}
        </div>
        <div className="text-rate">({`${rateQut} تقيم`})</div>
      </div>
      <RatePost />
      {allRate.data
        ? allRate.data.map((item, index) => {
            return <Coments key={index} item={item} />;
          })
        : null}
      {allRate.paginationResult &&
      allRate.paginationResult.numberOfPages > 1 ? (
        <PaginationComponent
          onpress={onPress}
          pageCount={
            allRate.paginationResult
              ? allRate.paginationResult.numberOfPages
              : null
          }
        />
      ) : null}
    </div>
  );
};
