'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Addclub from '../add-club/page';

const ManageClub = () => {

  const [ClubList, setClubList] = useState([]);
  const token = localStorage.getItem('token');

  const router = useRouter();

  const fetchClubs = () => {
    axios.get('http://localhost:5000/club/getall', {
      headers: {
        'x-auth-token': token
      }
    })
      .then((result) => {
        console.log(result.data);
        setClubList(result.data);
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
  }, []);

  const deleteClub = async (id) => {
    const res = await axios.delete(`http://localhost:5000/club/delete/${id}`);
    if (res.status === 200) {
      toast.success('Club deleted successfully');
      fetchClubs();
    } else {
      toast.error('Failed to delete CLub');
    }
  }

  const approveClub =  (id, status) => {
     axios.put('http://localhost:5000/club/update/' + id, {approved: status})
    .then((result) => {
      toast.success('club updated successfully');
      fetchClubs();
    }).catch((err) => {
      toast.error('error occured');
      console.log(err);
    });
  
  }


  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Manage Clubs</h2>
            <button 
            
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow">
              + Add Club
            </button>
          </div>
          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search clubs..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Table */}
          <div className="overflow-x-auto rounded-2xl">
            <table className="min-w-full text-sm text-gray-700 ">
              <thead className="bg-indigo-100 text-indigo-800 uppercase text-xs font-bold">
                <tr>
                  <th className="px-6 py-4 text-left">Club Name</th>
                  <th className="px-6 py-4 text-left">Club Type</th>
                  <th className="px-6 py-4 text-left">Members</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Example Row */}
                {
                  ClubList.map((club) => {
                   return <tr className="hover:bg-gray-50" key={club._id}>
                      <td className="px-6 py-4">{club.name}</td>
                      <td className="px-6 py-4 font-medium">{club.clubtype}</td>
                      <td className="px-6 py-4">{club.members}</td>
                      <td className="px-6 py-4">{club.status}</td>
                      <td className="px-6 py-4 text-center space-x-2">
                        <button
                          onClick={() => {
                            approveClub(club._id, !club.approved)
                          }}
                          className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                          {club.approved ? 'Unapprove' : 'Approve'}
                        
                        </button>
                        <button
                          onClick={() => {
                            deleteClub(club._id)
                          }}
                          className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow">
                          Delete
                        </button>
                      </td>
                    </tr>

                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ManageClub;