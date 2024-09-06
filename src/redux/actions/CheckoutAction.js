import { useInsertData } from './../../hooks/useInsertData';
import { CREATE_ORDER_CASH } from "../type";


export const createOrderCash = (id, data) => async (dispatch) => {
  try {
    const res = await useInsertData(`/api/v1/orders/${id}`, data);
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: e.response,
    })
  }
};
