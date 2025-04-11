'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [clubList, setBrowseClub] = useState([]);

  const fetchClubData = async () => {
    const res = await axios.get('http://localhost:5000/club/getall')
    console.log(res.data);
    setBrowseClub(res.data);
  }

  useEffect(() => {
    fetchClubData();
  }, [])

  return (
    <div>
      

        <div>
          <div>

            <section>

              <img
                src="https://avenica.com/wp-content/uploads/2020/05/College-Clubs-Facebook-Photo.jpg"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className=" inset-0 h-half w-full object-cover object-center"
              />
            </section>
          </div>
        </div>

        
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">

            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Welcome Students
              </h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                Thankyou For Visting on our Clubs
              </p>
            </div>
          </div>
         </div>
        </div>
  )
}
export default Home;