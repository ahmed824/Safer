'use client'
import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useMutation } from '@tanstack/react-query';
import companyService from '@/app/services/companyService';

export default function Company() {
  const toast = useRef(null);
  const [companyName, setCompanyName] = useState('');

  const mutation = useMutation({
    mutationFn: (data) => companyService.saveCompany(data),
    onSuccess: () => {
      toast.current.show({
        severity: 'success',
        summary: 'نجاح',
        detail: 'تم حفظ الشركة بنجاح',
        life: 3000
      });
      setCompanyName(''); // Reset form
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
    if (!companyName.trim()) {
      toast.current.show({
        severity: 'warn',
        summary: 'تنبيه',
        detail: 'يرجى إدخال اسم الشركة',
        life: 3000
      });
      return;
    }

    mutation.mutate({ name: companyName });
  };

  return (
    <div className="p-8" dir="rtl">
      <Toast ref={toast} />
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">إضافة شركة جديدة</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="companyName" className="mb-2 font-medium">
              اسم الشركة
            </label>
            <InputText
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="p-2 border rounded-md"
              placeholder="أدخل اسم الشركة"
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
    </div>
  );
}
