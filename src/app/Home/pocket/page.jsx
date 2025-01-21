import React from 'react';
import bigBus from "../../../../public/bigBus.png";
import Image from 'next/image';
import Link from 'next/link';

export default function Pocket() {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto my-8 group cursor-pointer px-4 sm:px-8">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
        {/* Background Image */}
        <Image
          src={bigBus}
          alt="Bus Image"
          fill
          className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#114F4A]/50 transition-opacity duration-300 group-hover:bg-[#114F4A]/40" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4 px-4 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
            خيارات السفر
          </h3>
          <p className="text-sm sm:text-lg md:text-xl max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
            تحقق من الرحلات المتاحة , ومواعيدها واسعارها
          </p>
          <Link href="/available" className="bg-main text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-lg sm:text-xl font-bold hover:bg-main/90 transition-all transform hover:scale-105">
            الرحلات المتاحة
          </Link>
        </div>
      </div>
    </div>
  );
}
