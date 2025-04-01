'use client';
import { IconAwardFilled } from '@tabler/icons-react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ViewClub = () => {

  const { id } = useParams();
  const [clubDetails, setClubDetails] = useState(null);

  const fetchClubData = async () => {
    const res = await axios.get('http://localhost:5000/club/getbyid/' + id);
    console.log(res.data);
    setClubDetails(res.data);
  }

  useEffect(() => {
    fetchClubData();
  }, []);

  if (clubDetails === null) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div className='max-w-[90%] mx-auto'>


        <img src={clubDetails.image} className="h-80 w-full object-cover object-center rounded-lg" alt="" />

        <div className='mt-10'>
          <h1 className='text-2xl font-bold'>{clubDetails.name}</h1>
          <p>{clubDetails.category}</p>
          <p>{clubDetails.members}</p>
          <p>{clubDetails.contact}</p>
          <p>{clubDetails.timing}</p>
        </div>
      </div>

    </div>
  )
}

export default ViewClub;