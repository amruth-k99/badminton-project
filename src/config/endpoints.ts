export const BASE_URL = "http://localhost:4000/api";

const ENDPOINT = {
  loginWithEmail: BASE_URL + "/auth/login",

  getUserDetails: BASE_URL + "/user/get-details",

  getOverview: BASE_URL + "/generic/overview/",

  getSignedURL: BASE_URL + "/image-resizer/get-signed-url",

  processMedia: BASE_URL + "/image-resizer/process-media",
};

export default ENDPOINT;
