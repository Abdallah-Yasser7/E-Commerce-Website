import baseUrl from "../Api/baseURL";

export const useUpdateProduct = async (url, params) => {
  const res = await baseUrl.put(url, params)
  return res
}

export const useUpdateProductWithImage = async (url, params) => {
  // const config = {
  //   headers:{"content-type":"multipart/from-data"}
  // }
  const res = await baseUrl.put(url, params)
  return res
}