'use client';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ViewClub = () => {
  const { id } = useParams();
  const router = useRouter();
  const [clubDetails, setClubDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isUserMember, setIsUserMember] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const fetchCurrentUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/profile`, 
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );
      
      setCurrentUserId(res.data._id);
      return res.data._id;
    } catch (err) {
      console.error('Error fetching user profile:', err);
    }
  };

  const fetchClubData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/club/getbyid/${id}`);
      setClubDetails(res.data);
      
      // Check if current user is already a member
      const userId = await fetchCurrentUser();
      if (userId && res.data.members && res.data.members.includes(userId)) {
        setIsUserMember(true);
      }
    } catch (err) {
      console.error('Error fetching club data:', err);
      toast.error('Failed to fetch club details');
    } finally {
      setLoading(false);
    }
  };

  const requestMembership = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('You must be logged in to request membership.');
        router.push('/login');
        return;
      }

      // Check if user is already a member
      if (isUserMember) {
        toast.error('You are already a member of this club!');
        return;
      }

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/club/addmember/${id}`, 
        {},
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );

      toast.success('Membership request sent successfully!');
      setIsUserMember(true);
      
      // Refresh club data to update the UI
      fetchClubData();
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
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading club details...</div>
      </div>
    );
  }

  if (!clubDetails) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Club not found</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .fade-in {\n      animation: fadeIn 0.8s ease-in-out;\n    }\n    @keyframes fadeIn {\n      from { opacity: 0; transform: translateY(20px); }\n      to { opacity: 1; transform: translateY(0); }\n    }\n  "
        }}
      />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 fade-in">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Club Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-indigo-700">
              🎨 {clubDetails.name}
            </h2>
            <p className="text-gray-700 text-lg">
              {clubDetails.description}
            </p>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-indigo-600">Type:</span> {clubDetails.clubtype || "General"}
              </p>
              <p>
                <span className="font-semibold text-indigo-600">Members:</span> {clubDetails.members?.length || 0}
              </p>
              <p>
                <span className="font-semibold text-indigo-600">Status:</span> {clubDetails.status === "false" ? "Inactive" : "Active"}
              </p>
            </div>
            
            {isUserMember ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                You're already a member of this club
              </div>
            ) : (
              <button
                onClick={requestMembership}
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition"
              >
                Join Now
              </button>
            )}
          </div>
          {/* Club Image */}
          <div className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition">
            <img
              src={clubDetails.image || "https://via.placeholder.com/600x400?text=Club+Image"}
              alt={`${clubDetails.name} Club`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/600x400?text=No+Image+Available";
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewClub;
