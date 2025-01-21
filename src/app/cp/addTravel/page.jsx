'use client'
import React from 'react';
import AddTravelButton from './AddTravelButton/page';
import TravelTable from './TravelTable/page';

export default function AddTravel() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">الرحلات</h1>
        <AddTravelButton />
      </div>
      <TravelTable />
    </div>
  );
}
