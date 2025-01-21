"use client";
import React, { useEffect, useRef } from "react";

export default function TravelModal({ visible, onHide, travels = [], isLoading }) {
  const modalRef = useRef(null); // Reference to the modal content

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [visible]);

  const handleBackdropClick = (e) => {
    // Close the modal if clicked outside the modal content
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onHide();
    }
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
        onClick={handleBackdropClick}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
        <div
          ref={modalRef} // Attach the reference to the modal content
          className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl p-6 sm:p-8 lg:p-10 transform transition-all"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b-2 border-gray-300">
            <h2 className="text-2xl font-semibold text-gray-800">الرحلات المتاحة</h2>
            <button
              onClick={onHide}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {isLoading ? (
              <div className="flex justify-center items-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-main"></div>
              </div>
            ) : travels.length === 0 ? (
              <div className="text-center p-4 text-gray-600">
                لا توجد رحلات متاحة للوجهة المحددة
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {travels.map((travel) => (
                  <div
                    key={travel.id}
                    className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {travel.companyName}
                        </h3>
                        <div className="mt-2 space-y-1">
                          <p className="text-sm text-gray-600">
                            الوقت: {travel.startTime} - {travel.endTime}
                          </p>
                          <p className="text-sm text-gray-600">
                            الأيام: {travel.days.join(" - ")}
                          </p>
                        </div>
                      </div>
                      <div className="text-left">
                        <span className="text-xl font-bold text-main">
                          {travel.price} ريال
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
