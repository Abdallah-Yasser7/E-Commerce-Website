import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllProductByBrand} from "../../redux/actions/productsAction";

export const useViewProductByBrandHook = (id) => {
  const dispatch = useDispatch();
  let limit = 8;

  const getProductByCategory = async () => {
    await dispatch(
      getAllProductByBrand(limit, id)
    );
  };

  useEffect(() => {
    getProductByCategory();
  }, []);

  const products = useSelector((state) => state.allProduct.allProductByBrand);

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

  const onpress = async (page) => {
    await dispatch(
      getAllProductByBrand(limit, id, page)
    );
  };

  return [items, pagination, onpress, numberOfResults];
};
