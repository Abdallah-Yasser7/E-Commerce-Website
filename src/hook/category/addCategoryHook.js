import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotifaction";
import { createCategory } from "../../redux/actions/categoryAction";
import { useEffect } from "react";
import avatar from "../../images/avatar.png";



const useAddCategoryHook = () => {

  const dispatch = useDispatch();
  const res = useSelector((state) => state.allCategory.createCategory);

  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [urlSelected, setUrlSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onImgChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setUrlSelected(e.target.files[0]);
    }
  };

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const handelClick = async (e) => {
    e.preventDefault();

    if (name === "" || urlSelected === null) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }

    if (name.length < 3) {
      notify("يجب ان يكون الاسم مكون من 3 حروف او اكثر", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", urlSelected);

    setIsPress(true);
    await dispatch(createCategory(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setImg(avatar);
      setIsPress(false);
      setUrlSelected(null);
      setLoading(true);
    }
  }, [loading])

  useEffect(() => {
    if (loading === false) {
      if (res.status === 201) {
        notify("تم الاضافه بنجاح", "success");
        setTimeout(() => {
          window.location.reload()
        }, 500);
      } else {
        notify("هناك مشكله في عملية الاضافه", "error");
      }
    }
  })

  return [img, name, loading, isPress, onImgChange, handelClick, onNameChange];
}


export default useAddCategoryHook;