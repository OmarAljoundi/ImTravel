import axios, { AxiosRequestConfig } from "axios";

const onRequest = async <T>(
  endPoint: string,
  method: "POST" | "GET" | "PUT" | "DELETE",
  data: any = "",
  token?: string
): Promise<T> => {
  var headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  const requestOptions: AxiosRequestConfig = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  if (method === "POST" || method === "PUT") {
    requestOptions.data = data;
  }

  try {
    const { data, status } = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}${endPoint}`,
      requestOptions
    );

    if (status != 200) {
      throw new Error(`Request failed with status: ${status}`);
    }

    return data as Promise<T>;
  } catch (ex) {
    console.log(ex);
    throw new Error("Error while fetching data: " + ex);
  }
};

export function http<T>(endPoint: string) {
  return {
    post: (data: any = "", token?: string) =>
      onRequest<T>(endPoint, "POST", data, token),
    get: (token?: string) => onRequest<T>(endPoint, "GET", undefined, token),
    delete: (token?: string) =>
      onRequest<T>(endPoint, "DELETE", undefined, token),
    update: (data: any = "", token?: string) =>
      onRequest<T>(endPoint, "PUT", data, token),
  };
}
