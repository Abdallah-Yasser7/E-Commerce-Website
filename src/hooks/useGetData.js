import baseUrl from "../Api/baseURL";

export const useGetData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.get(url, params, config);
  return res.data;
};
