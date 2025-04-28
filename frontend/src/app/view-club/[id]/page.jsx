'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
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
      const token = localStorage.getItem('token'); // assuming the token is stored in localstorage
      if (!token) {
        alert ('You must be logged in to request membership.');
        return;
      }

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/club/addmember/${id}`, {},
        {
          headers: {
            'x-auth-token': token, // send the token in the authorization header
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
      <>
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
          🎨{clubDetails.name}
        </h2>
        <p className="text-gray-700 text-lg">
         {clubDetails.description}
        </p>
        <div className="space-y-3">
          <p>
            <span className="font-semibold text-indigo-600"></span>
          </p>
          <p>
            <span className="font-semibold text-indigo-600"></span>
        </p>
          <p>
            <span className="font-semibold text-indigo-600"></span> 
          </p>
        </div>
        <button
        onClick={requestMembership}
          href="#"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition"
        >
          Join Now
        </button>
      </div>
      {/* Club Image */}
      <div className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition">
        <img
          src={clubDetails.image}
          alt=" Club"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </main>
 
</>

    </div>
  )
}

export default ViewClub;
