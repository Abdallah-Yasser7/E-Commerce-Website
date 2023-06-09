import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";

const useCategoryPageHook = () => {
  const dispatch = useDispatch();

  //when first load
  useEffect(() => {
    dispatch(getAllCategory(18));
  }, [dispatch]);

  //to get state from redux
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  //to get page count
  let pageCount = 0;
  if (category.paginationResult) {
    pageCount = category.paginationResult.numberOfPages;
  }

  //when press pagination
  const onpress = (num) => {
    dispatch(getAllCategory(18, num));
  };

  return [category, loading, pageCount, onpress];
}

export default useCategoryPageHook;