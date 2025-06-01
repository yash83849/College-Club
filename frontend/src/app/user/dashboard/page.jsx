'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';

const Dashboard = () => {
  const [clublist, setclubList] = useState([]);
  const token = localStorage.getItem('token');

  const fetchClubs = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/club/getbyuser`, {
      headers: {
        'x-auth-token': token,
      }
    })
      .then((res) => {
        setclubList(res.data);
      }).catch((err) => {
        console.log(err);
        if (err.response.status === 403 || err.response.status === 401) {
          toast.error('Please Login to Continue');
          router.push('/login');
        }
      });
  }

  useEffect(() => {
    fetchClubs();
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">My Clubs</h1>

          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white overflow-hidden shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-md">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Clubs</p>
                <p className="text-2xl font-semibold text-gray-900">{clublist.length}</p>
              </div>
            </div>
          </div>
          {/* Add more stat cards here */}
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clublist.map((club) => (
            <div key={club._id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{club.name}</h3>
                  <p className="text-sm text-gray-200">{new Date(club.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>

                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/club/announcement/${club._id}`}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Announcements
                  </Link>
                  <Link
                    href={`/club/details/${club._id}`}
                    className="text-sm border border-blue-500 px-4 py-2 rounded-lg font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View Details →
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;