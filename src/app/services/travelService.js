import axios from 'axios';
import { baseUrl } from '@/app/baseUrl';

const travelService = {
  searchTravels: async (fromId, toId) => {
    try {
      const response = await axios.post(`${baseUrl}/rest/tables.travel/search`, {
        fromCity: fromId,
        toCity: toId
      });
      return response.data.travels || [];
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch travels');
    }
  }
};

export default travelService;