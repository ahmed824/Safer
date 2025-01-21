"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import logo from "../../../public/logo.jpeg";

export default function Navbar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const latestTrips = [
    { from: "عطبرة", to: "جنوب السودان" },
    { from: "عطبرة", to: "جنوب السودان" },
    { from: "عطبرة", to: "جنوب السودان" },
  ];

  return (
    <div>
      <div className="h-20 md:h-28"></div>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 md:h-16 sm:h-24 items-center justify-between max-md:flex-row-reverse">
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                onClick={() => setSidebarVisible(true)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" aria-current="page">
                <Image
                  className="h-12 w-auto sm:h-16"
                  src={logo}
                  alt="logo"
                  width={100}
                  height={100}
                  quality={100}
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
              <div className="flex space-x-4 gap-4">
                <Link
                  href="/"
                  className="rounded-md text-lg py-2 font-medium text-main hover:bg-gray-700 hover:text-white px-3"
                >
                  الرئيسية
                </Link>
                <Link
                  href="/available"
                  className="rounded-md text-lg py-2 font-medium text-main hover:bg-gray-700 hover:text-white px-3"
                >
                  الرحلات المتاحة
                </Link>
                <Link
                  href="/politics"
                  className="rounded-md text-lg py-2 font-medium text-main hover:bg-gray-700 hover:text-white px-3"
                >
                  سياسة الخصوصية
                </Link>
                <Link
                  href="/BigList"
                  className="rounded-md text-lg py-2 font-medium text-main hover:bg-gray-700 hover:text-white px-3"
                >
                 لوحة التحكم  <i className="fa-solid fa-sliders"></i>
                </Link>
                <Link
                  href="/login"
                  className="rounded-md text-lg py-2 font-medium text-main hover:bg-gray-700 hover:text-white px-3"
                >
                 تسجيل الدخول  
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* PrimeReact Sidebar */}
        <Sidebar
          visible={sidebarVisible}
          onHide={() => setSidebarVisible(false)}
          position="right"
          className="w-[300px]"
        >
          <div className="flex flex-col gap-6 p-4">
            {/* Navigation Links */}
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-main mb-2">القائمة</h2>
              <div className="flex justify-center gap-4 align-middle">
                <Link
                  href="/"
                  className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                  onClick={() => setSidebarVisible(false)}
                >
                  الرئيسية
                </Link>
                <Link
                  href="/available"
                  className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                  onClick={() => setSidebarVisible(false)}
                >
                  الرحلات المتاحة
                </Link>
                <Link
                  href="/politics"
                  className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                  onClick={() => setSidebarVisible(false)}
                >
                  سياسة الخصوصية
                  
                </Link>
                <Link
                  href="/BigList"
                  className="rounded-md text-lg py-2 font-medium text-main hover:bg-gray-700 hover:text-white px-3"
                >
                 لوحة التحكم  <i className="fa-solid fa-sliders"></i>
                </Link>
              </div>
            </div>

            {/* Latest Trips Section */}
            <div className="flex flex-col gap-3">
              <div className="bg-black text-white p-3 rounded-lg flex items-center justify-between flex-row-reverse">
                <i className="fa-solid fa-caret-right text-cyan-600"></i>
                <p>أحدث الرحلات</p>
              </div>

              {latestTrips.map((trip, index) => (
                <Link
                  key={index}
                  href="/"
                  className="bg-main text-white p-3 rounded-lg flex items-center justify-between hover:bg-main/90 transition-colors flex-row-reverse"
                  onClick={() => setSidebarVisible(false)}
                >
                  <i className="fa-solid fa-forward rotate-180"></i>
                  <p className="text-sm">
                    من: {trip.from} - الى: {trip.to}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Sidebar>

        {/* Bottom Navigation - Only visible on desktop */}
        <div className="hidden sm:flex bottom-nav flex-col sm:flex-row w-full">
          <div
            className="right bg-black text-white h-14 flex items-center justify-end px-2 text-right"
            dir="rtl"
          >
            <p>أحدث الرحلات</p>
            <i className="fa-solid fa-caret-right text-cyan-600"></i>
          </div>
          <div className="flex flex-row w-full overflow-x-auto">
            {latestTrips.map((trip, index) => (
              <Link
                key={index}
                href="/"
                className="bg-main text-white h-14 flex items-center justify-center flex-1 hover:bg-main/90 transition-colors "
              >
                <p className="text-sm sm:text-xl">
                  من: {trip.from} - الى: {trip.to}
                </p>
                <i className="fa-solid fa-forward rotate-180 ml-2"></i>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
