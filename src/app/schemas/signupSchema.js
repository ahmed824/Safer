import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('الاسم مطلوب')
    .min(2, 'الاسم قصير جداً')
    .max(50, 'الاسم طويل جداً'),
  role: Yup.string()
    .required('اختيار نوع الحساب مطلوب')
    .oneOf(['User', 'Company'], 'يرجى اختيار نوع حساب صحيح'),
  mobile: Yup.string()
    .required('رقم الهاتف مطلوب')
    .matches(/^[0-9]+$/, 'رقم الهاتف يجب أن يحتوي على أرقام فقط')
    .min(10, 'رقم الهاتف قصير جداً')
    .max(15, 'رقم الهاتف طويل جداً'),
  email: Yup.string()
    .email('البريد الإلكتروني غير صالح')
    .required('البريد الإلكتروني مطلوب'),
  userName: Yup.string()
    .required('اسم المستخدم مطلوب')
    .min(3, 'اسم المستخدم قصير جداً')
    .max(20, 'اسم المستخدم طويل جداً'),
  password: Yup.string()
    .required('كلمة المرور مطلوبة')
    .min(6, 'كلمة المرور قصيرة جداً'),
  confirmPassword: Yup.string()
    .required('تأكيد كلمة المرور مطلوب')
    .oneOf([Yup.ref('password'), null], 'كلمات المرور غير متطابقة'),
});
