'use client';
import { useParams } from 'next/navigation';
import React from 'react'

const Details = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Club Information Column */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Club Information</h2>
          <div className="space-y-4">

          </div>
        </div>

        {/* Membership Column */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Members</h2>
          <div className="space-y-4">
          </div>
        </div>

        {/* Announcements Column */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Announcements</h2>
          <div className="space-y-4">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;