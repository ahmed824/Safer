import axios from 'axios';
import { baseUrl } from '../baseUrl';

const authService = {
  signup: async (signupData) => {
    try {
      const response = await axios.post(
        `${baseUrl}/rest/tables.city/signUp`,
        signupData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || 'خطأ في التسجيل');
      }
      throw new Error('فشل الاتصال بالخادم');
    }
  }
};

export default authService;
