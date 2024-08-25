import { Metadata } from "next";
import Carousel from "./components/Carousel";
import AboutUs from "./components/AboutUs";
import UpcomingEvents from "./components/Upcoming";
import Sponsor from "./components/Sponsor";
import Participants from "./components/Participants";

export const metadata: Metadata = {
  title: "Eastern Collegiate Team Badminton Championships",
  metadataBase: new URL("https://badmintonproject.com"),
  icons: {
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Eastern Collegiate Team Badminton Championships - Badminton Project",
    url: "https://badmintonproject.com",
    type: "website",
    description:
      "This is the official website for Eastern Collegiate Team Badminton Championships.We are a team of passionate and experienced badminton players who are passionate about the sport of badminton. We have been playing badminton since 2015 and have won multiple tournaments.",
    images: [
      {
        url: "https://d22rwxxu8wv0gu.cloudfront.net/1720397853219/350.webp",
        width: 1200,
        height: 630,
        alt: "Resizer Solutions",
      },
    ],
  },
  description:
    "This is the official website for Eastern Collegiate Team Badminton Championships.We are a team of passionate and experienced badminton players who are passionate about the sport of badminton. We have been playing badminton since 2015 and have won multiple tournaments.",
};

export default function Home() {
  return (
    <main className="pt-10">
      {/* 1. carousel */}
      <Carousel />

      {/* 4. Upcoming Events */}
      <UpcomingEvents />

      {/* 5. Participating Colleges */}
      <Participants />

      {/* 6. Sponsor */}
      <Sponsor />

      {/* 2. About */}
      <AboutUs />
    </main>
  );
}
