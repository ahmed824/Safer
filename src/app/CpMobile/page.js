"use client";

import React, { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";

const adminLinks = [
  { href: "/", label: " الصفحة الرئيسية" },
  { href: "/cp/city", label: " المدن" },
  { href: "/cp/addCat", label: " تصنيفات" },
  { href: "/cp/addUnit", label: " وحدات" },
  { href: "/cp/addProducts", label: " منتجات" },
  { href: "/cp/Confirm-pending-invoices", label: "تاكيد الفواتير المعلقه" },
  { href: "/cp/addClint", label: " عملاء" },
  { href: "/cp/newFatura", label: "فواتير جديده" },
  { href: "/cp/Bills-executed", label: "فواتير منفذه" },
  { href: "/cp/Rejected-invoices", label: "فواتير مرفوضه" },
  { href: "/cp/Cancelled-invoices", label: "فواتير ملغاه" },
  { href: "/cp/rports", label: "تقارير" },
  { href: "/cp/addArea", label: " منطقة" },
  { href: "/cp/MyData", label: "بياناتى" },
  { href: "/cp/AddAdmin", label: "إضافة أدمن" },
];

const userLinks = [
  { href: "/", label: " الصفحة الرئيسية" },
  { href: "/cp/fatora", label: " فواتير منفذة" },
  { href: "/cp/Bills-executed", label: "الفواتير " },
  { href: "/cp/MyData", label: "بياناتى" },
];
const retailLinks = [{ href: "/cp/MyData", label: "بياناتى" }];

const getLinksByRank = (rank) => {
  switch (rank) {
    case "Admin":
      return adminLinks;
    case "User":
      return userLinks;
    default:
      return [];
  }
};

const CpMobile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [Rank, setRank] = useState(null);
  const [UserID, setUserID] = useState(null);

  const router = useRouter(); // For client-side routing

  useEffect(() => {
    const userRank = localStorage.getItem("Rank");
    const userID = localStorage.getItem("userId");

    if (!userID) {
      router.push("/login");
    } else {
      setUserID(userID);
    }
  }, [router]);

  useEffect(() => {
    const userRank = localStorage.getItem("Rank");
    setRank(userRank);
  }, []);

  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("Rank");
    setUserID(null);
    setRank(null);
    router.push("/login");
  };

  const linksToDisplay = getLinksByRank(Rank);

  return (
    <div className="relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-gray-100 h-screen fixed top-0 right-0 p-4">
        <div className="space-y-4">
          {linksToDisplay.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-right text-gray-800 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="w-full text-right text-red-600 hover:text-red-800 mt-4"
          >
            تسجيل الخروج
          </button>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={handleToggleSidebar}
        className="fixed top-4 right-4 md:hidden p-2 bg-blue-600 text-white rounded shadow-lg z-50"
      >
        <IoSettingsSharp className="w-6 h-6" />
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-gray-100 p-4 transform transition-transform duration-300 z-40 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handleToggleSidebar}
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>
        <div className="space-y-4 mt-10">
          {linksToDisplay.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleToggleSidebar}
              className="block text-right text-gray-800 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="w-full text-right text-red-600 hover:text-red-800 mt-4"
          >
            تسجيل الخروج
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={handleToggleSidebar}
        />
      )}
    </div>
  );
};

export default CpMobile;
