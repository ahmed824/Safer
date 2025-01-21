"use client";

import CpMobile from "../CpMobile/page";
import dynamic from "next/dynamic";

export default function DashboardLayout({ children }) {
  return (
    <div className="w-full min-h-screen p-4" dir="rtl" lang="ar">
      <div className="flex flex-wrap my-5">
        <aside className="w-full md:w-1/4 mb-4 md:mb-0 sticky top-0">
          <CpMobile />
        </aside>
        <div className="w-full md:w-3/4 px-4">
          {children}
        </div>
      </div>
    </div>
  );
}
