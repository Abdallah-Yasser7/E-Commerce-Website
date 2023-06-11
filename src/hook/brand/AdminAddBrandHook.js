import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../images/avatar.png";
import notify from "../useNotifaction";
import { createBrand } from "../../redux/actions/brandAction";
import { useEffect } from "react";


export const useAdminAddBrandHook = () => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.allBrand.brand);
  console.log(res.status);

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

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", urlSelected);

    setIsPress(true);
    await dispatch(createBrand(formData));
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
      } else {
        notify("هناك مشكله في عملية الاضافه", "error");
      }
    }
  })

  return [img, name, loading, isPress, onImgChange, handelClick, onNameChange];
}
