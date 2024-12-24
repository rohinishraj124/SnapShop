import React from 'react';
import Link from 'next/link';
import Product from '../../models/Product';
import mongoose from 'mongoose';

const Tshirts = ({ products }) => {
  console.log(products);
  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-white to-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Discover Our Products</h1>
        {/* Grid setup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <Link key={product._id} href={`/product/${product.slug}`}>
              <div className="cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                {/* Product image */}
                <div className="relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto h-[30vh] md:h-[36vh] block object-cover object-center"
                    src={product.img}
                  />
                </div>
                {/* Product details */}
                <div className="text-center mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-semibold">
                    {product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}
                  </h2>
                  <p className="mt-2 text-green-600 font-bold">₹{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div> 
      </div>
    </section>
  );
};

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  // Fetch products from the database
  let products = await Product.find({ category: 'kids', genre: 'men' });

  // Optionally, you can add a virtual field `href` if it's not in your schema
  products = products.map(product => ({
    ...product.toObject(),
    href: `/product/${product._id}` // Dynamic href based on the product's _id
  }));

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Tshirts;
