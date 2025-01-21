import axios from 'axios';
import { baseUrl } from '@/app/baseUrl';

const citiesService = {
  // Get cities with pagination and search
  getCities: async (page = 0, name = '') => {
    try {
      const response = await axios.post(
        `${baseUrl}/rest/tables.city/getcities`,
        {
          page: page,
          name: name
        }
      );
      
      return {
        cities: response.data.list || [],
        totalCount: response.data.count || 0
      };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch cities');
    }
  },

  // Save new city
  saveCity: async (cityData) => {
    try {
      const response = await axios.post(
        `${baseUrl}/rest/tables.city/saveCity`,
        cityData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to save city');
    }
  }
};

export default citiesService;
