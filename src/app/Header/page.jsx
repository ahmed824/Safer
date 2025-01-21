"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import header from "../../../public/header.png";
import AreaFilter from "./Filter/page";
import TravelModal from "./TravelModal/page";
import travelService from "@/app/services/travelService";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [searchParams, setSearchParams] = useState(null);
  const [hasError, setHasError] = useState(false);
  // Query for travels
  const {
    data: travels = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["travels", searchParams],
    queryFn: () =>
      travelService.searchTravels(
        searchParams?.fromArea?.id,
        searchParams?.toArea?.id
      ),
    enabled: !!searchParams, // Only run query when search params are set
  });

  const handleSearch = (fromArea, toArea) => {
    if (!fromArea || !toArea) {
      alert("الرجاء اختيار المدن");
      return;
    }
    setSearchParams({ fromArea, toArea });
    setShowModal(true);
    refetch();
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header Image Container */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px]">
        <Image
          src={header}
          alt="Header Image"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* Filter Section */}
      <div className="px-4 md:px-8 lg:px-12 bg-black/85 py-5 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center">
            {/* Filter Component */}
            <div>
              <AreaFilter
                onSelectionChange={(fromArea, toArea) => {
                  setSearchParams({ fromArea, toArea });
                }}
                onErrorChange={setHasError}
              />
            </div>

            {/* Search Button */}
            <div className="w-full sm:w-auto flex justify-center">
              <button
                onClick={() =>
                  handleSearch(searchParams?.fromArea, searchParams?.toArea)
                }
                
                className="w-fit sm:w-auto bg-secondary text-white px-6 py-3 rounded-md text-lg 
                sm:px-8 sm:py-3 sm:text-xl 
                md:px-10 md:py-3.5
                hover:bg-main/90 transition-all duration-300 
                focus:ring-2 focus:ring-offset-2 focus:ring-secondary
                active:transform active:scale-95
                disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={
                  hasError || !searchParams?.fromArea || !searchParams?.toArea
                }
              >
                بحث
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Results Modal */}
      <TravelModal
        visible={showModal}
        onHide={() => setShowModal(false)}
        travels={travels}
        isLoading={isLoading}
      />
    </div>
  );
}
