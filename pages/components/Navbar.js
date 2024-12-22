'use client'
import { useState } from 'react';
import React from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Men’s Jacket', price: 49.99, quantity: 1 },
    { id: 2, name: 'Women’s Dress', price: 39.99, quantity: 2 },
    { id: 3, name: 'Kids’ Shoes', price: 29.99, quantity: 1 },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <nav className="bg-white shadow-md w-full z-50 h-14 sticky top-0">
      <div className="container mx-auto px-4 flex items-center py-4">
        {/* Left: Menu Toggle Button */}
        <div className="flex items-center md:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Left: Website Icon */}
        <div className="flex items-center ml-2">
          <a href="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-[1.5rem] h-[1.5rem] text-pink-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-2 font-bold hidden md:inline">SnapShop</span>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-8 mx-auto">
          <a href="/men" className="text-gray-600 hover:text-pink-500">Men</a>
          <a href="/women" className="text-gray-600 hover:text-pink-500">Women</a>
          <a href="/kids" className="text-gray-600 hover:text-pink-500">Kids</a>
          <a href="/beauty" className="text-gray-600 hover:text-pink-500">Beauty</a>
          <a href="/home&living" className="text-gray-600 hover:text-pink-500">Home & Living</a>
        </div>

        {/* Right: Cart Icon */}
        <div className="flex items-center ml-auto">
          <button
            className="text-gray-600 hover:text-pink-500 flex items-center ml-4"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <FaShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Toggle based on `menuOpen` state */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ease-in-out z-40 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)} // Close menu when clicking outside
      />
      <div
        className={`fixed left-0 top-0 h-full bg-white w-64 transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex p-4 border-b">
          <h3 className='font-bold text-xl'>SnapShop</h3>
          <button
            className="text-gray-600 focus:outline-none ml-auto"
            onClick={() => setMenuOpen(false)}
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>
        {/* Mobile Menu Links (Vertical) */}
        <div className="p-4 space-y-4">
          <a href="/men" className="text-gray-600 hover:text-pink-500 block">Men</a>
          <a href="/women" className="text-gray-600 hover:text-pink-500 block">Women</a>
          <a href="/kids" className="text-gray-600 hover:text-pink-500 block">Kids</a>
          <a href="/beauty" className="text-gray-600 hover:text-pink-500 block">Beauty</a>
          <a href="/home&living" className="text-gray-600 hover:text-pink-500 block">Home & Living</a>
        </div>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ease-in-out z-40 ${cartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setCartOpen(false)} // Close cart when clicking outside
      />
      <div
        className={`fixed left-0 top-0 h-full bg-white w-80 transform transition-transform duration-300 ease-in-out z-50 ${cartOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex p-4 border-b">
          <div className="text-gray-800 text-2xl font-bold">Cart</div>
          <button
            className="text-gray-600 focus:outline-none ml-auto"
            onClick={() => setCartOpen(false)}
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-600 text-center">Your Cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="text-gray-800 font-bold">{item.name}</p>
                  <p className="text-gray-600 text-sm font-semibold">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => deleteItem(item.id)}
                  >
                    <FaTrash className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t">
          <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
            Checkout
          </button>
          <button
            className="w-full mt-4 bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
            onClick={() => setCartItems([])}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
