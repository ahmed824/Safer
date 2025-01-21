'use client'
import React, { useEffect, useState } from 'react';
import authTravel from '@/app/services/authTravel';
import Loader from '@/app/Loader/page';

export default function TravelTable() {
  const [travels, setTravels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTravels();
  }, []);

  const fetchTravels = async () => {
    try {
      const response = await authTravel.getTravel();
      setTravels(response.travelFrom); // Adjust based on your API response
      setLoading(false);
    } catch (error) {
      console.log('Error fetching travels:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader  className='flex justify-center justify-items-center '/>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">من</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">إلى</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">وقت البداية</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">وقت النهاية</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">أيام الأسبوع</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {travels.map((travel, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{travel.travelFrom}</td>
              <td className="px-6 py-4 whitespace-nowrap">{travel.travelTo}</td>
              <td className="px-6 py-4 whitespace-nowrap">{travel.traveStart}</td>
              <td className="px-6 py-4 whitespace-nowrap">{travel.traveEnd}</td>
              <td className="px-6 py-4 whitespace-nowrap">{travel.traveDayes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
