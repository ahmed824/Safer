'use client'
import React, { useRef } from 'react';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Toast } from 'primereact/toast';
import authSignUp from '../services/authSignUp';

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .required('اسم المستخدم مطلوب'),
  password: Yup.string()
    .required('كلمة المرور مطلوبة'),
});

export default function LogIn() {
  const toast = useRef(null);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (credentials) => {
      return await authSignUp.login(credentials);
    },
    onSuccess: (response) => {
      // Store userId and Rank in localStorage
      localStorage.setItem("userId", response.id);
      localStorage.setItem("Rank", response.rank);

      toast.current.show({
        severity: 'success',
        summary: 'نجاح',
        detail: 'تم تسجيل الدخول بنجاح',
        life: 3000
      });

      setTimeout(() => {
        router.push('/BigList');
      }, 1500);
    },
    onError: (error) => {
      toast.current.show({
        severity: 'error',
        summary: 'خطأ',
        detail: error.message,
        life: 3000
      });
    },
});

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const loginData = {
        name: values.name,
        password: values.password,
      };

      await mutation.mutateAsync(loginData);
    } catch (error) {
      console.log('Login error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div dir="rtl" className="flex items-center justify-center mt-16">
      <Toast ref={toast} position="top-center" />
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">تسجيل الدخول</h2>
          <p className="text-gray-600">مرحباً بك مجدداً</p>
        </div>

        <Formik
          initialValues={{
            name: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  اسم المستخدم
                </label>
                <Field
                  type="text"
                  name="name"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200
                    ${touched.name && errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="أدخل اسم المستخدم"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  كلمة المرور
                </label>
                <Field
                  type="password"
                  name="password"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200
                    ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="أدخل كلمة المرور"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex justify-end">
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-main hover:text-green-600 hover:underline transition duration-200"
                >
                  نسيت كلمة المرور؟
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || mutation.isPending}
                className="w-full bg-main text-white p-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {mutation.isPending ? (
                  <div className="flex items-center justify-center">
                    <span className="mr-2">جاري تسجيل الدخول</span>
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                  </div>
                ) : (
                  'دخول'
                )}
              </button>
            </Form>
          )}
        </Formik>

        <div className="mt-6 text-center">
          <span className="text-gray-600">ليس لديك حساب؟</span>{' '}
          <Link 
            href="/signup" 
            className="text-main hover:text-green-600 hover:underline font-medium transition duration-200"
          >
            إنشاء حساب جديد
          </Link>
        </div>
      </div>
    </div>
  );
}
