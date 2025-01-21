import axios from 'axios';
import { baseUrl } from '@/app/baseUrl';

const companyService = {
  saveCompany: async (companyData) => {
    try {
      const response = await axios.post(
        `${baseUrl}/rest/tables.city/saveCompany`,
        companyData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to save company');
    }
  }
};

export default companyService;