import React from "react";
import { Row } from "react-bootstrap";
import { useSideFilterSearchHook } from "../../hook/search/sideFilterSearchHook";

const SideFilter = () => {
  const [category, brand, clickCategory, clickBrand, clickPriceFrom, clickPriceTo] = useSideFilterSearchHook();

  let from = localStorage.getItem("priceFrom");
  let to = localStorage.getItem("priceTo");

  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">الفئة</div>
          <div className="d-flex mt-3">
            <input onChange={clickCategory} type="checkbox" value="0" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {category ? (
            category.map((item, index) => {
              return (
                <div key={index} className="d-flex mt-3">
                  <input onChange={clickCategory} type="checkbox" value={item._id} />
                  <div className="filter-sub me-2 ">{item.name}</div>
                </div>
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )}
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">الماركة</div>
          <div className="d-flex mt-3">
            <input onChange={clickBrand} type="checkbox" value="0" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {brand ? (
            brand.map((item, index) => {
              return (
                <div key={index} className="d-flex mt-3">
                  <input onChange={clickBrand} type="checkbox" value={item._id} />
                  <div className="filter-sub me-2 ">{item.name}</div>
                </div>
              );
            })
          ) : (
            <h4>لا يوجد ماركات</h4>
          )}
        </div>

        <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input onChange={clickPriceFrom} value={from} className="m-2 text-center input-filter" type="number" />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input onChange={clickPriceTo} value={to} className="m-2 text-center input-filter" type="number" />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
