import baseUrl from "../Api/baseURL";

export const useInsertData = async (url, params) => {
  const res = await baseUrl.post(url, params)
  return res
}

export const useInsertDataWithImage = async (url, params) => {
  // const config = {
  //   headers:{"content-type":"multipart/from-data"}
  // }
  const res = await baseUrl.post(url, params)
  return res
}