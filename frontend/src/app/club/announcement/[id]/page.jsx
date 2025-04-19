// import { useParams } from 'next/navigation';
import React from 'react'

const Announcement = () => {

    // const {id} = useParams();

  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>College Club Announcements</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      body {\n        font-family: 'Inter', sans-serif;\n      }\n    "
    }}
  />
  <div className="max-w-5xl mx-auto">
    {/* Header */}
    <div className="text-center mb-10">
      <h1 className="text-4xl font-extrabold text-indigo-800">
        📢 Club Announcements
      </h1>
      <p className="text-gray-600 text-lg mt-2">
        Stay in the loop with the latest updates from all college clubs
      </p>
    </div>
    {/* Announcements Grid */}
    <div className="grid gap-6 md:grid-cols-2">
      {/* Announcement Card */}
      <div className="bg-white shadow-xl rounded-2xl p-6 border-l-4 border-indigo-600 hover:scale-105 transition-transform duration-300">
        <h2 className="text-xl font-semibold text-indigo-700">
          🎤 Music Club Auditions
        </h2>
        <p className="text-gray-700 mt-2">
          Auditions for the upcoming inter-college music fest are open! Sign up
          by April 20th. Open to all students.
        </p>
        <p className="text-sm text-gray-500 mt-2">📅 April 18, 2025</p>
      </div>
      {/* Another Announcement Card */}
      <div className="bg-white shadow-xl rounded-2xl p-6 border-l-4 border-green-500 hover:scale-105 transition-transform duration-300">
        <h2 className="text-xl font-semibold text-green-700">
          🌱 Eco Club Tree Plantation Drive
        </h2>
        <p className="text-gray-700 mt-2">
          Join us in making the campus greener! Volunteers needed for our tree
          planting initiative.
        </p>
        <p className="text-sm text-gray-500 mt-2">📅 April 21, 2025</p>
      </div>
      {/* More Announcement */}
      <div className="bg-white shadow-xl rounded-2xl p-6 border-l-4 border-yellow-500 hover:scale-105 transition-transform duration-300">
        <h2 className="text-xl font-semibold text-yellow-700">
          📚 Debate Club Workshop
        </h2>
        <p className="text-gray-700 mt-2">
          Learn how to structure arguments and speak confidently. Open to all
          skill levels!
        </p>
        <p className="text-sm text-gray-500 mt-2">📅 April 19, 2025</p>
      </div>
      {/* More Announcement */}
      <div className="bg-white shadow-xl rounded-2xl p-6 border-l-4 border-red-500 hover:scale-105 transition-transform duration-300">
        <h2 className="text-xl font-semibold text-red-700">
          🎮 Gaming Club Tournament
        </h2>
        <p className="text-gray-700 mt-2">
          Registrations are now live for the Spring Semester LAN tournament.
          Amazing prizes await!
        </p>
        <p className="text-sm text-gray-500 mt-2">📅 April 25, 2025</p>
      </div>
    </div>
    {/* Call to Action */}
    <div className="text-center mt-12">
      <a
        href="#"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
      >
        View All Announcements
      </a>
    </div>
  </div>
</>

    </div>
  )
}

export default Announcement;