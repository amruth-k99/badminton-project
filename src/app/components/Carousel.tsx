"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
  };
  const slides = new Array(4).fill(0);
  return (
    <div className="slider-container max-w-[95vw] mx-auto">
      <Slider {...settings} autoplay>
        {slides.map((_, i) => (
          <div
            key={"slider_" + i}
            className="h-[70vh] outline-none active:outline-none focus:outline-none"
          >
            <Image
              width={800}
              height={800}
              className="h-full w-auto mx-auto"
              src={`/carousel/${i + 1}.jpg`}
              alt="Logo"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
