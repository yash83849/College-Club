'use client';
import React, { useState } from 'react';


const Navbar = () => {

  
  return (
    <div>
      <div className="bg-white lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header className="flex items-center justify-between py-4 md:py-8">
            {/* logo - start */}
            <a
              href="/"
              className="inline-flex items-center gap-2.5 text-2xl font-bold text-sky-700 md:text-3xl italic"
              aria-label="logo"
            >
              <svg
                width={95}
                height={94}
                viewBox="0 0 95 94"
                className="h-auto w-6 text-indigo-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              CCMS
            </a>
            {/* logo - end */}
            {/* nav - start */}
            <nav className="hidden gap-12 lg:flex">
              <a
                href="/"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Home
              </a>
              <a
                href="/admin/add-club"
                className="inline-flex items-center gap-1 text-lg font-semibold text-indigo-500"
              >
                Add Club

              </a>
              <a
                href="/admin/manage-user"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Manage User
              </a>
              <a
                href="/admin/manage-club"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Manage Club
              </a>
            </nav>
            {/* nav - end */}
            {/* buttons - start */}
            <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
              <a
                href="/login"
                className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base"
              >
                Log in
              </a>
              <a
                href="/signup"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Sign up
              </a>
            </div>
            <button
              type="button"
              
              className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Menu
            </button>
            {/* buttons - end */}

           
          </header>

        </div>
      </div>

    </div>
  )
}

export default Navbar;