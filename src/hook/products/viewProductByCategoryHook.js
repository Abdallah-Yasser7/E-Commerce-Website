import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllProductByCategory} from "../../redux/actions/productsAction";

export const useViewProductByCategoryHook = (id) => {
  const dispatch = useDispatch();
  let limit = 8;

  const getProductByCategory = async () => {
    await dispatch(
      getAllProductByCategory(limit, id)
    );
  };

  useEffect(() => {
    getProductByCategory();
  }, []);

  const products = useSelector((state) => state.allProduct.allProductByCategory);

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
      getAllProductByCategory(limit, id, page)
    );
  };

  return [items, pagination, onpress, numberOfResults];
};
