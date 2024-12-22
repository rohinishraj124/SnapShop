import React, { useState } from 'react';

const Checkout = ({ cart, total }) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add order submission logic here
    alert('Order Submitted');
  };

  return (
    <div className="w-full bg-[#ededed] p-4 md:p-8">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center my-8">Checkout</h2>

      {/* Delivery Details Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8 w-full max-w-screen-lg mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Delivery Details</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email in One Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-lg font-semibold text-gray-700">Address</label>
            <textarea
              id="address"
              name="address"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
              placeholder="Enter your delivery address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* City and Mobile in One Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="city" className="block text-lg font-semibold text-gray-700">City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-lg font-semibold text-gray-700">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* State and Pin Code in One Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="state" className="block text-lg font-semibold text-gray-700">State</label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
                placeholder="Enter your state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="pinCode" className="block text-lg font-semibold text-gray-700">Pin Code</label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 transition duration-300"
                placeholder="Enter your pin code"
                value={formData.pinCode}
                onChange={handleChange}
                required
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
                Object.keys(cart).map((key) => (
                  <div key={key} className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-800 font-bold">{cart[key].name}</p>
                      <p className="text-gray-600 text-sm">{cart[key].price.toFixed(2)} x {cart[key].qty}</p>
                    </div>
                    <span className="font-semibold text-gray-800">${(cart[key].price * cart[key].qty).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Total Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Total</h3>
            <p className="text-lg font-semibold text-right text-gray-800">
              Total: ${total(cart).toFixed(2)}
            </p>
          </div>

          {/* Payment Method Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h3>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Credit Card"
                  checked={paymentMethod === 'Credit Card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="PayPal"
                  checked={paymentMethod === 'PayPal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                PayPal
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 text-white py-3 px-8 rounded-xl hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 transition duration-300"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
