import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { useState } from "react";
import notify from "../useNotifaction";
import { createSubCategory } from "../../redux/actions/subCategoryAction";

export const useAdminAddSubCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكله في الاتصال بالانترنت", "warn");
      return;
    }

    dispatch(getAllCategory());
  }, [dispatch]);

  const category = useSelector((state) => state.allCategory.category);
  const subCategory = useSelector((state) => state.subCategory.createSubCategory);

  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);


  const handelChangeID = (e) => {
    // console.log(e.target.value);
    setId(e.target.value);
  };

  const handelChangeName = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handelClick = async (e) => {

    if (!navigator.onLine) {
      notify("هناك مشكله في الاتصال بالانترنت", "warn");
      return;
    }

    e.preventDefault();
    if (name === "") {
      notify("من فضلك ادخل اسم للتصنيف", "warn");
      return;
    }

    if (id === "0") {
      notify("من فضلك اختر تصنيف", "warn");
      return;
    }

    const data = {
      name: name,
      category: id,
    };

    setLoading(true);
    await dispatch(createSubCategory(data));
    setLoading(false);
  };


  useEffect(() => {
    if (loading === false) {
      setName("");
      setId("0");
      if (subCategory.status === 201) {
        notify("تم الاضافه بنجاح", "success");
      } else if (
        subCategory === "ErrorAxiosError: Request failed with status code 400"
      ) {
        notify("هذا الاسم مكرر من فضلك ادخل اسم اخر", "warn");
      } else {
        notify("هناك مشكله في عملية الاضافه", "warn");
      }
      // dispatch(getAllCategory());
      setLoading(true);
    }
  },[subCategory, loading, category, dispatch]);
  
  return [id, name, category, handelChangeID, handelClick, handelChangeName]
}
