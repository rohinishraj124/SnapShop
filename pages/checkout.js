import React, { useState } from 'react';
import Head from 'next/head';

const Checkout = ({ cart, total, user }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    mobile: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expandedItem, setExpandedItem] = useState(null); // State to track which item's name is expanded

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Helper function to validate form
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.address || !formData.city || !formData.state || !formData.pinCode || !formData.mobile) {
      return "All delivery details are required.";
    }
    if (!paymentMethod) {
      return "Please select a payment method.";
    }
    if (Object.keys(cart).length === 0) {
      return "Your cart is empty.";
    }
    return null; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('You must be logged in to place an order.');
      return;
    }

    const formError = validateForm();
    if (formError) {
      setError(formError);
      return;
    }

    setLoading(true);
    setError('');

    // Prepare the order data
    const orderData = {
      userId: user._id, // Assuming `user._id` contains the user ID
      products: Object.keys(cart).map((key) => ({
        productId: cart[key].id, // Assuming each cart item has an `id`
        quantity: cart[key].qty,
      })),
      address: formData.address,
      amount: total,
      paymentMethod,
    };

    console.log('Order data:', orderData);  // Add this line to log the order data

    // Send the order data to the API
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Order placed successfully!');
        // Redirect or clear cart here
      } else {
        throw new Error(data.message || 'Failed to place the order');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => {
    let sum = 0;
    for (let item in cart) {
      sum += cart[item].price * cart[item].qty;
    }
    return sum;
  };

  const handleToggleName = (key) => {
    setExpandedItem((prev) => (prev === key ? null : key));
  };

  return (
    <div className="w-full bg-[#ededed] p-4 md:p-8">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <h2 className="text-4xl font-extrabold text-gray-800 text-center my-8">Checkout</h2>

      {/* Delivery Details Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8 w-full max-w-screen-lg mx-auto">
        {!user ? (
          <p className="text-center text-red-600 font-bold">
            You must be logged in to access the checkout.
          </p>
        ) : (
          <>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Delivery Details</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={!user}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={!user}
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-lg font-semibold text-gray-700">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
                  placeholder="Enter your delivery address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  disabled={!user}
                />
              </div>

              {/* City and Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-lg font-semibold text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    disabled={!user}
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-lg font-semibold text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    disabled={!user}
                  />
                </div>
              </div>

              {/* State and Pin Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="state" className="block text-lg font-semibold text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
                    placeholder="Enter your state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    disabled={!user}
                  />
                </div>
                <div>
                  <label htmlFor="pinCode" className="block text-lg font-semibold text-gray-700">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    id="pinCode"
                    name="pinCode"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
                    placeholder="Enter your pin code"
                    value={formData.pinCode}
                    onChange={handleChange}
                    required
                    disabled={!user}
                  />
                </div>
              </div>

              {/* Review Cart Items */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Review Cart Items</h3>
                <div className="space-y-4">
                  {Object.keys(cart).length === 0 ? (
                    <p className="text-gray-600">Your cart is empty</p>
                  ) : (
                    Object.keys(cart).map((key) => {
                      const item = cart[key];
                      const truncatedName = item.name.length > 20 ? `${item.name.slice(0, 20)}` : item.name;
                      return (
                        <div key={key} className="flex justify-between items-center">
                          <div>
                            <span>Image</span>
                            <span
                              className="font-medium text-gray-800 cursor-pointer"
                             
                            >
                              {expandedItem === key ? item.name : truncatedName}
                            </span>
                            {!expandedItem && item.name.length > 20 && (
                              <button
                                className="mx-2 text-blue-500 text-sm"
                                onClick={() => setExpandedItem(key)}
                              >
                                More...
                              </button>
                            )}
                            {expandedItem === key && (
                              <div className="mt-2 text-sm text-gray-600">{item.desc}</div>
                            )}
                          </div>
                          <span className="text-gray-800">{`₹${item.price} x ${item.qty}`}</span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-lg font-semibold text-gray-700">Payment Method</label>
                <div className="space-x-6">
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Cash on Delivery"
                      checked={paymentMethod === 'Cash on Delivery'}
                      onChange={() => setPaymentMethod('Cash on Delivery')}
                      disabled={!user}
                    />
                    <span className="ml-2">Cash on Delivery</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Credit Card"
                      checked={paymentMethod === 'Credit Card'}
                      onChange={() => setPaymentMethod('Credit Card')}
                      disabled={!user}
                    />
                    <span className="ml-2">Credit Card</span>
                  </label>
                </div>
              </div>

              {error && <p className="text-red-600">{error}</p>}

              {/* Order Summary */}
              <div className="mt-6 flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total:</span>
                <span className="text-lg text-gray-800">{`₹${calculateTotal()}`}</span>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className={`w-full py-4 bg-pink-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Place Order'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
