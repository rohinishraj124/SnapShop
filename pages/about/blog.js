import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
    const [email, setEmail] = useState('');

    // Function to handle the subscribe action
    const handleSubscribe = () => {
        if (email) {
            toast.success('Subscription successful! Thank you for subscribing.');
            setEmail('');  // Clear the input field after successful subscription
        } else {
            toast.error('Please enter a valid email address.');
        }
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-300">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
                <div className="container mx-auto py-24 px-5 text-center">
                    <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-wider drop-shadow-md">
                        Our Blog
                    </h1>
                    <p className="text-lg sm:text-2xl max-w-4xl mx-auto font-light">
                        Stay up to date with the latest insights, news, and stories from SnapShop.
                    </p>
                </div>
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/blog-hero.jpg" // Replace with your image path
                        alt="Blog Hero"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </section>

            {/* Blog Posts Section */}
            <section className="container mx-auto py-20 px-5">
                <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-12">
                    Latest Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
                    {[{
                        title: "How SnapShop is Changing the E-Commerce Landscape",
                        date: "December 2024",
                        imageUrl: "/blog1.jpg", // Replace with your image path
                        excerpt: "SnapShop is leading the way in e-commerce innovation by focusing on curated, personalized shopping experiences. Learn how we're changing the shopping world.",
                    }, {
                        title: "Building Connections with Small Businesses Globally",
                        date: "November 2024",
                        imageUrl: "/blog2.jpg", // Replace with your image path
                        excerpt: "At SnapShop, we are passionate about empowering small businesses. Here’s how we’re creating meaningful connections between entrepreneurs and global shoppers.",
                    }, {
                        title: "The Future of Personalized Shopping Experience",
                        date: "October 2024",
                        imageUrl: "/blog3.jpeg", // Replace with your image path
                        excerpt: "What’s next for personalized shopping? In this blog, we explore the future trends and technologies shaping the shopping experience at SnapShop.",
                    }].map((post, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <div className="relative w-full h-64">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition duration-300 ease-in-out transform group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300 mb-4">{post.title}</h3>
                                <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">{post.date}</p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{post.excerpt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Post Section */}
            <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-purple-700 mb-12">
                        Featured Post
                    </h2>
                    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 max-w-3xl mx-auto transform transition hover:scale-105">
                        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-4">The Impact of Technology on E-Commerce</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">January 2024</p>
                        <div className="relative w-full h-64 mb-6">
                            <Image
                                src="/blog4.jpg" // Replace with your featured image path
                                alt="Featured Post"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            Technology continues to reshape the e-commerce world. In this post, we dive deep into the latest advancements and their effect on consumer behavior.
                        </p>
                    </div>
                </div>
            </section>


            {/* Call to Action Section */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Want to Stay Updated?</h2>
                    <p className="mb-8 text-lg">
                        Subscribe to our newsletter for the latest updates, trends, and insights from the SnapShop team.
                    </p>
                    <div className="max-w-sm mx-auto">
                        <input
                            type="email"

                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-4 text-lg text-center rounded   -full text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-700"
                        />
                        <button
                            onClick={handleSubscribe}
                            className="w-full mt-4 bg-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Toast Container */}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Blog;
