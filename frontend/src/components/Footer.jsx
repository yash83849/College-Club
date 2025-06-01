import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
        <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div className="col-span-full lg:col-span-2">
              {/* logo - start */}
              <div className="mb-4 lg:-mt-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-xl font-bold text-sky-700
            italic
             md:text-2xl"
                  aria-label="logo"
                >
                  <svg
                    width={95}
                    height={94}
                    viewBox="0 0 95 94"
                    className="h-auto w-5 text-indigo-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                  </svg>
                  CCMS
                </a>
              </div>
              {/* logo - end */}

              {/* social - start */}
              <div className="flex gap-4">

                <a
                  href="https://x.com/yash83849"
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
                <a
                  href="https://www.linkedin.com/in/yash-gupta-a2200126b/"
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
                  href="https://github.com/yash83849"
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
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              {/* social - end */}
            </div>
            {/* nav - start */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Quick Menu
              </div>
              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="/"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Home
                  </a>
                </div>
                <div>
                  <a
                    href="/user/dashboard"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Dashboard
                  </a>
                </div>
                <div>
                  <a
                    href="/login"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Login
                  </a>
                </div>
                <div>
                  <a
                    href="/signup"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Register
                  </a>
                </div>
                <div>
                  <a
                    href="/about"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    About Us
                  </a>
                </div>


              </nav>
            </div>
            {/* nav - end */}
            {/* nav - start */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Services
              </div>
              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="/browse-club"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Clubs
                  </a>
                </div>

                <div>
                  <a
                    href="/club/announcement/id"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    News
                  </a>
                </div>
              </nav>
            </div>
            {/* nav - end */}
            {/* nav - start */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Legal
              </div>
              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="/terms-conditions"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Term & Conditions
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    FAQs
                  </a>
                </div>
                <div>

                </div>
              </nav>
            </div>
            {/* nav - end */}
            {/* nav - start */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Information
              </div>
              <nav className="flex flex-col gap-4">


                <div>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Naipalapur - Sitapur,
                    <br />
                    261001
                    <br />
                    Uttar Pradesh, India
                  </a>
                </div>
              </nav>
            </div>
            {/* nav - end */}
          </div>
          <div className="border-t py-8 text-center text-sm text-gray-400">
            © 2025 - Presented Yash Gupta. All rights reserved.
          </div>
        </footer>
      </div>

    </div>
  )
}

export default Footer;

