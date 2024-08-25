import { getAuthToken } from "./cookies";

class API {
  static async GET(path: string, data?: any) {
    if (data) {
      path = path + "?" + new URLSearchParams(data).toString();
    }
    const response = await fetch(path, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthToken() ? "Bearer " + getAuthToken() : "",
      },
      method: "GET",
    }).then((res) => {
      if (res.status === 401) {
        throw new Error("Unauthorized");
      }
      return res.json();
    });

    console.log(`[API GET] ${path} Response:\n`, response);

    if (response.status !== "success") {
      throw new Error(response.error);
    }

    return response?.data;
  }

  static async POST(path: string, data: any) {
    const response = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthToken() ? "Bearer " + getAuthToken() : "",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 401) {
        throw new Error("Unauthorized");
      }
      return res.json();
    });

    console.log(
      `[API POST] ${path} ${JSON.stringify(data)} Response:\n`,
      response
    );

    if (response.status !== "success") {
      throw new Error(response.error);
    }

    return response?.data;
  }

  static async PUT(path: string, data: any) {
    const response = await fetch(path, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthToken() ? "Bearer " + getAuthToken() : "",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 401) {
        throw new Error("Unauthorized");
      }
      return res.json();
    });

    console.log(
      `[API POST] ${path} ${JSON.stringify(data)} Response:\n`,
      response
    );

    if (response.status !== "success") {
      throw new Error(response.error);
    }

    return response?.data;
  }

  static async DELETE(path: string, data: any) {
    const response = await fetch(path, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthToken() ? "Bearer " + getAuthToken() : "",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 401) {
        throw new Error("Unauthorized");
      }
      return res.json();
    });

    console.log(
      `[API POST] ${path} ${JSON.stringify(data)} Response:\n`,
      response
    );

    if (response.status !== "success") {
      throw new Error(response.error);
    }

    return response?.data;
  }
}

export default API;
