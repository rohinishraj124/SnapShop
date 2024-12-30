import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReturnPage = () => {
  const [formData, setFormData] = useState({
    orderNumber: '',
    reason: '',
    comments: '',
  });
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
    // Show success toast notification
    toast.success('Your return request has been submitted successfully!');
    setFormData({ orderNumber: '', reason: '', comments: '' });
  };

  const isFormValid = formData.orderNumber && formData.reason && formData.comments;

  if (!isClient) return null; // Prevent rendering until the page is loaded on the client-side

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 text-white py-16">
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4 tracking-wide drop-shadow-md">
            Return Your Order
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto">
            If you're not completely satisfied with your purchase, please submit a return request and we’ll help you out.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-gray-100 text-red-500 font-semibold py-8 shadow-md rounded-lg mx-5 mb-12">
        <div className="container mx-auto px-5 text-center">
          <p className="text-xl sm:text-2xl font-semibold tracking-wide">
            Our return service will be available soon!
          </p>
          <p className="text-md sm:text-lg font-light mt-2">
            We're working hard to get the return process ready. Please check back later.
          </p>
        </div>
      </section>

      {/* Return Form Section */}
      <section className="container mx-auto py-12 px-5">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700">
                  Order Number
                </label>
                <input
                  type="text"
                  name="orderNumber"
                  id="orderNumber"
                  value={formData.orderNumber}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                  Reason for Return
                </label>
                <select
                  name="reason"
                  id="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                >
                  <option value="">Select a reason</option>
                  <option value="Defective">Defective Product</option>
                  <option value="Incorrect Item">Incorrect Item</option>
                  <option value="No Longer Needed">No Longer Needed</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                  Additional Comments
                </label>
                <textarea
                  name="comments"
                  id="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className={`mt-4 py-3 px-6 font-semibold rounded-md focus:outline-none transition-all duration-300 
                ${isFormValid ? 'bg-pink-600 text-white hover:bg-pink-700 focus:ring-2 focus:ring-pink-500' : 'bg-gray-400 text-gray-500 cursor-not-allowed'}`}
              >
                Submit Return Request
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

export default ReturnPage;
