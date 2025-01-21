import axios from 'axios';
import { baseUrl } from '@/app/baseUrl';

const daysService = {
  getDays: async () => {
    try {
      const response = await axios.get(`${baseUrl}/rest/tables.city/getDays`);
      return response.data.days || [];
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch days');
    }
  }
};

export default daysService;