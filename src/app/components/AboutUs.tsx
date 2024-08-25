import CONFIG from "@/config";
import Image from "next/image";
import Heading from "../shared/heading";

export function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="mx-auto col-span-2">
          <Image
            src="/logo.png"
            alt={CONFIG.APP_NAME || "Logo"}
            width={400}
            height={400}
          />
        </div>

        <div className="col-span-3 my-auto">
          <p className="text-md text-left text-gray-600">About</p>
          <Heading>{CONFIG.APP_NAME}</Heading>
          <div className="text-lg text-gray-900 mt-4 text-justify">
            This is the official website for Eastern Collegiate Team Badminton
            Championships.We are a team of passionate and experienced badminton
            players who are passionate about the sport of badminton. We have
            been playing badminton since 2015 and have won multiple tournaments.
            <div />
            This is the official website for Eastern Collegiate Team Badminton
            Championships.We are a team of passionate and experienced badminton
            players who are passionate about the sport of badminton. We have
            been playing badminton since 2015 and have won multiple tournaments.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
