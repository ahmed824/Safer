"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useQuery } from "@tanstack/react-query";
import authTravel from "@/app/services/authTravel";
import citiesService from "@/app/services/citiesService";
import busService from "@/app/services/busService";
import daysService from "@/app/services/daysService";
import Loader from "@/app/Loader/page";

const TravelSchema = Yup.object().shape({
  sourceCity: Yup.string().required("اختيار المدينة مطلوب"),
  DestCity: Yup.string()
    .required("اختيار المدينة مطلوب")
    .test("different-cities", "لا يمكن اختيار نفس المدينة", function (value) {
      return value !== this.parent.sourceCity;
    }),
  Bus: Yup.string().required("اختيار الحافلة مطلوب"),
  price: Yup.number().required("السعر مطلوب").min(1, "السعر يجب أن يكون أكبر من 0"),
  leaveTime: Yup.string().required("مطلوب"),
  presenceTime: Yup.string().required("مطلوب"),
  DaysPojo: Yup.array()
    .min(1, "يجب اختيار يوم واحد على الأقل")
    .required("اختيار الأيام مطلوب"),
});

export default function AddTravelForm({ onClose }) {
  // Queries
  const { data: busesData, isLoading: isLoadingBuses } = useQuery({
    queryKey: ["buses"],
    queryFn: busService.getBuses,
  });

  const { data: citiesData, isLoading: isLoadingCities } = useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const response = await citiesService.getCities();
      return response.cities;
    },
  });

  const { data: daysData, isLoading: isLoadingDays } = useQuery({
    queryKey: ["days"],
    queryFn: daysService.getDays,
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const userId = localStorage.getItem('userId');
      
      if (!userId) {
        throw new Error('User not authenticated');
      }

      const formattedValues = {
        ...values,
        sourceCity: Number(values.sourceCity),
        DestCity: Number(values.DestCity),
        Bus: Number(values.Bus),
        company: Number(userId),
        price: Number(values.price),
        DaysPojo: values.DaysPojo.map(Number),
      };

      await authTravel.saveTravel(formattedValues);
      resetForm();
      onClose();
    } catch (error) {
      console.log("Error saving travel:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoadingCities || isLoadingBuses || isLoadingDays) {
    return <Loader />;
  }

  return (
    <Formik
      initialValues={{
        sourceCity: "",
        DestCity: "",
        Bus: "",
        price: "",
        leaveTime: "",
        presenceTime: "",
        DaysPojo: [],
      }}
      validationSchema={TravelSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Cities Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">من</label>
              <Field
                as="select"
                name="sourceCity"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-main focus:ring-main p-2"
              >
                <option value="">اختر المدينة</option>
                {citiesData?.map((city) => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))}
              </Field>
              <ErrorMessage name="sourceCity" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">إلى</label>
              <Field
                as="select"
                name="DestCity"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-main focus:ring-main p-2"
              >
                <option value="">اختر المدينة</option>
                {citiesData?.map((city) => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))}
              </Field>
              <ErrorMessage name="DestCity" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Bus Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">الحافلة</label>
              <Field
                as="select"
                name="Bus"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-main focus:ring-main p-2"
              >
                <option value="">اختر الحافلة</option>
                {busesData?.map((bus) => (
                  <option key={bus.id} value={bus.id}>{bus.name}</option>
                ))}
              </Field>
              <ErrorMessage name="Bus" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Price Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">السعر</label>
              <Field
                name="price"
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-main focus:ring-main p-2"
                placeholder="أدخل السعر"
              />
              <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Time Inputs */}
            <div>
              <label className="block text-sm font-medium text-gray-700">وقت البداية</label>
              <Field
                name="leaveTime"
                type="time"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-main focus:ring-main p-2"
              />
              <ErrorMessage name="leaveTime" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">وقت النهاية</label>
              <Field
                name="presenceTime"
                type="time"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-main focus:ring-main p-2"
              />
              <ErrorMessage name="presenceTime" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Days Selection */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">أيام الأسبوع</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {daysData?.map((day) => (
                  <label key={day.id} className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <Field
                        type="checkbox"
                        name="DaysPojo"
                        value={day.id.toString()}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 
                        checked:border-main checked:bg-main transition-all duration-200 ease-in-out
                        focus:outline-none focus:ring-2 focus:ring-main/20"
                      />
                      <svg
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-3 h-3 pointer-events-none opacity-0 peer-checked:opacity-100
                        text-white transition duration-200 ease-in-out"
                        fill="none"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="mr-3 text-sm text-gray-700 group-hover:text-gray-900">
                      {day.name}
                    </span>
                  </label>
                ))}
              </div>
              <ErrorMessage name="DaysPojo" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 mx-2 hover:bg-gray-50"
            >
              إلغاء
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-main mx-2 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
            >
              {isSubmitting ? "جاري الحفظ..." : "حفظ"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
