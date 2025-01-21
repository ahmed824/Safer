"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useQuery } from "@tanstack/react-query";
import citiesService from "@/app/services/citiesService";

export default function AreaFilter({ onSelectionChange, onErrorChange }) {
  const [selectedFromArea, setSelectedFromArea] = useState(null);
  const [selectedToArea, setSelectedToArea] = useState(null);
  const [error, setError] = useState(""); // State for error message

  const { data: citiesData = [], isLoading: isLoadingCities } = useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const response = await citiesService.getCities();
      return response.cities;
    },
  });

  // Validation function
  const validateSelection = (from, to) => {
    if (from && to && from.id === to.id) {
      setError("لا يمكن اختيار نفس المدينة");
      onErrorChange?.(true); // Pass error state up
    } else {
      setError("");
      onErrorChange?.(false);
    }
  };

  const handleFromChange = (e) => {
    setSelectedFromArea(e.value);
    validateSelection(e.value, selectedToArea);
    onSelectionChange?.(e.value, selectedToArea);
  };

  const handleToChange = (e) => {
    setSelectedToArea(e.value);
    validateSelection(selectedFromArea, e.value);
    onSelectionChange?.(selectedFromArea, e.value);
  };

  return (
    <div className="flex flex-col justify-items-center items-center p-4">
      <div className="flex flex-col gap-6 w-[500px] max-w-md sm:max-w-lg lg:max-w-xl bg-transparent rounded-lg">
        {/* From Area */}
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <label
            htmlFor="fromArea"
            className="text-base sm:text-lg font-semibold text-white sm:whitespace-nowrap"
          >
            من
          </label>
          <Dropdown
            id="fromArea"
            value={selectedFromArea}
            onChange={handleFromChange}
            options={citiesData}
            optionLabel="name"
            placeholder={isLoadingCities ? "Loading..." : "From Area"}
            className="w-full max-[425px]:w-[285px] p-3 text-sm sm:text-base"
            aria-labelledby="fromArea"
          />
        </div>

        {/* To Area */}
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <label
            htmlFor="toArea"
            className="text-base sm:text-lg font-semibold text-white sm:whitespace-nowrap"
          >
            إلى
          </label>
          <Dropdown
            id="toArea"
            value={selectedToArea}
            onChange={handleToChange}
            options={citiesData}
            optionLabel="name"
            placeholder={isLoadingCities ? "Loading..." : "To Area"}
            className="w-full max-[425px]:w-[285px] p-3 text-sm sm:text-base"
            aria-labelledby="toArea"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-base mt-1 bg-white p-2 rounded-md w-fit m-auto">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
