import CONFIG from "@/config";
import Image from "next/image";
import Heading from "../shared/heading";

export function UpcomingEvents() {
  return (
    <div className="max-w-7xl mx-auto my-16 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1">
          <p className="text-md text-left text-gray-600">Important Dates</p>
          <Heading>Upcoming Events</Heading>
          <div className="text-lg text-gray-900 mt-4">
            We regularly have some exciting upcoming events. Check them out
            below.
          </div>
        </div>

        <div className="mx-auto col-span-2">
          <Image
            src="/upcoming.jpg"
            alt={CONFIG.APP_NAME || "Logo"}
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
