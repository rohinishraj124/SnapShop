import React from 'react';
import { useRouter } from 'next/router';
const Order = () => {


  const router = useRouter();
  const {id} = router.query
  console.log(id);




  return (
    <section className="text-gray-600 body-font overflow-hidden bg-[#ededed]">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white shadow-lg rounded-lg p-10">
          {/* Text Section */}
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-indigo-500 tracking-widest font-bold uppercase">SnapShop</h2>
            <h1 className="text-gray-900 text-3xl title-font font-semibold mb-4">
              Order ID: <span className="text-indigo-500">#12345678</span>
            </h1>
            <p className="leading-relaxed text-gray-700 font-medium mb-4">Order Details:</p>
            <div className="overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-gray-900 font-semibold">Item</th>
                    <th className="px-4 py-2 text-gray-900 font-semibold">Quantity</th>
                    <th className="px-4 py-2 text-gray-900 font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Blue T-shirt</td>
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">$40.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Black Jeans</td>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">$50.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Sneakers</td>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">$70.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex border-t border-b mt-6 mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Total</span>
              <span className="ml-auto text-gray-900 font-semibold">$160.00</span>
            </div>
            <div className="flex items-center">
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:shadow-lg rounded transition duration-300">
                View Invoice
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:text-red-500 hover:bg-gray-300 transition duration-300">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Image Section */}
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg shadow-md"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
