import axios from 'axios';
import { baseUrl } from '@/app/baseUrl';

const authTravel = {
  // Get travel with pagination and search
  getTravel: async (page = 0, name = '') => {
    try {
      const response = await axios.post(
        `${baseUrl}/rest/tables.travel/gettravel`,
        {
          page: page,
          name: name
        }
      );
      
      return {
        sourceCity: response.data.list || [],
        DestCity: response.data.list || [],
        presenceTime: response.data.count || 0, //time
        leaveTime: response.data.count || 0, //time
        DaysPojo: response.data.count || 0, //week dayes
      };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch travel');
    }
  },

  // Save new travel
  saveTravel: async (travelData) => {
    try {
      const response = await axios.post(
        `${baseUrl}/rest/tables.travel/saveTravel`,
        travelData
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to save travel');
    }
  }
};

export default authTravel;
