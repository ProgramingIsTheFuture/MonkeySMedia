import useSWR from "swr";
import api from "../services";

export const useGetRequest = <Data = any, Error = any>(url: string) => {
  let token: any = localStorage.getItem("auth");
  token = JSON.parse(token).token;
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await api.get(url, {
      headers: { Authorization: `Token ${JSON.parse(token).token}` },
    });

    return response.data;
  });

  return { data, error };
};
