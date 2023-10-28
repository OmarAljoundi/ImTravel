const onRequest = async <T>(
  endPoint: string,
  method: "POST" | "GET" | "PUT" | "DELETE",
  data: any = "",
  next?: NextFetchRequestConfig,
  isClient?: boolean
): Promise<T> => {
  var headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");

  const requestOptions: RequestInit = {
    method,
    headers,
    next,
  };

  if (method === "POST" || method === "PUT") {
    requestOptions.body = JSON.stringify(data);
  }

  try {
    const url = isClient
      ? endPoint
      : `${process.env.NEXT_PUBLIC_HTTP_ROOT_DOMAIN}${endPoint}`;
    const response = await fetch(url, requestOptions);

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

export function http<T>(
  endPoint: string,
  next?: NextFetchRequestConfig,
  isClient?: boolean
) {
  return {
    post: (data: any = "") =>
      onRequest<T>(endPoint, "POST", data, next, isClient),
    update: (data: any = "") =>
      onRequest<T>(endPoint, "PUT", data, next, isClient),
    get: () => onRequest<T>(endPoint, "GET", undefined, next, isClient),
    delete: () => onRequest<T>(endPoint, "DELETE", undefined, next, isClient),
  };
}
