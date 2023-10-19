import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateRate } from '../../redux/actions/rateAction';
import notify from '../useNotifaction';

export const useEditRateHook = (item) => {
  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [textEdit, setTextEdit] = useState(item.review);
  const [starEdit, setStarEdit] = useState(item.rating);

  const onChangeText = (e) => {
    setTextEdit(e.target.value)
  }

  const onChangeStar = (e) => {
    setStarEdit(e)
  }

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handelEdit = async () => {
    if (textEdit === "") {
      notify("من فضلك اكتب تعليق","error")
      return;
    }
    if (starEdit === "") {
      notify("من فضلك قيم المنتج","error")
      return;
    }
    setLoading(true)
    await dispatch(updateRate(item._id, {
      review: textEdit,
      rating: starEdit
  }));
    setLoading(false)
    handleCloseEdit();
  };
  
  const res = useSelector(state => state.rateReducer.updateRate)
  
  useEffect(() => {
    if (loading === false) {
      if (res.status && res.status === 200) {
        notify("تم تعديل التعليق بنجاح","success")
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      setLoading(true)
      console.log(res);
    }
  },[loading, res])

  return [handleCloseEdit, handleShowEdit, handelEdit, showEdit, textEdit, starEdit, onChangeText, onChangeStar]
}
