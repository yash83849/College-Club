'use client';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageClub = () => {

    const [clubList, setClubList] = useState([]);
    const token = localStorage.getItem('token');

    const router = useRouter();

    const fetchClubs = () => {
        axios.get('http://localhost:5000/club/getall', {
            // headers: {
            //     'x-auth-token': token
            // }
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
            toast.error('Failed to delete Club');
        }
    }

    const updateClub = async (id) => {
      const res = await axios.put(`http://localhost:5000/club/put/${id}`);
      if (res.status === 200) {
          toast.success('Club update successfully');
          fetchClubs();
      } else {
          toast.error('Failed to update Club');
      }
  }


    return (
        <div className='bg-gray-200 h-screen py-10'>
            <div className='container mx-auto'>
                <h1 className='text-center text-3xl font-bold'>Manage Clubs</h1>

                <table className='my-5 w-full'>
                    <thead className='border bg-slate-700 border-slate-700 text-white'>
                        <tr>
                            <th className='p-2'>ID</th>
                            <th className='p-2'>Name</th>
                            <th className='p-2'>Email</th>
                            <th className='p-2'>City</th>
                            <th className='p-2'>Registered at</th>
                            <th className='p-2' colSpan={2}></th>
                        </tr>
                    </thead>
                    <tbody className='bg-gray-400'>
                        {
                            clubList.map((club) => {
                                return <tr key={club._id} >
                                    <td className='p-2 border border-gray-300'>{club._id}</td>
                                    <td className='p-2 border border-gray-300'>{club.name}</td>
                                    <td className='p-2 border border-gray-300'>{club.email}</td>
                                    <td className='p-2 border border-gray-300'>{club.city}</td>
                                    <td className='p-2 border border-gray-300'>{club.createdAt}</td>
                                    <td>
                                        <button onClick={() => { deleteClub(club._id) }} className='bg-red-500 text-white px-3 py-1 rounded-full'>
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button  onClick={() => { updateClub(club._id)}} className='bg-blue-500 text-white px-3 py-1 rounded-full'>
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ManageClub;