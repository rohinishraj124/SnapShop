import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Page() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { slug } = router.query;

  // Fetch product data based on slug
  useEffect(() => {
    if (!slug) return; // Don't fetch until slug is available

    // Simulate a fetch request (replace this with an actual API request)
    const fetchProduct = async () => {
      setLoading(true);
      // Replace this mock data with an actual fetch request using the slug
      const data = {
        name: 'The Catcher in the Rye',
        brand: 'BRAND NAME',
        price: 58.00,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ratione corporis ducimus tempore odit, hic velit voluptatem voluptate id necessitatibus modi quis repellat blanditiis excepturi. Velit odio incidunt eaque voluptas quisquam.",
        image: 'https://m.media-amazon.com/images/I/612Rl6GKHoL._AC_UL480_FMwebp_QL65_.jpg',
        reviews: 4,
        colors: ['#ffffff', '#4a4a4a', '#d90429'], // example color options
        sizes: ['SM', 'M', 'L', 'XL'],
      };
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    // Here you can implement the functionality to add the item to the cart
    alert(`Added ${quantity} item(s) to the cart.`);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-14 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full p-6 lg:h-auto object-cover object-center rounded" src={product.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {/* Star icons for reviews */}
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
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">${product.price.toFixed(2)}</span>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="ml-4 p-2 border rounded w-16"
                  min="1"
                />
                <button onClick={handleAddToCart} className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
