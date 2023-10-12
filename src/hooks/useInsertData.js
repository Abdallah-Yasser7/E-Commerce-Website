import baseUrl from "../Api/baseURL";

export const useInsertData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};

export const useInsertDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "content-type": "multipart/from-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};
