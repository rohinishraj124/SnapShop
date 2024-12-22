import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Page() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [pin, setPin] = useState('');
  const [service, setService] = useState(null);
  const [showFlash, setShowFlash] = useState(false); // State to control flash visibility

  const checkServiceAvailability = async () => {
    if (!pin || isNaN(pin)) return;
  
    let response = await fetch('http://localhost:3000/api/pincode');
    let pinjson = await response.json();
    console.log(pinjson);
    const enteredPin = Number(pin);
    if (pinjson.includes(enteredPin)) {
      setService(true); 
    } else {
      setService(false); 
    }
    setShowFlash(true);
  
    setTimeout(() => {
      setShowFlash(false);
    }, 1500);
  };
  

  const onChange = (e) => {
    setPin(e.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to the cart.`);
  };

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      setLoading(true);
      const data = {
        name: 'The Catcher in the Rye',
        brand: 'BRAND NAME',
        price: 499,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ratione corporis ducimus tempore odit, hic velit voluptatem voluptate id necessitatibus modi quis repellat blanditiis excepturi. Velit odio incidunt eaque voluptas quisquam.",
        image: 'https://m.media-amazon.com/images/I/612Rl6GKHoL._AC_UL480_FMwebp_QL65_.jpg',
        reviews: 4,
        colors: ['#ffffff', '#4a4a4a', '#d90429'],
        sizes: ['SM', 'M', 'L', 'XL'],
      };
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [slug]);

  if (loading) return <div>Loading...</div>;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-14 mx-auto">
    <div className="lg:w-full mx-auto flex lg:flex-nowrap flex-wrap"> {/* Prevent wrapping at lg and above */}
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full p-6 lg:h-auto object-cover object-center rounded"
        src={product.image}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                fill={index < product.reviews ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 text-pink-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="text-gray-600 ml-3">{product.reviews} Reviews</span>
          </span>
        </div>
        <p className="leading-relaxed">{product.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            {product.colors.map((color, index) => (
              <button
                key={index}
                className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                {product.sizes.map((size, index) => (
                  <option key={index}>{size}</option>
                ))}
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
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
          <button
            onClick={handleAddToCart}
            className="ml-auto mt-4 sm:mt-0 w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300 sm:h-auto"
          >
            Add to Cart
          </button>
          <button
                onClick={handleAddToCart}
                className="ml-auto mt-4 sm:mt-0 w-full sm:w-auto bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2.5 px-5 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300 sm:h-auto"
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
            />
            <button
              onClick={checkServiceAvailability}
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-lg focus:outline-none"
            >
              Check
            </button>
          </div>

          {showFlash && (
            <div className={`mt-4 p-2 rounded-md transition-all duration-500 ${service ? 'bg-green-500' : 'bg-red-500'} text-white`}>
              <p className="text-sm">{service ? 'Delivery Available' : 'Delivery Not Available'}</p>
            </div>
          )}

          <p className="mt-2 text-sm text-gray-500">Enter your pin code to check delivery availability.</p>
        </div>

      </div>
    </div>
  </div>
</section>

  );
}
