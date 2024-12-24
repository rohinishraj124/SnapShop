import React from 'react';
import Link from 'next/link';

const Kids = () => {
  return (
    <section className="flex flex-col justify-center items-center text-gray-600 body-font">
      <h3 className="text-2xl font-bold text-center mt-6">Categories To Bag</h3>
      <div className="flex justify-center mb-8">
        <img
          className="mt-5 rounded-4 p-6"
          src="https://img.freepik.com/premium-vector/50-percent-off-discount-creative-composition-summer-sale-banner-with-watermelon-sale-banner-poster_3482-7242.jpg"
          alt="Summer Sale Banner"
        />
      </div>
      <div className="container px-5 py-16 mx-auto">
        {/* Grid layout for categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Shorts */}
          <Link href={'/kids/shorts'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative w-full h-[300px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3B0TD0nMnCnE3rYqOgizbe6I5U3A7F3sIMKmk1r_yf2vX9joQOT78A2X1iR7PRpyDxsXU0quOGPNy8lY4rFekd6qkrAEClG0XZDOLH8Ad&usqp=CAE"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">kids</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">shorts</h2>
              </div>
            </div>
          </Link>

          {/* Baby */}
          <Link href={'/kids/baby'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative w-full h-[300px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR3CwMpbMcLbiGVvE_tMbIyruRxC3RDbmRdpOaua28INzCcfN8Ap5UpWzx2A0HwAbWupNqqSqNkesKKmJphUud9V86JBtRLf5HgTeRHAp2P_HDZRb_JN5vWuQ&usqp=CAE"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">kids</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Baby Clothes</h2>
              </div>
            </div>
          </Link>

          {/* Innerwear */}
          <Link href={'/kids/innerwear'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative w-full h-[300px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXyIAq-6G-sWWVr5_6IkfA__2WYUEYT23-X-IQW8YG5Xbj4AQzSJ9-0PzqkYdlvh1yBSxz6nt5WSeQ0C1xN6qQoWEyuZCDFLIWpqNcgkM&usqp=CAE"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">kids</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Innerwear & Sleepwear</h2>
              </div>
            </div>
          </Link>

          {/* Ethnic Wear */}
          <Link href={'/kids/ethnic'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative w-full h-[300px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover"
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSojmIbMljJI0FpbjQIYsxOmPBGIewHN1NXAoJ3SzTqskHwQmn6_rL_COHIvFv949GMuXjA-49H-csUdVw4ShHEMtEfUg13j7fHseIs0m8&usqp=CAE"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">kids</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Ethnic Wear</h2>
              </div>
            </div>
          </Link>

          {/* Tshirts & Tops */}
          <Link href={'/kids/tshirts'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative w-full h-[300px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover"
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSFgUecUVc1LbK_eTNxFXfc34Alsu3gCrt9un2nilY1RvMOGYd2Y0Y0W3sFTsxIlxgwglxASRrpSsIcHvwIPPGHuxh82iVsYhwL4oe6gjv02JR-vj5aJAgNHA&usqp=CAE"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">kids</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Tshirts & Tops</h2>
              </div>
            </div>
          </Link>

          {/* Value Pack & Sets */}
          <Link href={'/kids/valuepack'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative w-full h-[300px] rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover"
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjqJ4LTK7vH7VANYWww5qF-OL0gUKIP6o0z2UBbooEJhOZcuuOPzMsf106hCNdZSKmMDBgIj6NlWjfgdnCESLZmyeqwOMaw2-C9uDINJfSpZ2-wKb6LfHo&usqp=CAE"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">kids</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Value Pack & Sets</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Kids;
