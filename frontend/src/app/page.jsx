'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const Home = () => {

  const [clubList, setClubList] = useState([]);

  const fetchClubData = async () => {
    const res = await axios.get('http://localhost:5000/club/getall')
    console.log(res.data);
    setClubList(res.data);
  }

  useEffect(() => {
    fetchClubData();
  }, [])


  return (
    <div>
      <>
  {/* hero - start */}
  <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      
      <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
        {/* image - start */}
        <img
          src="pic1.svg"
          loading="lazy"
          alt="Photo by Fakurian Design"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* image - end */}
        {/* overlay - start */}
        <div className="absolute inset-0  mix-blend-multiply" />
        {/* overlay - end */}
        {/* text start */}
        <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        
          <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
            
          </h1>
          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            
          </div>
        </div>
        {/* text end */}
      </section>
    </div>
  </div>
  {/* hero - end */}
  {/* gallery - start */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
       Club  Gallery
      </h2>
      <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
       
        {/* image - start */}
        {
            clubList.slice(0, 4).map(club => (
              <div key={club._id}>
                <Link
                  href={'/view-club/' + club._id}
                  className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
                >
                  <img
                    src={club.image}
                    loading=""
                    alt=""
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </Link>
                <div>
                  <p
                    className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                  >
                    {club.type}
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="font-bold text-gray-800 lg:text-lg">{club.name}</span>
                  </div>
                </div>
              </div>
            ))
          }
        {/* image - end */}
      </div>
      <div className="flex items-start justify-between gap-8 sm:items-center">
        <Link
          href="browse-club"
          className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
        >
          More
        </Link>
      </div>
    </div>
  </div>
  {/* gallery - end */}
  
  {/* team - start */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      {/* text - start */}
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Meet our Team
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Our Experienced Core Members
        </p>
      </div>
      {/* text - end */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
        {/* person - start */}
        <div className="flex flex-col items-center">
        
         
        </div>
        {/* person - end */}
        {/* person - start */}
        <div className="flex flex-col items-center">
          <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
            <img
              src="My.jpg"
              loading="lazy"
              alt="Photo by christian ferrer"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <div className="text-center font-bold text-indigo-500 md:text-lg">
              Pratik Vaishya
            </div>
            <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
              Founder
            </p>
            {/* social - start */}
            <div className="flex justify-center">
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* social - end */}
          </div>
        </div>
        {/* person - end */}
        {/* person - start */}
        <div className="flex flex-col items-center">
          <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
              loading="lazy"
              alt="Photo by Ayo Ogunseinde"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <div className="text-center font-bold text-indigo-500 md:text-lg">
Yash Gupta            </div>
            <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
              Co Founder
            </p>
            {/* social - start */}
            <div className="flex justify-center">
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    className="h-5 w-5"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* social - end */}
          </div>
        </div>
        {/* person - end */}
        
        
        
        
        
      </div>
    </div>
  </div>
  {/* team - end */}

  <>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Developer Card */}
    <div className="bg-[#111827] rounded-2xl shadow-xl p-6 border  relative">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
          Developer
        </span>
      </div> 
      <ul className="mt-10 space-y-3 text-sm">
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2 ">✔</span>Maintain CCMS
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2 ">✔</span>Implement New Features
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2">✔</span>Technical Support
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2">✔</span>System Security
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-gray-400 mr-2">✔</span>Club Management
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-gray-400 mr-2">✔</span>Event Planning
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-gray-400 mr-2">✔</span>Member Engagement
        </li>
      </ul>
      <div className="mt-6">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded shadow-md">
          APPLY<span className="text-sm font-normal ml-1">NOW</span>
        </button>
        <p className="text-center text-xs text-gray-400 mt-2">
          Be a developer of CCMS
        </p>
      </div>
    </div>
    {/* Executive Card */}
    <div className="bg-[#111827] rounded-2xl shadow-xl p-6 border border-gray-700 relative">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <span className="bg-gray-400 text-white px-6 py-2 rounded-full text-lg font-semibold">
          Executive
        </span>
      </div>
      <span className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-2 py-1 rounded-full">
        Most popular
      </span>
      <ul className="mt-10 space-y-3 text-sm">
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2">✔</span>Club Leadership
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2">✔</span>Event Planning &amp;
          Execution
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2">✔</span>Budget Management
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2">✔</span>Member Engagement
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2">✔</span>Club Strategy
          Development
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2">✔</span>University Liaison
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2">✔</span>Club Representation
        </li>
      </ul>
      <div className="mt-6">
        <button className="w-full bg-white text-black font-bold py-2 rounded shadow-md">
          APPLY<span className="text-sm font-normal ml-1">NOW</span>
        </button>
        <p className="text-center text-xs text-gray-400 mt-2">
          Lead and shape the club's future
        </p>
      </div>
    </div>
    {/* Club Member Card */}
    <div className="bg-[#111827] rounded-2xl shadow-xl p-6 border border-gray-700 relative">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <span className="bg-purple-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
          Club Member
        </span>
      </div>
      <ul className="mt-10 space-y-3 text-sm">
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2">✔</span>Participate in Club
          Activities
        </li>
        <li className="flex items-center text-white italic" >
          <span className="text-green-400 mr-2">✔</span>Learn New Skills
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2">✔</span>Network with Peers
        </li>
        <li className="flex items-center text-white italic">
          <span className="text-green-400 mr-2">✔</span>Attend Workshops
        </li>
        <li className="flex items-center italic text-white">
          <span className="text-green-400 mr-2">✔</span>Career Growth
          Opportunities
        </li>
        <li className="flex items-center italic text-white">
          <span className="text-green-400 mr-2">✔</span>Access to Resources
        </li>
        <li className="flex items-center italic text-white">
          <span className="text-green-400 mr-2">✔</span>Leadership Development
        </li>
      </ul>
      <div className="mt-6">
        <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded shadow-md">
          JOIN<span className="text-sm font-normal ml-1">NOW</span>
        </button>
        <p className="text-center text-xs text-gray-400 mt-2">
          For all students of CCMS
        </p>
      </div>
    </div>
  </div>
</>

  {/* call to action - start */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
        {/* image - start */}
        <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
          <img
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
            loading="lazy"
            alt="Photo by Andras Vas"
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* image - end */}
        {/* content - start */}
        <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
          <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
            Help center
          </h2>
          <p className="mb-8 max-w-md text-gray-600">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text.
          </p>
          <div className="mt-auto">
            <a
              href="#"
              className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
            >
              Contact support
            </a>
          </div>
        </div>
        {/* content - end */}
      </div>
    </div>
  </div>
  {/* call to action - end */}
  
</>

    </div>
  )
}

export default Home;
