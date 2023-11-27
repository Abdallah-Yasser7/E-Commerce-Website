import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductSearch,
} from "../../redux/actions/productsAction";

export const useSearchHomProductHook = () => {
  const dispatch = useDispatch();
  let limit = 8;

  let word = "";
  let queryCat = "";
  let queryBrand = "";
  let priceFrom = "";
  let priceTo = "";
  let priceFromString = "";
  let priceToString = "";

  const getStorage = () => {
    if (localStorage.getItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
    }
    if (localStorage.getItem("queryCat") != null) {
      queryCat = localStorage.getItem("queryCat");
    }
    if (localStorage.getItem("queryBrand") != null) {
      queryBrand = localStorage.getItem("queryBrand");
    }
    if (localStorage.getItem("priceFrom") != null) {
      priceFrom = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo") != null) {
      priceTo = localStorage.getItem("priceTo");
    }

    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = ""
    } else {
      priceFromString = `price[gt]=${priceFrom}`
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = ""
    } else {
      priceToString = `price[lte]=${priceTo}`
    }

  };

  const getProductFromSearch = async () => {
    sortData();
    getStorage();
    await dispatch(
      getProductSearch(
        `limit=${limit}&keyword=${word}&sort=${sort}&${queryCat}&${queryBrand}&${priceFromString}&${priceToString}`
      )
    );
  };

  useEffect(() => {
    getProductFromSearch();
  }, []);

  const products = useSelector((state) => state.allProduct.allProduct);

  let items = [];
  if (products) {
    if (products.data) {
      items = products.data;
    }
  }

  let numberOfResults = [];
  if (products) {
    numberOfResults = products.results;
  }

  let pagination = [];
  if (products) {
    if (products.paginationResult) {
      if (products.paginationResult.numberOfPages) {
        pagination = products.paginationResult.numberOfPages;
      }
    }
  }

  let sortType = "";
  let sort;
  const sortData = () => {
    if (localStorage.getItem("sortType") != null) {
      sortType = localStorage.getItem("sortType");
    }

    if (sortType === "السعر من الاقل للاعلي") {
      sort = "+price";
    }
    if (sortType === "") {
      sort = "";
    }
    if (sortType === "السعر من الاعلي للاقل") {
      sort = "-price";
    }
    if (sortType === "الاكثر مبيعاّ") {
      sort = "-sold";
    }
    if (sortType === "الاعلي تقيماّ") {
      sort = "-ratingsQuantity";
    }
  };

  const onpress = async (page) => {
    sortData();
    getStorage();
    await dispatch(
      getProductSearch(
        `limit=${limit}&page=${page}&keyword=${word}&sort=${sort}&${queryCat}&${queryBrand}&${priceFromString}&${priceToString}`
      )
    );
  };

  return [items, pagination, onpress, getProductFromSearch, numberOfResults];
};
