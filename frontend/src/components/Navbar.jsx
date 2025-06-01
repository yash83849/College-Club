'use client';
import Link from 'next/link';
import React, { useState } from 'react';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="bg-white lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header className="flex items-center justify-between py-4 md:py-8">
            {/* logo - start */}
            <Link
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
            </Link>
            {/* logo - end */}
            {/* nav - start */}
            <nav className="hidden gap-12 lg:flex">
              <Link
                href="/"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Home
              </Link>
              <Link
                href="/admin/add-club"
                className="inline-flex items-center gap-1 text-lg font-semibold text-indigo-500"
              >
                Add Club

              </Link>
              <Link
                href="/admin/manage-user"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Manage User
              </Link>
              <Link
                href="/admin/manage-club"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Manage Club
              </Link>
            </nav>
            {/* nav - end */}
            {/* buttons - start */}
            <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
              <Link
                href="/login"
                className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Sign up
              </Link>
            </div>
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
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
          </header>

          {/* Mobile menu */}
          <div
            className={`${
              isMobileMenuOpen ? 'flex' : 'hidden'
            } lg:hidden fixed inset-0 z-50 bg-white`}
          >
            <div className="w-full">
              {/* Mobile menu header */}
              <div className="flex items-center justify-between p-4 border-b">
                <Link
                 href="/" className="text-2xl font-bold text-sky-700">
                  CCMS
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-500 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile menu links */}
              <nav className="flex flex-col p-4">
                <Link
                  href="/"
                  className="py-3 text-lg font-semibold text-gray-600 hover:text-indigo-500 border-b"
                >
                  Home
                </Link>
                <Link
                  href="/admin/add-club"
                  className="py-3 text-lg font-semibold text-gray-600 hover:text-indigo-500 border-b"
                >
                  Add Club
                </Link>
                <Link
                  href="/admin/manage-user"
                  className="py-3 text-lg font-semibold text-gray-600 hover:text-indigo-500 border-b"
                >
                  Manage User
                </Link>
                <Link
                  href="/admin/manage-club"
                  className="py-3 text-lg font-semibold text-gray-600 hover:text-indigo-500 border-b"
                >
                  Manage Club
                </Link>

                {/* Mobile auth buttons */}
                <div className="flex flex-col gap-2 mt-4">
                  <Link
                    href="/login"
                    className="w-full py-3 text-center text-gray-600 hover:text-indigo-500"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="w-full py-3 text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
                  >
                    Sign up
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar;