import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from '@/models/Product';
import showToast from '@/utils/toastfile';
import mongoose from 'mongoose';
import Head from 'next/head';

export default function Page({ addCart, product, variants, clearCart, user }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [image, setImage] = useState(product.img);
  const [service, setService] = useState(null);
  const [pin, setPin] = useState('');
  const [showFlash, setShowFlash] = useState(false);
  const router = useRouter();

  // Track toast ID for removal
  const [toastId, setToastId] = useState(null);

  // Trigger toast on page load if no color is selected
  useEffect(() => {
    if (!selectedColor && !toast.isActive(toastId)) {
      const id = toast.warn('Please select a color!', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        onClose: () => setToastId(null),
      });
  
      setToastId(id);
    }
  }, [selectedColor]);
  
  

  useEffect(() => {
    if (selectedColor) {
      const colorVariants = variants[selectedColor];
      if (colorVariants && selectedSize) {
        setImage(colorVariants[selectedSize]?.img || product.img);
      }
    }
  }, [selectedColor, selectedSize]);

  const handleAddToCart = () => {
    if (!user) {
      showToast({ error: 'Please log in to proceed to checkout.' });
      return;
    }

    // Check if color and size are selected first
    if (!selectedColor || !selectedSize) {
      toast.error('Please select both color and size!');
      return;
    }

    // Proceed with adding to the cart after validation
    addCart(
      product._id,
      quantity,
      product.price,
      product.title,
      selectedSize,
      selectedColor
    );

    // Show success toast once product is added to the cart
    toast.success('Product added to cart', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      });
  };

  const handleBuyNow = () => {
    if (!user) {
      showToast({ error: 'Please log in to proceed to checkout.' });
      return;
    }
    if (!selectedColor || !selectedSize) {
      toast.error('Please select both color and size!');
      return;
    }
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
      showToast({ success: 'Your Pincode is Serviceable' });
      setPin('');
    } else {
      setService(false);
      showToast({ error: 'Sorry! Your Pincode is not Serviceable' });
      setPin('');
    }
    setShowFlash(true);

    setTimeout(() => {
      setShowFlash(false);
    }, 1500);
  };

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

  const isButtonDisabled = !selectedColor || !selectedSize;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <Head>
        <title>{product.title}</title>
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Slide}
      />
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
                    className={`w-4 h-4 ${index < product.rating ? 'text-pink-500' : 'text-gray-300'}`}
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
                    disabled={!selectedColor}
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

            <div className="flex mb-5">
              <span className="title-font font-medium text-2xl text-gray-900">
                ₹{product.price}
              </span>
              <div className="flex ml-6">
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
                  className="w-12 text-center border-t-0 border-b-0 border-l-0 border-gray-300 focus:ring-0 focus:outline-none"
                  min="1"
                />
                <button
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded-r-lg hover:bg-gray-300 focus:outline-none"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleAddToCart}
                className={`bg-pink-500 text-white px-6 py-3 rounded-lg mr-4 focus:outline-none focus:ring-2 focus:ring-pink-300 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isButtonDisabled}
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className={`bg-pink-500 text-white px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isButtonDisabled}
              >
                Buy Now
              </button>
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
