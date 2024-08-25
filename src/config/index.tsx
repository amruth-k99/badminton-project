import BackgroundImage from "../../public/logo.png";

const CONFIG = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  APP_DESCRIPTION:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    "Promoting Team Spirit, Excellence and Camaraderie in Collegiate Badminton.",
  APP_LOGO: BackgroundImage,
  TOKEN_EXPIRY_IN_SECONDS: 60 * 60 * 12, // 12 hours
};

export default CONFIG;
