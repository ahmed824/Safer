import axios from 'axios';
import { baseUrl } from '@/app/baseUrl';

const busService = {
  getBuses: async () => {
    try {
      const response = await axios.get(`${baseUrl}/rest/tables.city/getBus`);
      return response.data.busList || [];
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch buses');
    }
  },

  saveBus: async (busData) => {
    try {
      const response = await axios.post(
        `${baseUrl}/rest/tables.city/saveBus`,
        busData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to save bus');
    }
  }
};

export default busService;