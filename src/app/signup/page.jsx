"use client";
import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Toast } from "primereact/toast";
import authService from "../services/authService";
import { SignupSchema } from "../schemas/signupSchema";

export default function Signup() {
  const toast = useRef(null);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data) => {
      return await authService.signup(data);
    },
    onSuccess: (data) => {
      toast.current.show({
        severity: "success",
        summary: "نجاح",
        detail: "تم إنشاء الحساب بنجاح",
        life: 3000,
      });

      setTimeout(() => {
        router.push("/login");
      }, 1500);
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

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const signupData = {
        name: values.name,
        mobile: values.mobile,
        email: values.email,
        userName: values.userName,
        password: values.password,
        Rol: values.role,
      };

      await mutation.mutateAsync(signupData);
      resetForm();
    } catch (error) {
      console.log("Signup error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-[80vh] flex items-center justify-center p-4"
    >
      <Toast ref={toast} position="top-center" />
      <div className="bg-slate-100 p-8 rounded-xl shadow-2xl w-full max-w-md">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">إنشاء حساب جديد</h2>
          <p className="text-gray-600 mt-2">أدخل بياناتك لإنشاء حساب</p>
        </div>

        <Formik
          initialValues={{
            name: "",
            mobile: "",
            email: "",
            userName: "",
            password: "",
            confirmPassword: "",
            role: "User",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form className="space-y-4">
              {/* Name Field */}
              <FormField
                label="الاسم الكامل"
                name="name"
                type="text"
                placeholder="أدخل اسمك الكامل"
                touched={touched.name}
                error={errors.name}
              />

              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  نوع الحساب
                </label>
                <div role="group" className="flex gap-4">
                  <label className="flex items-center cursor-pointer">
                    <Field
                      type="radio"
                      name="role"
                      value="User"
                      className="w-4 h-4 text-main bg-gray-100 border-gray-300 focus:ring-main focus:ring-2 cursor-pointer
        checked:bg-main checked:hover:bg-main checked:focus:bg-main
        appearance-none rounded-full border
        checked:border-main checked:after:bg-main
        relative after:absolute after:content-[''] after:top-1/2 after:left-1/2 
        after:h-[8px] after:w-[8px] after:rounded-full after:bg-white
        after:-translate-x-1/2 after:-translate-y-1/2 after:hidden
        checked:after:block"
                    />
                    <span className="text-gray-700 mr-2">مستخدم</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <Field
                      type="radio"
                      name="role"
                      value="Company"
                      className="w-4 h-4 text-main bg-gray-100 border-gray-300 focus:ring-main focus:ring-2 cursor-pointer
        checked:bg-main checked:hover:bg-main checked:focus:bg-main
        appearance-none rounded-full border
        checked:border-main checked:after:bg-main
        relative after:absolute after:content-[''] after:top-1/2 after:left-1/2 
        after:h-[8px] after:w-[8px] after:rounded-full after:bg-white
        after:-translate-x-1/2 after:-translate-y-1/2 after:hidden
        checked:after:block"
                    />
                    <span className="text-gray-700 mr-2">شركة</span>
                  </label>
                </div>
                <ErrorMessage
                  name="role"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Mobile Field */}
              <FormField
                label="رقم الهاتف"
                name="mobile"
                type="text"
                placeholder="أدخل رقم هاتفك"
                touched={touched.mobile}
                error={errors.mobile}
              />

              {/* Email Field */}
              <FormField
                label="البريد الإلكتروني"
                name="email"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                touched={touched.email}
                error={errors.email}
              />

              {/* Username Field */}
              <FormField
                label="اسم المستخدم"
                name="userName"
                type="text"
                placeholder="أدخل اسم المستخدم"
                touched={touched.userName}
                error={errors.userName}
              />

              {/* Password Field */}
              <FormField
                label="كلمة المرور"
                name="password"
                type="password"
                placeholder="أدخل كلمة المرور"
                touched={touched.password}
                error={errors.password}
              />

              {/* Confirm Password Field */}
              <FormField
                label="تأكيد كلمة المرور"
                name="confirmPassword"
                type="password"
                placeholder="أعد إدخال كلمة المرور"
                touched={touched.confirmPassword}
                error={errors.confirmPassword}
              />

              <button
                type="submit"
                disabled={isSubmitting || mutation.isPending}
                className="w-full bg-main text-white p-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {mutation.isPending ? (
                  <div className="flex items-center justify-center">
                    <span className="mr-2">جاري التسجيل</span>
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                  </div>
                ) : (
                  "إنشاء حساب"
                )}
              </button>
            </Form>
          )}
        </Formik>

        <div className="mt-6 text-center">
          <span className="text-gray-600">لديك حساب بالفعل؟</span>{" "}
          <Link
            href="/login"
            className="text-main hover:text-green-600 hover:underline font-medium transition duration-200"
          >
            تسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  );
}

// Reusable Form Field Component
const FormField = ({ label, name, type, placeholder, touched, error }) => (
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    <Field
      type={type}
      name={name}
      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200
        ${touched && error ? "border-red-500" : "border-gray-300"}`}
      placeholder={placeholder}
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  </div>
);
