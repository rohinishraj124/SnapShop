import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure client-side rendering
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Toast on form submission
    toast.success('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  if (!isClient) return null; // Prevent rendering the component until it's on the client

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-pink-500 to-purple-500 text-white py-16">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4 tracking-wide drop-shadow-md">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto">
            Have any questions? We’re here to help! Reach out to us and we’ll get back to you as soon as we can.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto py-12 px-5">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder='Enter your name'
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder='Enter your email'
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder='Enter your message'
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <button
                type="submit"
                className="mt-4 py-3 px-6 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
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

export default ContactUs;
