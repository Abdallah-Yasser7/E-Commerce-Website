import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllCart, deleteOneCart } from '../../redux/actions/CartAction';
import { useEffect } from 'react';
import notify from '../useNotifaction';

export const useDeleteProductCartHook = (item) => {
  const dispatch = useDispatch();

  const [loadingAll, setLoadingAll] = useState(true)
  const [loadingOne, setLoadingOne] = useState(true)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelDeleteAll = async () => {
    setLoadingAll(true)
    await dispatch(deleteAllCart());
    setLoadingAll(false)
    setShow(false);
  };
  
  const resAll = useSelector(state => state.CartReducer.deleteAllCart)
  
  useEffect(() => {
    if (loadingAll === false) {
      console.log(resAll);
      if (resAll === "") {
        notify("تم الحذف بنجاح","success")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
  },[loadingAll])

  const [showOne, setShowOne] = useState(false);
  const handleCloseOne = () => setShowOne(false);
  const handleShowOne = () => setShowOne(true);
  const handelDeleteOne = async () => {
    setLoadingOne(true)
    await dispatch(deleteOneCart(item._id));
    setLoadingOne(false)
    setShow(false);
  };

  const resOne = useSelector(state => state.CartReducer.deleteOneCart)


  useEffect(() => {
    if (loadingOne === false) {
      console.log(resOne);
      if (resOne.status === "success") {
        notify("تم الحذف بنجاح","success")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
  },[loadingOne])


  return [show, handleClose, handelDeleteAll, handleShow, showOne, handleCloseOne, handelDeleteOne, handleShowOne]
}
