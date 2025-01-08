import React from 'react';
import Image from 'next/image';

const OurStory = () => {
    return (
        <div className="bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
                <div className="container mx-auto py-24 px-5 text-center">
                    <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-wider drop-shadow-md">
                        Our Journey
                    </h1>
                    <p className="text-lg sm:text-2xl max-w-4xl mx-auto font-light">
                        From dreams to reality, explore how SnapShop grew into a global phenomenon while staying true to its roots.
                    </p>
                </div>
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/our-story-hero.jpg"
                        alt="Our Story Hero"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </section>

            {/* About Section */}
            <section className="container mx-auto py-20 px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-6">
                            Where It All Began
                        </h2>
                        <p className="leading-relaxed text-lg mb-4">
                            SnapShop started with a vision in 2024—a vision to transform shopping into an experience that's personal, enjoyable, and meaningful. Our humble beginnings in a small workspace gave us the drive to grow into the trusted name we are today.
                        </p>
                        <p className="leading-relaxed text-lg">
                            With a passion for innovation and a commitment to quality, we've bridged the gap between small businesses and a global audience.
                        </p>
                    </div>
                    <div className="relative w-full h-80 sm:h-[500px] shadow-lg rounded-lg overflow-hidden" data-aos="fade-left">
                        <Image
                            src="/begin.jpg"
                            alt="Our Beginnings"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </section>

            {/* Milestones Section */}
            <section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
                <div className="container mx-auto px-5">
                    <h2 className="text-4xl font-extrabold text-center text-purple-700 dark:text-purple-400 mb-12">
                        Key Milestones
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { year: "2024", description: "Founded SnapShop and launched our first collection." },
                            { year: "2025", description: "Aim to reached 100,000 customers worldwide." },
                            { year: "2026", description: "Try to expand support to over 50 small businesses globally." },
                        ].map((milestone, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 text-center transform transition hover:scale-105"
                            >
                                <h3 className="text-3xl font-bold text-pink-500 dark:text-pink-400">{milestone.year}</h3>
                                <p className="mt-4 text-lg">{milestone.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto py-20 px-5">
                <h2 className="text-4xl font-extrabold text-center text-purple-700 dark:text-purple-400 mb-12">
                    Meet the Team
                </h2>
                <div className="flex justify-center">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transform transition hover:scale-105">
                        <div className="relative w-32 h-32 mx-auto mb-6">
                            <Image
                                src="/mypic.jpg"
                                alt="Team Member"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-300">Rohinish Raj</h3>
                        <p className="text-gray-500 dark:text-gray-400">Founder & CEO</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-700 dark:to-pink-600 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Join Us on This Journey</h2>
                    <p className="mb-8 text-lg">
                        Experience the magic of curated shopping and support small businesses worldwide.
                    </p>
                    <a
                        href="/"
                        className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
                    >
                        Discover Our Collections
                    </a>
                </div>
            </section>
        </div>
    );
};

export default OurStory;
