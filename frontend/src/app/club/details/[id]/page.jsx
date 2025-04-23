'use client';
import { useParams } from 'next/navigation';
import React from 'react'

const Details = () => {
    const { id } = useParams();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Club Information Column */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Club Information</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Club Name</h3>
                            <p className="text-gray-600">Computer Science Club</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Description</h3>
                            <p className="text-gray-600">A community of tech enthusiasts and programmers.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Meeting Schedule</h3>
                            <p className="text-gray-600">Every Tuesday at 5:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Membership Column */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Members</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Total Members:</span>
                            <span className="font-semibold">42</span>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-gray-700">Club Leaders</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>John Doe - President</li>
                                <li>Jane Smith - Vice President</li>
                                <li>Mike Johnson - Secretary</li>
                            </ul>
                        </div>
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                            Join Club
                        </button>
                    </div>
                </div>

                {/* Announcements Column */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Announcements</h2>
                    <div className="space-y-4">
                        <div className="border-b pb-4">
                            <h3 className="text-lg font-semibold text-gray-700">Upcoming Hackathon</h3>
                            <p className="text-sm text-gray-500">Posted on April 20, 2025</p>
                            <p className="text-gray-600 mt-2">Join us for our annual hackathon next month!</p>
                        </div>
                        <div className="border-b pb-4">
                            <h3 className="text-lg font-semibold text-gray-700">Workshop Series</h3>
                            <p className="text-sm text-gray-500">Posted on April 15, 2025</p>
                            <p className="text-gray-600 mt-2">New workshop series on React development starting soon.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Member Meeting</h3>
                            <p className="text-sm text-gray-500">Posted on April 10, 2025</p>
                            <p className="text-gray-600 mt-2">Monthly member meeting scheduled for next week.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;