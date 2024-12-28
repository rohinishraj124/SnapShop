import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated API call to send reset password email
    if (email) {
      setMessage(`Password reset link has been sent to ${email}. Please check your inbox.`);
    } else {
      setMessage('Please enter a valid email address.');
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      Router.push('/');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4">
      <Head>
        <title>Forgot Password</title>
      </Head>

      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-12 h-12 text-pink-500 mx-auto mb-6"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Forgot Password</h2>
        <p className="text-gray-600 text-sm text-center mb-6">
          Enter your email address below, and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
          >
            Send Reset Link
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>
        )}

        <div className="mt-6 text-center">
          <Link href="/login" className="text-pink-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
