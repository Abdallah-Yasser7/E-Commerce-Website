import baseUrl from "../Api/baseURL";

export const useDeleteData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.delete(url, config, params );
  return res.data;
};
