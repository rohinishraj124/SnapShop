import { useState, useEffect, useRef } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { BsSun, BsMoon } from 'react-icons/bs';
import Link from 'next/link';
import { ToastContainer, Slide } from 'react-toastify';
import showToast from '../../utils/toastfile';

const Navbar = ({
  user,
  cart,
  addCart,
  removeFromCart,
  total,
  clearCart,
  logout,
  theme,
  toggleTheme,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);
  const menuRef = useRef(null);

  const AccountDropdown = ({ logout }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
      setDropdownVisible((prev) => !prev);
    };

    const handleLogout = () => {
      logout();
      clearCart();
      showToast({ success: 'Logout successful' });
      setDropdownVisible(false);
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setDropdownVisible(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [dropdownRef]);

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          className="text-gray-600 dark:text-gray-300 hover:text-pink-500 flex items-center"
          onClick={toggleDropdown}
        >
          <FaUser className="w-5 h-5" />
        </button>
        {isDropdownVisible && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50">
            <ul className="py-2 text-gray-800 dark:text-gray-200">
              <li className="px-4 py-2 hover:bg-pink-200 dark:hover:bg-pink-400 cursor-pointer">
                <Link href="/account">My Account</Link>
              </li>
              <li className="px-4 py-2 hover:bg-pink-200 dark:hover:bg-pink-400 cursor-pointer">
                <Link href="/orders">Orders</Link>
              </li>
              <li
                className="px-4 py-2 hover:bg-pink-200 dark:hover:bg-pink-400 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, cartRef]);

  const CartItem = ({ item, removeFromCart, addCart }) => (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-gray-800 dark:text-gray-200 font-bold">{item.name}</p>
        <p className="text-gray-600 dark:text-gray-400 font-semibold text-sm">
          {item.size}/{item.variant}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold">
          ₹{item.price.toFixed(2)} x {item.qty}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          onClick={() => removeFromCart(item.key, 1)}
        >
          –
        </button>
        <span className='text-gray-600 dark:text-gray-300'>{item.qty}</span>
        <button
          className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          onClick={() =>
            addCart(item.key, 1, item.price, item.name, item.size, item.variant)
          }
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md w-full z-50 sticky top-0">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        transition={Slide}
        theme={theme === 'dark' ? 'dark' : 'light'}
      />
      <div className="container mx-auto px-4 flex items-center py-4">
        <div className="flex items-center md:hidden">
          <button
            className="text-gray-600 dark:text-gray-300 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
          </button>
        </div>
        <div className="flex items-center ml-2">
          <Link href="/" className="flex items-center">
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
            <span className="ml-2 font-bold hidden md:inline text-gray-600 dark:text-gray-300 ">SnapShop</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 mx-auto">
          <Link href="/men" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 ">
            Men
          </Link>
          <Link href="/women" className="text-gray-600 dark:text-gray-300 hover:text-pink-500">
            Women
          </Link>
          <Link href="/kids" className="text-gray-600 dark:text-gray-300 hover:text-pink-500">
            Kids
          </Link>
        </div>
        <div className="flex items-center ml-auto space-x-4">
          {!user ? (
            <Link
              href="/login"
              className="text-white bg-pink-500 hover:bg-pink-600 text-sm font-semibold py-1 px-4 rounded-lg mx-4"
            >
              Login
            </Link>
          ) : (
            <AccountDropdown logout={logout} />
          )}
          <button
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <FaShoppingCart className="w-5 h-5" />
          </button>
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500"
          >
            {theme === 'light' ? <BsMoon className="w-5 h-5" /> : <BsSun className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <div
        ref={menuRef}
        className={`fixed left-0 top-0 w-64 bg-white dark:bg-gray-900 h-full transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex p-4 border-b dark:bg-gray-900 ">
          <Link href="/"><div className="text-gray-800 dark:text-gray-300 text-2xl font-bold ">SnapShop</div></Link>
          <button
            className="text-gray-600 dark:text-gray-300 focus:outline-none ml-auto"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <Link onClick={() => setMenuOpen(false)} href="/men" className="text-gray-600 dark:text-gray-300 hover:text-pink-500">Men</Link>
          <Link onClick={() => setMenuOpen(false)} href="/women" className="text-gray-600 dark:text-gray-300 hover:text-pink-500">Women</Link>
          <Link onClick={() => setMenuOpen(false)} href="/kids" className="text-gray-600 dark:text-gray-300 hover:text-pink-500">Kids</Link>
        </div>
      </div>

      {/* Cart */}
      <div
        ref={cartRef}
        className={`fixed right-0 top-0 h-full bg-white w-80 overflow-y-scroll dark:bg-gray-900 transform transition-transform duration-300 ease-in-out z-50 ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!cartOpen}
      >
        <div className="flex p-4 border-b">
          <div className="text-gray-800 dark:text-gray-300 text-2xl font-bold">Cart</div>
          <button
            className="text-gray-600 dark:text-gray-300 focus:outline-none ml-auto"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          {Object.keys(cart).length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300">Your Cart is empty</p>
          ) : (
            Object.keys(cart).map((key) => (
              <CartItem
                key={key}
                item={cart[key]}
                removeFromCart={removeFromCart}
                addCart={addCart}
              />
            ))
          )}
        </div>
        <div className="p-4 border-t">
          <p className="text-gray-800 dark:text-gray-300 font-bold text-right">
            Total: ₹{total(cart).toFixed(2)}
          </p>
          <Link href="/checkout">
            <button
              className={`w-full bg-pink-500  text-white dark:text-white py-2 rounded hover:bg-pink-600 ${Object.keys(cart).length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={Object.keys(cart).length === 0}
              onClick={() => setCartOpen(false)}
            >
              Checkout
            </button>
          </Link>
          <button
            className="w-full mt-4 bg-pink-500 text-white dark:text-white py-2 rounded hover:bg-pink-600"
            onClick={clearCart }
            aria-label="Clear cart"
            
          >
            Clear Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
