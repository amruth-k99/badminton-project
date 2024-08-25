import Logo from "/public/logo.png";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Image src={Logo} alt="logo" className="w-16 h-16" />
    </div>
  );
};

export default Loading;
