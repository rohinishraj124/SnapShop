import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify'; // Import toast

const Footer = ({ theme, toggleTheme }) => {
  const handleHover = () => {
    toast.info('This feature is coming soon!');
  };

  return (
    <footer
      className={`body-font ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-[#ededed] text-gray-600'
      }`}
    >
      <div className="bg-[#aba4a4] h-0.5 w-full rounded-full"></div>
      <div className="container px-5 py-24 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center"
          >
            {/* Logo Section */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-pink-500 text-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">SnapShop</span>
          </Link>
          <p className="mt-2 text-sm">
            Your one-stop online shop for amazing deals and unique finds.
          </p>
        </div>

        <div className="sm:col-span-1 grid grid-cols-2 gap-[5em] m-auto lg:grid-cols-4 md:text-left">
          {/* Categories */}
          <div>
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/men" className="hover:text-pink-800">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/women" className="hover:text-pink-800">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/kids" className="hover:text-pink-800">
                  Kids
                </Link>
              </li>
            </nav>
          </div>

          {/* About Section */}
          <div>
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">ABOUT</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/about/story" className="hover:text-pink-800">
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/about/career"
                  aria-disabled="true"
                  className="cursor-not-allowed text-gray-400"
                  onMouseEnter={handleHover}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about/press" className="hover:text-pink-800">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/about/blog" className="hover:text-pink-800">
                  Blog
                </Link>
              </li>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">SUPPORT</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/support/contactus" className="hover:text-pink-800">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support/faqs" className="hover:text-pink-800">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/support/return" className="hover:text-pink-800">
                  Returns
                </Link>
              </li>
            </nav>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">FOLLOW US</h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  href="#"
                  className="cursor-not-allowed text-gray-400"
                  onMouseEnter={handleHover}
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="cursor-not-allowed text-gray-400"
                  onMouseEnter={handleHover}
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="cursor-not-allowed text-gray-400"
                  onMouseEnter={handleHover}
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="cursor-not-allowed text-gray-400"
                  onMouseEnter={handleHover}
                >
                  LinkedIn
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-sm text-center sm:text-left">
            © 2024 SnapShop —
            <Link
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="ml-1"
              target="_blank"
            >
              @SnapShop
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
