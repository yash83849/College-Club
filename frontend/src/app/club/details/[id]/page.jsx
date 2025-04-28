'use client';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  IconUsers, 
  IconCalendarEvent, 
  IconInfoCircle, 
  IconPlus, 
  IconClockHour4, 
  IconTag,
  IconStatusChange,
  IconUser,
  IconBellRinging,
  IconCalendar
} from '@tabler/icons-react';

const Details = () => {
  const { id } = useParams();
  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [memberDetails, setMemberDetails] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loadingAnnouncements, setLoadingAnnouncements] = useState(true);

  useEffect(() => {
    const fetchClubDetails = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/club/getbyid/${id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch club details');
        }
        
        const data = await response.json();
        setClub(data);

        // Fetch member details if there are members
        if (data.members && data.members.length > 0) {
          try {
            const memberPromises = data.members.map(memberId => 
              fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getbyid/${memberId}`)
                .then(res => res.json())
                .catch(err => ({ name: "Unknown Member" }))
            );
            
            const memberData = await Promise.all(memberPromises);
            setMemberDetails(memberData);
          } catch (memberErr) {
            console.error("Error fetching member details:", memberErr);
          }
        }
        
        // Fetch announcements for the club
        try {
          const announcementsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/announcement/getbyclub/${id}`);
          
          if (announcementsResponse.ok) {
            const announcementsData = await announcementsResponse.json();
            setAnnouncements(announcementsData);
          } else {
            console.error('Failed to fetch announcements');
          }
        } catch (announcementErr) {
          console.error("Error fetching announcements:", announcementErr);
        } finally {
          setLoadingAnnouncements(false);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching club details:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (id) {
      fetchClubDetails();
    }
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center h-64">
        <div className="text-xl font-semibold">Loading club details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!club) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <p>Club not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Club Information Column */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <IconInfoCircle className="mr-2 text-blue-500" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Club Information</h2>
          </div>
          <div className="space-y-4">
            {club.image && (
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={club.image} 
                  alt={club.name}
                  className="rounded-md object-cover w-full h-full"
                />
              </div>
            )}
            <h1 className="text-3xl font-bold text-gray-900">{club.name}</h1>
            <div className="flex items-center">
              <IconTag className="mr-1 text-blue-500" size={16} />
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm inline-block">
                {club.clubtype}
              </div>
            </div>
            <p className="text-gray-700 mt-2">{club.description}</p>
            <div className="border-t pt-4 mt-4">
              <p className="flex items-center text-gray-600 text-sm mb-2">
                <IconStatusChange className="mr-2 text-gray-500" size={16} />
                <span className="font-semibold mr-1">Status:</span> {club.status === "false" ? "Inactive" : "Active"}
              </p>
              <p className="flex items-center text-gray-600 text-sm mb-2">
                <IconUser className="mr-2 text-gray-500" size={16} />
                <span className="font-semibold mr-1">Created by:</span> {club.createdBy || "Unknown"}
              </p>
              <p className="flex items-center text-gray-600 text-sm">
                <IconClockHour4 className="mr-2 text-gray-500" size={16} />
                <span className="font-semibold mr-1">Created on:</span> {formatDate(club.createdAt)}
              </p>
            </div>
          </div>
        </div>

        {/* Membership Column */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <IconUsers className="mr-2 text-green-500" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Members</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">Total members:</span> {club.members.length}
            </p>
            
            {/* Member list */}
            <div className="mt-4">
              <h3 className="font-medium text-gray-700 mb-2">Member List:</h3>
              {memberDetails.length > 0 ? (
                <ul className="space-y-2">
                  {memberDetails.map((member, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <IconUser className="mr-2 text-gray-400" size={16} />
                      {member.name || "Unknown Member"}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">No member information available</p>
              )}
            </div>
          </div>
        </div>

        {/* Announcements Column */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <IconBellRinging className="mr-2 text-purple-500" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
            </div>
            <Link 
              href={`/club/announcement/${id}`}
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-2 rounded flex items-center transition-colors"
            >
              <IconPlus className="mr-1" size={16} /> Add
            </Link>
          </div>
          <div className="space-y-4">
            {loadingAnnouncements ? (
              <p className="text-gray-500">Loading announcements...</p>
            ) : announcements && announcements.length > 0 ? (
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement._id} className="p-4 bg-gray-50 rounded-md">
                    <h3 className="font-medium text-lg">{announcement.title}</h3>
                    <p className="text-gray-700 mt-1">{announcement.description}</p>
                    <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <IconCalendar className="mr-1" size={14} />
                        {formatDate(announcement.createdAt)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No announcements at this time.</p>
            )}
            
            {/* Show events section if there are any */}
            {club.events && (
              <div className="mt-6">
                <h3 className="font-medium text-lg flex items-center mb-3">
                  <IconCalendarEvent className="mr-2 text-purple-500" size={18} />
                  Upcoming Events
                </h3>
                <p className="text-gray-700 p-3 bg-gray-50 rounded">{club.events}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;