import baseUrl from "../Api/baseURL";

export const useUpdateData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.put(url, params, config)
  return res
}

export const useUpdateDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "content-type": "multipart/from-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.put(url, params, config)
  return res
}