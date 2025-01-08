import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Careers = () => {
    const [isClient, setIsClient] = useState(false);
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        setIsClient(true);

        const fetchData = async () => {
            // Mock data for job listings
            const data = [
                { title: "Full Stack Developer", location: "Remote", description: "Join our development team to build and scale innovative products." },
                { title: "Marketing Specialist", location: "Bhubaneswar, India", description: "Help us expand our brand reach and attract customers globally." },
                { title: "Product Manager", location: "Remote", description: "Work closely with teams to shape the future of SnapShop." },
            ];
            setJobListings(data);
        };

        fetchData();
    }, []);

    if (!isClient) {
        return null; // Ensures proper hydration
    }

    return (
        <div className="bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
                <div className="container mx-auto py-24 px-5 text-center">
                    <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-wider drop-shadow-md">
                        Join Our Team
                    </h1>
                    <p className="text-lg sm:text-2xl max-w-4xl mx-auto font-light">
                        Become a part of SnapShop’s exciting journey and contribute to a global movement that’s reshaping the shopping experience.
                    </p>
                </div>
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/careers-hero.jpg"
                        alt="Careers Hero"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </section>

            {/* Culture Section */}
            <section className="container mx-auto py-20 px-5">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-purple-700 dark:text-purple-400">Why Work With Us?</h2>
                    <p className="text-lg max-w-3xl mx-auto font-light">
                        At SnapShop, we value creativity, innovation, and a collaborative spirit. Our team is committed to pushing boundaries and making a difference, one small business at a time.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: "Innovation", description: "We encourage new ideas and continuous learning to keep improving." },
                        { title: "Teamwork", description: "Collaboration is key to our success. Together, we achieve more." },
                        { title: "Growth", description: "We believe in fostering personal and professional growth within our team." },
                    ].map((item, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 text-center">
                            <h3 className="text-3xl font-bold text-pink-500 dark:text-pink-400">{item.title}</h3>
                            <p className="mt-4 text-lg">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Job Listings Section */}
            <section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
                <div className="container mx-auto px-5">
                    <h2 className="text-4xl font-extrabold text-center text-purple-700 dark:text-purple-400 mb-12">
                        Open Positions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {jobListings.map((job, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 text-center transform transition hover:scale-105"
                            >
                                <h3 className="text-3xl font-bold text-pink-500 dark:text-pink-400">{job.title}</h3>
                                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{job.location}</p>
                                <p className="mt-4 text-lg">{job.description}</p>
                                <a
                                    href="#"
                                    className="text-pink-500 dark:text-pink-400 mt-4 inline-block text-lg font-semibold"
                                >
                                    Apply Now
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-700 dark:to-pink-600 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Future Career Opportunities</h2>
                    <p className="mb-8 text-lg">
                        While we’re not hiring right now, we are always looking for passionate individuals to join our team. Stay tuned for future opportunities!
                    </p>
                    <a
                        href="#"
                        className="bg-white text-pink-500 dark:bg-gray-800 dark:text-pink-400 px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition transform hover:scale-105 cursor-not-allowed opacity-50"
                    >
                        Coming Soon
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Careers;
