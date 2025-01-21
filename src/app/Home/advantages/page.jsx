import React from "react";
import Image from "next/image";
import one from "../../../../public/one.png";
import coin from "../../../../public/coin.png";
import clock from "../../../../public/clock.png";

export default function Advantages() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-12 px-4">
      {/* Advantage 1 */}
      <div className="flex flex-col items-center max-w-[250px] text-center">
        <Image
          src={one}
          alt="First advantage"
          width={200}
          height={200}
          className="img-avg"
        />
        <h3 className="text-main font-bold text-xl mt-4">حجز اسرع واسهل</h3>
        <p className="text-gray-600 mt-2 px-2 whitespace-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Dashed Line */}
      <div className="hidden sm:block h-[2px] w-32 border-t-2 border-dashed border-gray-400"></div>

      {/* Advantage 2 */}
      <div className="flex flex-col items-center max-w-[250px] text-center">
        <Image
          src={coin}
          alt="Second advantage"
          width={200}
          height={200}
          className="img-avg"
        />
        <h3 className="text-main font-bold text-xl mt-4">حجز اسرع واسهل</h3>
        <p className="text-gray-600 mt-2 px-2 whitespace-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Dashed Line */}
      <div className="hidden sm:block h-[2px] w-32 border-t-2 border-dashed border-gray-400"></div>

      {/* Advantage 3 */}
      <div className="flex flex-col items-center max-w-[250px] text-center">
        <Image
          src={clock}
          alt="Third advantage"
          width={200}
          height={200}
          className="img-avg"
        />
        <h3 className="text-main font-bold text-xl mt-4">حجز اسرع واسهل</h3>
        <p className="text-gray-600 mt-2 px-2 whitespace-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
