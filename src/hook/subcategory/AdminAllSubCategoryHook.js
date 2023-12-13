import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import notify from "../useNotifaction";
import {
  deleteSubCategory,
  getSubCategory,
  updateSubCategory,
} from "../../redux/actions/subCategoryAction";

export const useAdminAllSubCategoryHook = (id, name) => {
  const dispatch = useDispatch();

  const [Id, setId] = useState("0");
  const [allSubCategory, setAllSubCategory] = useState([]);

  const handelChange = async (e) => {
    setId(e.target.value);
    if (e.target.value !== 0) {
      await dispatch(getSubCategory(e.target.value));
    }
  };

  const subCat = useSelector((state) => state.subCategory.subCategory);

  useEffect(() => {
    if (Id !== 0) {
      if (subCat) {
        if (subCat.data) {
          setAllSubCategory(subCat.data);
        }
      }
    }
  }, [subCat, Id]);

  // section delete

  const [showDelete, setShowDelete] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(true);
  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);
  const handelDelete = async () => {
    setLoadingDelete(true);
    await dispatch(deleteSubCategory(id));
    setLoadingDelete(false);
    setShowDelete(false);
  };

  const resDelete = useSelector((state) => state.subCategory.deleteSubCategory);

  useEffect(() => {
    if (loadingDelete === false) {
      if (resDelete === "") {
        notify("تم الحذف بنجاح", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
  }, [loadingDelete]);

  // section edit

  const [showEdit, setShowEdit] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [value, setValue] = useState(name);
  const handelChangeEdit = (e) => {
    setValue(e.target.value);
  };

  const handelEdit = async () => {
    setLoadingEdit(true);
    await dispatch(
      updateSubCategory(id, {
        name: value,
      })
    );
    setLoadingEdit(false);
    setShowEdit(false);
  };

  const resEdit = useSelector((state) => state.subCategory.updateSubCategory);

  useEffect(() => {
    if (loadingEdit === false) {
      if (resEdit.status === 200) {
        notify("تم التعديل بنجاح", "success");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        notify("هناك مشكلة في الانترنت","warn")
      }
    }
  }, [loadingEdit]);

  return [
    handelChange,
    Id,
    allSubCategory,
    showDelete,
    handleClose,
    handelDelete,
    handleShow,
    showEdit,
    handleCloseEdit,
    handelEdit,
    handleShowEdit,
    handelChangeEdit,
    value,
  ];
};
