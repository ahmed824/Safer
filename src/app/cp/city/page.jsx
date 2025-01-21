"use client";
import React, { useState, useRef, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast"; // Add Toast
import citiesService from "@/app/services/citiesService";

export default function CitiesPage() {
  const [page, setPage] = useState(0);
  const [searchName, setSearchName] = useState("");
  const queryClient = useQueryClient();
  const toast = useRef(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [cityName, setCityName] = useState("");

  // Query to fetch cities
  const { data, isLoading } = useQuery({
    queryKey: ["cities", page, searchName],
    queryFn: () => citiesService.getCities(page, searchName),
  });

  const cities = data?.cities || [];
  const totalCount = data?.totalCount || 0;

  // Mutation to add new city
  const addCityMutation = useMutation({
    mutationFn: async (cityData) => {
      return await citiesService.saveCity(cityData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
      setModalVisible(false);
      setCityName("");
      toast.current.show({
        severity: "success",
        summary: "نجاح",
        detail: "تمت إضافة المدينة بنجاح",
        life: 3000,
      });
    },
    onError: (error) => {
      toast.current.show({
        severity: "error",
        summary: "خطأ",
        detail: error.message,
        life: 3000,
      });
    },
  });

  const handleAddCity = () => {
    if (!cityName.trim()) {
      toast.current.show({
        severity: "warn",
        summary: "تنبيه",
        detail: "يرجى إدخال اسم المدينة",
        life: 3000,
      });
      return;
    }

    addCityMutation.mutate({ name: cityName });
  };

  // Modal ref and click outside handler remain the same
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-8" dir="rtl">
      <Toast ref={toast} />
      <div className="max-w-4xl mx-auto">
        <Button
          label="إضافة مدينة جديدة"
          onClick={() => setModalVisible(true)}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        />

        {isLoading ? (
          <div className="text-center">جاري التحميل...</div>
        ) : (
          <DataTable
            value={cities}
            paginator
            rows={10}
            className="min-w-full bg-white border border-gray-300 rounded-lg"
          >
            <Column className="text-right" field="id" header="ID" />
            <Column className="text-right" field="name" header="اسم المدينة" />
          </DataTable>
        )}

        {isModalVisible && (
          <div className="modal-container fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div
              ref={modalRef}
              className="modal-content bg-white p-6 rounded-lg shadow-lg w-96"
            >
              <h2 className="text-xl font-bold mb-4">إضافة مدينة جديدة</h2>
              <div className="mb-4">
                <label
                  htmlFor="cityName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  اسم المدينة
                </label>
                <InputText
                  id="cityName"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                  autoFocus
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  label="إضافة"
                  onClick={handleAddCity}
                  className="bg-green-600 text-white"
                  loading={addCityMutation.isPending}
                />
                <Button
                  label="إلغاء"
                  onClick={() => setModalVisible(false)}
                  className="bg-gray-500 text-white"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
