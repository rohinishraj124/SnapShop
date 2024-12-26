import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import mongoose from 'mongoose';

import Product from '../../models/Product';

export default function Page({ addCart, product, variants, clearCart }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [image, setImage] = useState(product.img); // Initialize with the default image
  const [service, setService] = useState(null);
  const [pin, setPin] = useState('');
  const [showFlash, setShowFlash] = useState(false);

  const router = useRouter();

  // Update image based on selected color and size
  useEffect(() => {
    if (selectedColor) {
      const colorVariants = variants[selectedColor];
      if (colorVariants && selectedSize) {
        setImage(colorVariants[selectedSize]?.img || product.img); // Default to product image if no variant image found
      }
    }
  }, [selectedColor, selectedSize]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    const availableSizes = Object.keys(variants[color]);
    if (availableSizes.length > 0) {
      setSelectedSize(availableSizes[0]);
    } else {
      setSelectedSize(null);
    }
  };

  const handleSizeSelect = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    addCart(
      product._id,
      quantity,
      product.price,
      product.title,
      selectedSize,
      selectedColor
    );
  };

  const handleBuyNow = () => {
    clearCart();
    addCart(
      product._id,
      quantity,
      product.price,
      product.title,
      selectedSize,
      selectedColor
    );
    router.push('/checkout');
  };

  const onChange = (e) => {
    setPin(e.target.value);
  };

  const checkServiceAvailability = async () => {
    if (!pin || isNaN(pin)) return;

    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pincode`);
    let pinjson = await response.json();
    const enteredPin = Number(pin);
    if (pinjson.includes(enteredPin)) {
      setService(true);
      setPin('');
    } else {
      setService(false);
      setPin('');
    }
    setShowFlash(true);

    setTimeout(() => {
      setShowFlash(false);
    }, 1500);
  };

  // Check if buttons should be disabled
  const isButtonDisabled = !selectedColor || !selectedSize;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-14 mx-auto">
        <div className="lg:w-full mx-auto flex lg:flex-nowrap flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-[30em] w-[30em] m-auto p-14 -mt-4 lg:h-auto object-cover object-center rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h3 className="text-l title-font text-gray-500 tracking-widest">SnapShop</h3>
            <h2 className="text-gray-900 text-2xl title-font font-medium mb-1">
              {product.title} ({selectedSize}/{selectedColor})
            </h2>
            <p className="leading-relaxed">{product.desc}</p>
            <div className="flex items-center">
              <span className="mr-2">Rating:</span>
              <div className="flex items-center">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 ${index < product.rating ? 'text-pink-500' : 'text-gray-300'
                      }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
              </div>
            </div>


            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {Object.keys(variants || {}).map((color, index) => (
                  <button
                    key={index}
                    className={`border-2 rounded-full w-6 h-6 focus:outline-none ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(color)}
                  ></button>
                ))}
              </div>

              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10"
                    onChange={handleSizeSelect}
                    value={selectedSize || ''}
                  >
                    <option value="" disabled>
                      Select Size
                    </option>
                    {selectedColor &&
                      variants[selectedColor] &&
                      Object.keys(variants[selectedColor]).map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center mt-6">
              <span className="title-font font-semibold text-2xl text-gray-900 m-4">₹{product.price.toFixed(2)}</span>

              <div className="flex items-center border border-gray-300 rounded-lg ml-4">
                <button
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded-l-lg hover:bg-gray-300 focus:outline-none"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 text-center py-2 px-4 border-0 focus:ring-2 focus:ring-pink-300 focus:outline-none"
                  min="1"
                />
                <button
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded-r-lg hover:bg-gray-300 focus:outline-none"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`ml-auto mt-4 sm:mt-0 w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300 sm:h-auto ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isButtonDisabled}
              >
                Add to Cart
              </button>

              {/* Buy Now Button */}
              <Link
                className={`ml-auto text-center mt-4 sm:mt-0 w-full sm:w-auto bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2.5 px-5 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300 sm:h-auto ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                href="#"
                onClick={handleBuyNow}
              >
                Buy Now
              </Link>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Check Delivery Availability</h2>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Enter Pin Code"
                  className="w-40 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:outline-none"
                  onChange={onChange}
                  maxLength="6"
                  minLength="6"
                  value={pin}
                />
                <button
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg"
                  onClick={checkServiceAvailability}
                >
                  Check
                </button>
              </div>
              {showFlash && (
                <div className={`mt-4 ${service ? 'text-green-600' : 'text-red-600'}`}>
                  {service ? 'Service available in your area.' : 'Sorry, we do not deliver to this area.'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





export async function getServerSideProps(context) {
  // Connect to MongoDB if not already connected
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  // Fetch the product based on the slug
  let products = await Product.findOne({ slug: context.query.slug });
  let variants = await Product.find({ title: products.title });
  console.log("Variants:", variants);
  console.log("Product:", products);

  let colorSizeSlug = {};

  // Organize variants by color and size, and add the img field for each color
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = {
        slug: item.slug,
        img: item.img // Add the image for each variant
      };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = {
        slug: item.slug,
        img: item.img // Add the image for each variant
      };
    }
  }

  // Return product and organized variants as props
  return {
    props: {
      product: JSON.parse(JSON.stringify(products)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug))
    },
  };
}
