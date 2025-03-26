'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Home = () => {

  const [ clubList, setClubList ] = useState([]);

  const fetchclubData = async () => {
    const res = await axios.get('http://localhost:5000/club/getall')
    console.log(res.data);
  }

  useEffect(() => {
    fetchclubData();
  }, [])
  
  return (
    <div>
   

    </div>
  )
}

export default Home;
