import axios from 'axios';
import { baseUrl } from '../baseUrl';

const authSignUp = {
  login: async (credentials) => {
    try {
      const response = await axios.post(
        `${baseUrl}/rest/tables.city/login`,
        credentials,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Check if login was unsuccessful (saved: false)
      if (response.data.saved === false) {
        throw new Error(response.data.reason);
      }

      // Check if response has valid id and rank
      if (!response.data.id || !response.data.rank) {
        throw new Error('بيانات المستخدم غير مكتملة');
      }

      return response.data;
    } catch (error) {
      // If it's our custom error (from above checks), throw it directly
      if (error.message) {
        throw error;
      }
      // For network or other errors
      if (error.response) {
        throw new Error(error.response.data.reason || 'خطأ في تسجيل الدخول');
      }
      // For connection errors
      throw new Error('فشل الاتصال بالخادم');
    }
  }
};

export default authSignUp;
