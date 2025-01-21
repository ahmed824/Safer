"use client";

import React, { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiRoadMapFill } from "react-icons/ri";
import { FcHome } from "react-icons/fc";
import { TbCategoryPlus } from "react-icons/tb";
import {
  MdOutlineProductionQuantityLimits,
  MdCancel,
  MdReport,
  MdLocationCity,
  MdOutlineReport,
  MdAssignmentTurnedIn,
} from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FiLogOut, FiUser } from "react-icons/fi";
import { FaTasks, FaCity, FaBus } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
// import { useQueryClient } from "@tanstack/react-query";

const adminLinks = [
  {
    href: "/",
    label: "الصفحة الرئيسية",
    icon: <FcHome />,
    color: "bg-blue-500",
  },
  {
    href: "/cp/city",
    label: "المدن",
    icon: <FaCity />,
    color: "bg-blue-500",
  },
  {
    href: "/cp/company",
    label: "شركات",
    icon: <MdLocationCity />,
    color: "bg-blue-500",
  },
  {
    href: "/cp/bus",
    label: "حافلة",
    icon: <FaBus />,
    color: "bg-blue-500",
  },
  {
    href: "/cp/addProducts",
    label: "اضافه منتجات",
    icon: <MdOutlineProductionQuantityLimits />,
    color: "bg-blue-500",
  },
  {
    href: "/cp/Confirm-pending-invoices",
    label: "تاكيد الفواتير المعلقه",
    icon: <MdAssignmentTurnedIn />,
    color: "bg-orange-400",
  },
  {
    href: "/cp/addClint",
    label: "عملاء",
    icon: <FiUser />,
    color: "bg-orange-400",
  },
  {
    href: "/cp/Bills-executed",
    label: "فواتير قيد التنفيذ",
    icon: <FaTasks />,
    color: "bg-green-400",
  },
  {
    href: "/cp/newFatura",
    label: "فواتير جديده",
    icon: <FaTasks />,
    color: "bg-green-400",
  },
  {
    href: "/cp/Rejected-invoices",
    label: "فواتير مرفوضه",
    icon: <MdCancel />,
    color: "bg-green-400",
  },
  {
    href: "/cp/MyData",
    label: "بياناتى",
    icon: <MdOutlineReport />,
    color: "bg-green-400",
  },
  {
    href: "/cp/rports",
    label: "تقارير",
    icon: <MdReport />,
    color: "bg-red-500",
  },
  {
    href: "/cp/addArea",
    label: "اضافه منطقة",
    icon: <MdLocationCity />,
    color: "bg-red-500",
  },
  {
    href: "/cp/Cancelled-invoices",
    label: "فواتير ملغاه",
    icon: <MdCancel />,
    color: "bg-red-500",
  },
  {
    href: "/cp/AddAdmin",
    label: "إضافة أدمن",
    icon: <GrUserAdmin />,
    color: "bg-red-500",
  },
];

const companyLinks = [
  {
    href: "/",
    label: "الصفحة الرئيسية",
    icon: <FcHome />,
    color: "bg-blue-500",
  },
  {
    href: "/cp/city",
    label: "المدن",
    icon: <FaCity />,
    color: "bg-blue-500",
  },
  {
    href: "/cp/company",
    label: "شركات",
    icon: <MdLocationCity />,
    color: "bg-blue-500",
  },
  {
    href: "/cp/bus",
    label: "حافلة",
    icon: <FaBus />,
    color: "bg-blue-500",
  },
  {
    href: "/cp/addTravel",
    label: "انشاء رحلة",
    icon: <RiRoadMapFill />,
    color: "bg-blue-500",
  },
  {
    href: "/cp/Confirm-pending-invoices",
    label: "تاكيد الفواتير المعلقه",
    icon: <MdAssignmentTurnedIn />,
    color: "bg-orange-400",
  },
  {
    href: "/cp/addClint",
    label: "عملاء",
    icon: <FiUser />,
    color: "bg-orange-400",
  },
  {
    href: "/cp/Bills-executed",
    label: "فواتير قيد التنفيذ",
    icon: <FaTasks />,
    color: "bg-green-400",
  },
  {
    href: "/cp/newFatura",
    label: "فواتير جديده",
    icon: <FaTasks />,
    color: "bg-green-400",
  },
  {
    href: "/cp/Rejected-invoices",
    label: "فواتير مرفوضه",
    icon: <MdCancel />,
    color: "bg-green-400",
  },
  {
    href: "/cp/MyData",
    label: "بياناتى",
    icon: <MdOutlineReport />,
    color: "bg-green-400",
  },
  {
    href: "/cp/rports",
    label: "تقارير",
    icon: <MdReport />,
    color: "bg-red-500",
  },
  {
    href: "/cp/addArea",
    label: "اضافه منطقة",
    icon: <MdLocationCity />,
    color: "bg-red-500",
  },
  {
    href: "/cp/Cancelled-invoices",
    label: "فواتير ملغاه",
    icon: <MdCancel />,
    color: "bg-red-500",
  },
  {
    href: "/cp/AddAdmin",
    label: "إضافة أدمن",
    icon: <GrUserAdmin />,
    color: "bg-red-500",
  },
];

const userLinks = [
  {
    href: "/",
    label: "الصفحة الرئيسية",
    icon: <FcHome />,
    color: "bg-blue-500",
  },
  {
    href: "/cp/Bills-executed",
    label: "فواتير قيد التنفيذ",
    icon: <FaTasks />,
    color: "bg-green-400",
  },
  {
    href: "/cp/fatora",
    label: "فواتير منفذة",
    icon: <FaTasks />,
    color: "bg-green-400",
  },
  {
    href: "/cp/MyData",
    label: "بياناتى",
    icon: <MdOutlineReport />,
    color: "bg-green-400",
  },
];

const getLinksByRank = (rank) => {
  switch (rank) {
    case "Admin":
      return adminLinks;
    case "Company":
      return companyLinks;
    case "User":
      return userLinks;
    default:
      return [];
  }
};

export default function BigList() {
  const [showCart, setShowCart] = useState(false);
  const [rank, setRank] = useState(null);
  const [userID, setUserID] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const storedRank = localStorage.getItem("Rank");
    const storedUserID = localStorage.getItem("userId");

    if (!storedUserID) {
      router.push("/login");
    } else {
      setUserID(storedUserID);
      setRank(storedRank);
    }
  }, [router]);

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const linksToDisplay = getLinksByRank(rank);

  const queryClient = useQueryClient();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("Rank");
    localStorage.setItem("cartUpdated", Date.now().toString());
    window.dispatchEvent(new Event("storage"));
    setUserID(null);
    setRank(null);
    queryClient.invalidateQueries();
    queryClient.invalidateQueries(["getUserBill"]);
    router.push("/login");
    window.location.reload();
  };

  return (
    <div className="container mx-auto px-4 rtl">
      <button
        onClick={handleShowCart}
        className="absolute top-4 right-4 p-3 bg-gray-800 text-white rounded-full"
        type="button"
      >
        <IoSettingsSharp className="text-xl" />
      </button>

      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          لوحة التحكم
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {linksToDisplay.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer flex items-center justify-center w-36 flex-col">
                <div className={`p-4 rounded-full ${link.color} text-white`}>
                  {link.icon}
                </div>
                <div className="mt-2 text-right">
                  <p className="font-semibold text-gray-700">{link.label}</p>
                </div>
              </div>
            </Link>
          ))}
          <div
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer flex items-center justify-center w-36 flex-col"
            onClick={handleLogout}
          >
            <div className="p-4 rounded-full bg-green-400 text-white">
              <FiLogOut />
            </div>
            <div className="mt-2 text-right">
              <p className="font-semibold text-gray-700">تسجيل الخروج</p>
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas Menu */}
      {showCart && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"
          onClick={handleCloseCart}
        >
          <div className="fixed top-0 right-0 w-60 bg-white p-4">
            <button
              className="text-lg font-bold text-blue-500"
              onClick={handleCloseCart}
            >
              X
            </button>
            <h3 className="text-xl font-bold text-gray-700 mb-4">القائمة</h3>
            <div className="space-y-4">
              {linksToDisplay.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={handleCloseCart}
                  className="block text-gray-700"
                >
                  {link.label}
                </Link>
              ))}
              <button
                className="w-full py-2 bg-green-400 text-white font-semibold rounded-lg mt-4"
                onClick={handleLogout}
              >
                تسجيل الخروج
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
