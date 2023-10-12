import baseUrl from "../Api/baseURL";

export const useUpdateProduct = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.put(url, params, config)
  return res
}

export const useUpdateProductWithImage = async (url, params) => {
  const config = {
    headers: {
      "content-type": "multipart/from-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.put(url, params, config)
  return res
}