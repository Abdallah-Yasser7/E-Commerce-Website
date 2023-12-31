import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";

const useHomeCategoryHook = () => {
    const colors = [
      "#FFD3E8",
      "#F4DBA5",
      "#55CFDF",
      "#FF6262",
      "#0034FF",
      "#FFD3E8",
    ];
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllCategory());
    },[]);
  
    const category = useSelector((state) => state.allCategory.category);
    const loading = useSelector((state) => state.allCategory.loading);

    return [colors, category, loading];
}

export default useHomeCategoryHook;
