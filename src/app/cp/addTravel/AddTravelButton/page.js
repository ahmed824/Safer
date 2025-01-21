'use client';
import React, { useState } from 'react';
import AddTravelForm from '../AddTravelForm/page';

export default function AddTravelButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCloseModal = (e) => {
    // Close modal if the user clicks outside the modal content
    if (e.target.id === 'overlay') {
      setIsFormOpen(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsFormOpen(true)}
        className="bg-main text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
      >
        انشاء رحلة
      </button>

      {isFormOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">انشاء رحلة جديدة</h2>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <AddTravelForm onClose={() => setIsFormOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
