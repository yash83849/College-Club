'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

const ViewClub = () => {
  const { id } = useParams();
  const [clubDetails, setClubDetails] = useState(null);

  const fetchClubData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/club/getbyid/${id}`);
      setClubDetails(res.data);
    } catch (err) {
      console.error('Error fetching club data:', err);
    }
  };

  const requestMembership = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
      if (!token) {
        alert('You must be logged in to request membership.');
        return;
      }

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/club/addmember/${id}`, {},
        {
          headers: {
            'x-auth-token': token, // Send the token in the Authorization header
          },
        }
      );
      toast.success('Membership request sent successfully!');
    } catch (err) {
      console.error('Error requesting membership:', err);
      if (err.response && err.response.status === 403) {
        toast.error('You are not authorized to request membership for this club.');
      } else {
        toast.error('An error occurred while requesting membership.');
      }
    }
  };

  useEffect(() => {
    fetchClubData();
  }, []);

  if (clubDetails === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src={clubDetails.image}
                alt="club"
                className="w-full h-auto rounded-lg shadow-md mb-4"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">{clubDetails.name}</h2>
              <p className="text-gray-600 mb-4">{clubDetails.description}</p>
              <button
                onClick={requestMembership}
                className="p-2 bg-blue-500 text-white rounded"
              >
                Request Membership
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewClub;