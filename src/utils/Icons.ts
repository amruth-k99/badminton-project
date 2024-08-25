import { GoHome } from "react-icons/go";
import { RxDashboard, RxTimer } from "react-icons/rx";
import { LiaUsersSolid, LiaBedSolid } from "react-icons/lia";
import { LuUser } from "react-icons/lu";
import {
  IoCarOutline,
  IoShieldCheckmarkOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { FiHelpCircle, FiHeart } from "react-icons/fi";
import { AiOutlineLoading3Quarters, AiOutlineLineChart } from "react-icons/ai";
import { PiBathtub } from "react-icons/pi";
import { HiOutlineArrowsPointingIn } from "react-icons/hi2";
import { IoMdCall, IoMdOpen } from "react-icons/io";
import { TiWeatherSunny } from "react-icons/ti";
import { FaMoon } from "react-icons/fa";

const Icons = {
  // dashboard
  Home: RxDashboard,
  Property: GoHome,
  Tenant: LuUser,
  People: LiaUsersSolid,
  Activity: RxTimer,
  Privacy: IoShieldCheckmarkOutline,
  Settings: IoSettingsOutline,
  Help: FiHelpCircle,
  Report: AiOutlineLineChart,

  // Property
  Car: IoCarOutline,
  Bathtub: PiBathtub,
  Arrow: HiOutlineArrowsPointingIn,
  Heart: FiHeart,
  Phone: IoMdCall,
  OpenLink: IoMdOpen,
  BedRoom: LiaBedSolid,

  // theme
  Light: TiWeatherSunny,
  Dark: FaMoon,
  Loading: AiOutlineLoading3Quarters,
};

export default Icons;
