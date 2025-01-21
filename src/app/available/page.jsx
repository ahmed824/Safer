'use client'
import React from "react";
import DialoogBtn from "../DialoogBtn/page";

const TicketCard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Journey Details */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-bold">
            <span className="text-gray-700">من:</span> عطبرة
          </p>
          <p className="text-lg font-bold">
            <span className="text-gray-700">إلى:</span> القاهرة
          </p>
        </div>

        {/* Icon and Divider */}
        <div className="flex items-center justify-center mb-4">
          <div className="flex-grow h-1 bg-gray-200"></div>
          <div className="mx-2">
          <i className="fa-solid fa-bus"></i>
          </div>
          <div className="flex-grow h-1 bg-gray-200"></div>
        </div>

        {/* Ticket Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div className="flex items-center justify-center">
            <span className="bg-green-600 text-white px-4 py-2 rounded-full font-bold">
              متاح
            </span>
          </div>
          <div className="text-center sm:col-span-2">
            <p className="text-gray-700">
              <span className="font-bold">تاريخ الرحلة:</span> 04-11-2024
            </p>
            <p className="text-gray-700">
              <span className="font-bold">زمن الرحلة:</span> 06:30 ص
            </p>
            <p className="text-gray-700">
              <span className="font-bold">المقاعد المتبقية:</span> 13 مقعد
            </p>
          </div>
        </div>

        {/* Price and Notes */}
        <div className="mt-4">
          <p className="text-gray-700 text-lg">
            <span className="font-bold ">سعر التذكرة:</span> <span className="text-main"> 38000 جنيه</span> 
          </p>
          <p className="text-sm text-gray-500 mt-2 whitespace-normal">
            الملاحظات: الحضور الساعة 6:00 صباحًا إلى ميناء عطبرة البري وتبدأ
            الرحلة منه.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-6 text-center">
         <DialoogBtn />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
