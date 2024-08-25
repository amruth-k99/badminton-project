import CONFIG from "@/config";
import cookie from "js-cookie";
const AUTH_TOKEN_LABEL = "authToken";

// Add cookies
export const addCookie = (name: string, value: string) => {
  console.log("[Cookies] addCookie", name, ":", value);
  cookie.set(name, value);
};

export const getCookieValue = (name: string) => {
  const cookieValue = cookie.get(name);
  return cookieValue?.toString() || "";
};

// remove cookies
export const removeCookie = (name: string) => {
  cookie.remove(name, { secure: true, httpOnly: true });
};

// AUTH TOKEN MANAGEMENT
export const getAuthToken = () => {
  return getCookieValue(AUTH_TOKEN_LABEL);
};

export const setAuthToken = (value: string) => {
  console.log("[Cookies] setAuthToken authToken:", JSON.stringify(value));

  cookie.set(AUTH_TOKEN_LABEL, value, {
    expires: new Date(Date.now() + CONFIG.TOKEN_EXPIRY_IN_SECONDS * 1000),
    secure: true,
  });

  return true;
};

export const logoutUserFromCookie = () => {
  cookie.remove(AUTH_TOKEN_LABEL, { secure: true });
};

// END AUTH TOKEN MANAGEMENT
