import React, { useState , useEffect } from 'react';
import Link from 'next/link';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { set } from 'mongoose';
import showToast from '@/utils/toastfile';
const Router = require('next/router');
import Head from 'next/head';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    if (password !== confirmPassword) {
      showToast({ error: 'Passwords do not match!' });
      setError('Passwords do not match!');
      return;
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      showToast({ success: 'Account created successfully! Please login.' });
        setTimeout(() => {
          Router.push('/login');
        }, 2000);
    } else {
      setError(result.error || 'Something went wrong!');
      showToast({ error: result.error || 'Something went wrong!' });
    }
  };

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        Router.push('/'); 
      }
    }, []);

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head><title>Sign Up</title></Head>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <div className="w-full max-w-sm p-6 space-y-8 bg-white rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-pink-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
        <form className="space-y-4" onSubmit={handleSignup}>
          {/* Error Message */}
          {error && <div className="text-sm text-red-600">{error}</div>}

          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your name"
            />
          </div>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your email"
            />
          </div>
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your password"
            />
          </div>
          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:ring-pink-500 focus:border-pink-500"
              placeholder="Confirm your password"
            />
          </div>
          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
        </form>
        {/* Footer */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-pink-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
