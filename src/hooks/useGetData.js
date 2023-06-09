import baseUrl from "../Api/baseURL";

export const useGetData = async (url, params) => {
  const res = await baseUrl.get(url, params);
  return res.data;
};
