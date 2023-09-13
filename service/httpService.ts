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

  const requestOptions: RequestInit = {
    method,
    headers,
    next: {
      revalidate: false,
    },
  };

  if (method === "POST" || method === "PUT") {
    requestOptions.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${endPoint}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const responseData: T = await response.json();
    return responseData;
  } catch (ex) {
    console.error(ex);
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
