import baseUrl from "../Api/baseURL";

export const useDeleteProduct = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.delete(url, params, config);
  return res.data;
};
