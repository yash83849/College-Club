'use client';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageUser = () => {

  const [userList, setUserList] = useState([]);
  const token = localStorage.getItem('token');

  const router = useRouter();

  const fetchUsers = () => {
    axios.get('http://localhost:5000/user/getall', {
      headers: {
          'x-auth-token': token
      }
    })
      .then((result) => {
        console.log(result.data);
        setUserList(result.data);
      }).catch((err) => {
        console.log(err);

        if (err.response.status === 403 || err.response.status === 401) {
          toast.error('Please Login to Continue');
          router.push('/login');
        }
      });




  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    const res = await axios.delete(`http://localhost:5000/user/delete/${id}`);
    if (res.status === 200) {
      toast.success('User deleted successfully');
      fetchUsers();
    } else {
      toast.error('Failed to delete User');
    }
  }

  const updateUser = async (id) => {
    const res = await axios.put(`http://localhost:5000/user/put/${id}`);
    if (res.status === 200) {
      toast.success('User update successfully');
      fetchUsers();
    } else {
      toast.error('Failed to update User');
    }
  }


  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Manage Users</h2>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow">
              + Add User
            </button>
          </div>
          {/* Table */}
          <div className="overflow-x-auto rounded-2xl">
            <table className="min-w-full text-sm text-gray-700">
              <thead className="bg-indigo-100 text-indigo-800 uppercase text-xs font-bold">
                <tr>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Email</th>
                  <th className="px-6 py-4 text-left">Role</th>
                  <th className="px-6 py-4 text-center">clubs</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Example Row */}
                {
                  userList.map((user) => {
                    return <tr className="hover:bg-gray-50" key={user._id}>
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4 font-medium">{user.email}</td>
                      <td className="px-6 py-4">{user.role}</td>
                      <td className="px-6 py-4">{user.clubs}</td>
                      <td className="px-6 py-4 text-center space-x-2">
                        <button
                          onClick={() => {
                            updateUser(user._id)
                          }}
                          className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            deleteUser(user._id)
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

export default ManageUser;