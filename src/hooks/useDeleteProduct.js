import baseUrl from "../Api/baseURL";

export const useDeleteProduct = async (url, params) => {
  const res = await baseUrl.delete(url, params);
  return res.data;
};
