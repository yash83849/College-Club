'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

const Announcement = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserData(decoded);
      } catch (error) {
        console.error('Error decoding token:', error);
        toast.error('Authentication error');
      }
    }
  }, []);

  const announcementForm = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          toast.error('Please login to create an announcement');
          return;
        }

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/announcement/add`,
          {
            ...values,
            clubId: id,
            createdBy: userData.name,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data);
        toast.success('Announcement posted successfully');
        resetForm();
      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.error || 'Announcement posting failed');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className='mx-auto items-center max-w-lg'>
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Create Announcement
        </h2>
        {userData && (
          <p className="text-sm text-gray-600 mb-4">
            Posting as: {userData.name}
          </p>
        )}
        <form className="space-y-6" onSubmit={announcementForm.handleSubmit}>
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={announcementForm.handleChange}
              value={announcementForm.values.title}
              placeholder="Enter announcement title"
              className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={announcementForm.handleChange}
              value={announcementForm.values.description}
              placeholder="Write your announcement here..."
              className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              required
              rows="4"
            />
          </div>
          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={announcementForm.isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition duration-200"
            >
              {announcementForm.isSubmitting ? 'Posting...' : 'Post Announcement'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Announcement;