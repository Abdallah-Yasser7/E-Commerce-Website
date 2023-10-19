import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteRate } from '../../redux/actions/rateAction';
import notify from '../useNotifaction';

export const useDeleteRateHook = (id) => {
  const dispatch = useDispatch();

  const [showDelete, setShowDelete] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  const handelDelete = async () => {
    setLoading(true)
    await dispatch(deleteRate(id));
    setLoading(false)
    handleClose();
  };
  
  const res = useSelector(state => state.rateReducer.deleteRate)
  
  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم حذف التعليق بنجاح","success")
      }
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      setLoading(true)
    }
  },[loading, res])

  return [handleClose, handleShow, handelDelete, showDelete]
}
