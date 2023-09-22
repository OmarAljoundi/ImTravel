const onRequest = async <T>(
  endPoint: string,
  method: "POST" | "GET" | "PUT" | "DELETE",
  data: any = "",
  token?: string,
  tag?: string
): Promise<T> => {
  var headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }
  console.log("tag", tag);

  const requestOptions: RequestInit = {
    method,
    headers,
    next: {
      revalidate: 3600,
      tags: [tag ?? ""],
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

export function http<T>(endPoint: string, tag?: string) {
  return {
    post: (data: any = "", token?: string) =>
      onRequest<T>(endPoint, "POST", data, token, tag),
    get: (token?: string) =>
      onRequest<T>(endPoint, "GET", undefined, token, tag),
    delete: (token?: string) =>
      onRequest<T>(endPoint, "DELETE", undefined, token, tag),
    update: (data: any = "", token?: string) =>
      onRequest<T>(endPoint, "PUT", data, token, tag),
  };
}
