'use client';
import {  IconCheck ,IconLoader3 } from '@tabler/icons-react';
import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';

const Announcement = () => {
  const [formData, setFormData] = useState({
    announcedby: '',
    clubname: '',
    clubId: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
      if (!token) {
        alert('You must be logged in to create an announcement.');
        return;
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/announcement/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Announcement created successfully!');
      router.push('/club/announcement'); // Redirect to the announcements page
    } catch (err) {
      console.error('Error creating announcement:', err);
      alert('Failed to create announcement. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">
           Announcement
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium">
              AnnouncedBy
            </label>
            <input
              type="text"
              id="announcedby"
              name="announcedby"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter the announcement title"
            />
          </div>

          {/* AnnouncedBy */}
          <div>
            <label
              htmlFor="clubname"
              className="block text-gray-700 font-medium"
            >
              Club Name
            </label>
            <textarea
              id="clubname"
              name="clubname"
              value={formData.clubname}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter the announcement "
              rows="4"
            ></textarea>
          </div>

          {/* Club ID */}
          <div>
            <label htmlFor="clubId" className="block text-gray-700 font-medium">
              Club ID
            </label>
            <input
              type="text"
              id="clubid"
              name="clubid"
              value={formData.clubId}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter the club ID"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-2 text-white font-semibold rounded ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {loading ? 'Creating...' : ' Announcement'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Announcement;