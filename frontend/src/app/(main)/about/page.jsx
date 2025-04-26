'use client';
import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our College Clubs</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Empowering students to explore their interests, develop leadership skills, and build lasting connections.
                </p>
            </div>

            {/* Mission & Vision Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600">
                        To provide a platform for students to pursue their passions, develop new skills, 
                        and create meaningful connections within the college community through diverse 
                        club activities and events.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
                    <p className="text-gray-600">
                        To foster an inclusive environment where every student can find their place, 
                        grow their talents, and contribute to the vibrant campus culture through 
                        active participation in clubs.
                    </p>
                </div>
            </div>

            {/* Key Features Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What We Offer</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-3">Diverse Communities</h3>
                        <p className="text-gray-600">
                            Join clubs ranging from academic interests to cultural activities, sports, 
                            and creative pursuits.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-3">Leadership Opportunities</h3>
                        <p className="text-gray-600">
                            Develop leadership skills by taking on roles in club management and event organization.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-3">Events & Activities</h3>
                        <p className="text-gray-600">
                            Participate in workshops, competitions, social gatherings, and collaborative projects.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                <div className="space-y-2">
                    <p className="text-gray-600">
                        <span className="font-semibold">Email:</span> clubsupport@college.edu
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Location:</span> Student Center, Room 201
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold">Office Hours:</span> Monday-Friday, 9:00 AM - 5:00 PM
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;