import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "./../../redux/actions/categoryAction";
import { getAllBrand } from "./../../redux/actions/brandAction";
import { useState } from "react";
import { useSearchHomProductHook } from "../products/viewSearchProductHook";

export const useSideFilterSearchHook = () => {

  const [, , , getProductFromSearch, ] = useSearchHomProductHook()
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    run();
  }, []);

  const allCategory = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.allBrand.brand);

  let category = [];
  if (allCategory) {
    category = allCategory.data;
  }

  let brand = [];
  if (allBrand) {
    brand = allBrand.data;
  }

  const [catChecked, setCatChecked] = useState([]);
  let queryCat = "";
  const clickCategory = async (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCatChecked([]);
    } else {
      if (e.target.checked === true) {
        setCatChecked([...catChecked, value]);
        console.log(catChecked);
      } else if (e.target.checked === false) {
        const newArray = catChecked.filter((e) => e !== value);
        setCatChecked(newArray);
      }
    }
  };
  
  useEffect(() => {
    queryCat = catChecked.map((id) => "category[in][]=" + id).join("&")
    localStorage.setItem("queryCat", queryCat)
    getProductFromSearch()
  },[catChecked])

  const [brandChecked, setBrandChecked] = useState([]);
  let queryBrand = "";
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = brandChecked.filter((e) => e !== value);
        setBrandChecked(newArray);
      }
    }
  };

  useEffect(() => {
    queryBrand = brandChecked.map((id) => "brand[in][]=" + id).join("&")
    localStorage.setItem("queryBrand", queryBrand)
    getProductFromSearch()
  },[brandChecked])

  const [from, setPriceFrom] = useState()
  const [to, setPriceTo] = useState()

  const clickPriceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value)
    setPriceFrom(e.target.value)
  }

  const clickPriceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value)
    setPriceTo(e.target.value)
  }

  useEffect(() => {
    setTimeout(() => {
      getProductFromSearch()
    }, 1000);
  },[from, to])

  return [category, brand, clickCategory, clickBrand, clickPriceFrom, clickPriceTo];
};
