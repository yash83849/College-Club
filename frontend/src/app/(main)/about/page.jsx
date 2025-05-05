'use client';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='bg-white'>
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-gray-400 text-base  font-bold leading-relaxed">
                    About Us
                  </h6>

                  <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    About CCMS
                  </h2>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h3 className="text-gray-400 text-base  font-bold leading-relaxed">
                      Who we are
                    </h3>
                    <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      Your Gateway to Campus Community
                    </h2>

                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        10+
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Vibrant Clubs
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        50+
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Club Partners
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        9,000+
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Happy Members
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        350+
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Project Done
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717742431.png"
                  alt="about Us image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* how to ccms work */}

      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
            <div className="w-full flex-col justify-start items-center gap-3 flex">
              <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                How CCMS Works
              </h2>
              <p className="w-full text-center text-gray-500 text-base font-normal leading-relaxed">
                Discover how CCMS simplifies club operations and enhances <br />
                Student engagement across CCMS.
              </p>
            </div>
            <div className="w-full justify-start items-center gap-4 flex md:flex-row flex-col">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                  <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                    1
                  </h3>
                  <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                    Club Registration
                  </h4>
                </div>
                <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                  Easily register your club and manage member profiles through our intuitive interface.
                </p>
              </div>
              <svg
                className="md:flex hidden"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                  stroke="#4F46E5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                  <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                    2
                  </h3>
                  <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                    Event Planning
                  </h4>
                </div>
                <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                  Plan, Schedule, and promote club events with our comprehensive event management tools.
                </p>
              </div>
              <svg
                className="md:flex hidden"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                  stroke="#4F46E5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                  <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                    3
                  </h3>
                  <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                    Engagement Analytics
                  </h4>
                </div>
                <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                  Track member participation and event success with our detailed analytics dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team section */}

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
                      href="https://www.linkedin.com/in/pratik-vaishya-05061933b/"
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
                      href="https://x.com/prateekvaish449?s=21"
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

      {/* testmonials start */}

<div className='pb-10 pt-10'>
<>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .fade-in {\n      animation: fadeIn 1s ease-in-out;\n    }\n\n    @keyframes fadeIn {\n      0% { opacity: 0; transform: translateY(20px); }\n      100% { opacity: 1; transform: translateY(0); }\n    }\n  "
    }}
  />
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-blue-400 font-bold text-md uppercase italic">Testimonial</h2>
    <h1 className="text-4xl font-extrabold mb-2">Feedback for our Clients</h1>
    <p className="text-gray-400 mb-10">
      
    </p>
  </div>
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 fade-in">
    {/* Card 1 */}
    <div className="bg-[#1f2937] rounded-2xl p-6 shadow-lg relative">
      <img
        src="My.jpg"
        alt="Avatar"
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <p className="italic text-gray-300 mb-4 text-sm ">
        “Working on CCMS has been a rewarding experience.
        The codebase is well-structured and scalable, allowing us to continuously add new features and improvements. It's gratifying to see our work directly benefiting the student community at CCMS.”
      </p>
      <h3 className="text-blue-300 font-bold text-lg">Pratik Vaishya</h3>
      <p className="text-sm text-gray-400 font-medium italic font-bold">Founder of CCMS</p>
      <div className="flex justify-center text-yellow-400 mt-2">⭐⭐⭐⭐⭐</div>
    </div>
    {/* Card 2 */}
    <div className="bg-[#1f2937] rounded-2xl p-6 shadow-lg relative scale-105 border-2 border-blue-500">
      <img
        src="https://via.placeholder.com/100"
        alt="Avatar"
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <p className="italic text-gray-300 mb-4 text-sm">
        “CCMS was born from a vision to streamline club management at our university. It's incredible to see how it has grown and positively impacted student engagement across various clubs. This platfrom is revolutionizing the way we connect and collabrate on campus.”
      </p>
      <h3 className="text-blue-300 font-bold text-lg">Yash Gupta </h3>
      <p className="text-sm text-gray-400 font-medium italic">Co Founder of CCMS</p>
      <div className="flex justify-center text-yellow-400 mt-2">⭐⭐⭐⭐⭐</div>
    </div>
    {/* Card 3 */}
    <div className="bg-[#1f2937] rounded-2xl p-6 shadow-lg relative">
      <img
        src="https://via.placeholder.com/100"
        alt="Avatar"
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <p className="italic text-gray-300 mb-4 text-sm">
        “The technical challenges we've overcome in developing CCMS have been immense, but the results are worth it. Our platform's robust features and user-friendly interface are setting new standards for university club management systems.”
      </p>
      <h3 className="text-blue-300 font-bold text-lg">Utkarsh Mishra</h3>
      <p className="text-sm text-gray-400 font-medium italic">UX Designer</p>
      <div className="flex justify-center text-yellow-400 mt-2">⭐⭐⭐⭐☆</div>
    </div>
  </div>
  {/* <div className="text-center mt-12">
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition">
      View All Testimonials
    </button>
  </div> */}
</>


</div>
    </div>
  );
};

export default About;