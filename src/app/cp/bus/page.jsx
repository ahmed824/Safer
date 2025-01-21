'use client'
import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useMutation, useQuery } from '@tanstack/react-query';
import busService from '@/app/services/busService';
import BusTable from './BusTable/page';

export default function Bus() {
  const toast = useRef(null);
  const [busName, setBusName] = useState('');
  const [busCount, setBusCount] = useState(null);

  // Query for fetching buses
  const { data: buses = [], isLoading, refetch } = useQuery({
    queryKey: ['buses'],
    queryFn: busService.getBuses
  });

  const mutation = useMutation({
    mutationFn: (data) => busService.saveBus(data),
    onSuccess: () => {
      toast.current.show({
        severity: 'success',
        summary: 'نجاح',
        detail: 'تم حفظ الحافلة بنجاح',
        life: 3000
      });
      // Reset form and refetch data
      setBusName('');
      setBusCount(null);
      refetch();
    },
    onError: (error) => {
      toast.current.show({
        severity: 'error',
        summary: 'خطأ',
        detail: error.message,
        life: 3000
      });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!busName.trim() || !busCount) {
      toast.current.show({
        severity: 'warn',
        summary: 'تنبيه',
        detail: 'يرجى إدخال جميع البيانات المطلوبة',
        life: 3000
      });
      return;
    }

    mutation.mutate({
      name: busName,
      count: busCount
    });
  };

  return (
    <div className="p-8" dir="rtl">
      <Toast ref={toast} />
      
      {/* Form Section */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">إضافة حافلة جديدة</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="busName" className="mb-2 font-medium">
              اسم الحافلة
            </label>
            <InputText
              id="busName"
              value={busName}
              onChange={(e) => setBusName(e.target.value)}
              className="p-2 border rounded-md"
              placeholder="أدخل اسم الحافلة"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="busCount" className="mb-2 font-medium">
              عدد المقاعد
            </label>
            <InputNumber
              id="busCount"
              value={busCount}
              onValueChange={(e) => setBusCount(e.value)}
              className="p-2 border rounded-md"
              placeholder="أدخل عدد المقاعد"
              min={0}
            />
          </div>

          <Button
            type="submit"
            label="حفظ"
            className="w-full bg-green-600 text-white"
            loading={mutation.isPending}
          />
        </form>
      </div>

      {/* Table Section */}
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">قائمة الحافلات</h2>
        <BusTable buses={buses} loading={isLoading} />
      </div>
    </div>
  );
}
