import React from 'react';
import Link from 'next/link';

const Ethnic = () => {
  const products = Array(8).fill({
    category: 'CATEGORY',
    title: 'The Catalyzer',
    price: '₹399',
    image: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/31141456/2024/11/19/c2199616-b230-41d2-b2ad-7911a8502cc71732013802268-GoSriKi-Ethnic-Motifs-Printed-Pleated-Mirror-Work-Anarkali-K-1.jpg',
    href: '/product/wear-the-tshirts',
  });

  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-white to-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Discover Our Products</h1>
        {/* Grid setup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <Link key={index} href={product.href}>
              <div className="cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                {/* Product image */}
                <div className="relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto h-[30vh] md:h-[36vh] block object-cover object-center"
                    src={product.image}
                  />
                </div>
                {/* Product details */}
                <div className="text-center mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-semibold">
                    {product.title}
                  </h2>
                  <p className="mt-2 text-green-600 font-bold">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ethnic;
