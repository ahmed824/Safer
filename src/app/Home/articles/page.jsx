"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import article from "../../../../public/article.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function Articles() {
  // Custom arrow components
  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-0 sm:left-4 lg:left-6 transform -translate-y-1/2 bg-main text-white rounded-full p-2 cursor-pointer z-10 flex"
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
  
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-0 sm:right-4 lg:right-6 transform -translate-y-1/2 bg-main text-white rounded-full p-2 cursor-pointer z-10 flex"
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
  

  const settings = {
    pauseOnHover:true,
    rtl: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <NextArrow />,
    nextArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 ">
      <Slider {...settings} >
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="px-3">
            <div className="card bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Image Section */}
              <div className="relative h-[180px] sm:h-[200px]">
                <Image
                  src={article}
                  alt="Article image"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 space-y-4 flex flex-col">
                <p
                  className="font-bold text-base sm:text-lg text-main whitespace-normal"
                  dir="rtl"
                >
                  خيارات السفرالمتاحة للسودانيين في ظروف الحرب والدول التي تسمح
                  بالدخول
                </p>
                <Link href='/bigArticle' className="bg-main text-white text-center px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-main/90 transition-all w-1/2 m-auto">
                  اقرا المزيد
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
