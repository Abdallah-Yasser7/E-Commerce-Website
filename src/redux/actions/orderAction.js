import { GET_ALL_ORDER, GET_ONE_ORDER, CHANGE_PAY_ORDER, CHANGE_DELIVER_ORDER } from "../type";
import { useGetData } from './../../hooks/useGetData';
import { useUpdateData } from './../../hooks/useUpdateData';


export const getAllOrder = (limit, page) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/orders?limit=${limit}&page=${page}`);
    dispatch({
      type: GET_ALL_ORDER,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ORDER,
      payload: e.response,
    })
  }
};

export const getOneOrder = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/orders/${id}`);
    dispatch({
      type: GET_ONE_ORDER,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_ORDER,
      payload: e.response,
    })
  }
};

export const changePayOrder = (id) => async (dispatch) => {
  try {
    const res = await useUpdateData(`/api/v1/orders/${id}/pay`);
    dispatch({
      type: CHANGE_PAY_ORDER,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: CHANGE_PAY_ORDER,
      payload: e.response,
    })
  }
};

export const changeDeliverOrder = (id) => async (dispatch) => {
  try {
    const res = await useUpdateData(`/api/v1/orders/${id}/deliver`);
    dispatch({
      type: CHANGE_DELIVER_ORDER,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: CHANGE_DELIVER_ORDER,
      payload: e.response,
    })
  }
};
