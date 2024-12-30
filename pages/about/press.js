import React from 'react';
import Image from 'next/image';

const Press = () => {
    return (
        <div className="bg-gray-50 text-gray-700">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
                <div className="container mx-auto py-24 px-5 text-center">
                    <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-wider drop-shadow-md">
                        Press & Media
                    </h1>
                    <p className="text-lg sm:text-2xl max-w-4xl mx-auto font-light">
                        Discover the latest news and media coverage about SnapShop. Explore our press releases, stories, and media mentions.
                    </p>
                </div>
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/press-hero.jpg" // Replace with your image path
                        alt="Press Hero"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </section>

            {/* Media Mentions Section */}
            <section className="container mx-auto py-20 px-5">
                <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-12">
                    In the News
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[{
                        title: "SnapShop Makes Waves in E-Commerce",
                        date: "September 2024",
                        description: "SnapShop has been featured in major media outlets for its innovative approach to e-commerce, revolutionizing the shopping experience for customers worldwide."
                    }, {
                        title: "SnapShop Expands Globally",
                        date: "June 2024",
                        description: "SnapShop has announced its expansion into new markets across the globe, bringing its curated shopping experience to millions more customers."
                    }, {
                        title: "SnapShop's Partnership with Local Businesses",
                        date: "March 2024",
                        description: "In a recent partnership, SnapShop has joined forces with small businesses to create more personalized and unique shopping experiences."
                    }].map((media, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-8 text-center transform transition hover:scale-105">
                            <h3 className="text-3xl font-bold text-pink-500">{media.title}</h3>
                            <p className="mt-4 text-lg text-gray-600">{media.date}</p>
                            <p className="mt-4 text-lg">{media.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Press Kit Section */}
            {/* <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
                <div className="container mx-auto px-5 text-center">
                    <h2 className="text-4xl font-extrabold text-purple-700 mb-12">
                        Press Kit
                    </h2>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto font-light mb-8">
                        Download our press kit for logos, images, and other brand assets to help you cover SnapShop.
                    </p>
                    <a
                        href="/press-kit.zip" // Replace with the actual URL of your press kit
                        className="bg-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
                    >
                        Download Press Kit
                    </a>
                </div>
            </section> */}

            {/* Contact Section */}
            <section className="container mx-auto py-20 px-5">
                <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-12">
                    Contact Us
                </h2>
                <p className="text-lg sm:text-xl max-w-3xl mx-auto font-light mb-8 text-center">
                    For media inquiries, please reach out to our press team.
                </p>
                <div className="flex justify-center">
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-bold text-pink-500">Press Contact</h3>
                        <p className="mt-4 text-lg text-gray-600">Rohinish Raj</p>
                        <p className="mt-2 text-lg text-gray-600">Head of Public Relations</p>
                        <p className="mt-4 text-lg text-gray-600">Email: <a href="mailto:press@snapshop.com" className="text-purple-700">press@snapshop.com</a></p>
                        <p className="mt-2 text-lg text-gray-600">Phone: 8521671402</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Press;
