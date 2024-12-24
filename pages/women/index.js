import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WomenCategory = () => {
  return (
    <section className="flex flex-col justify-center items-center text-gray-600 body-font">
      <h3 className="text-2xl font-bold text-center mt-6">Categories To Bag</h3>
      <div className="flex justify-center mb-8">
        {/* <Image
          src="/offer.png"
          alt="Tagline Logo"
          width={400} // Adjust the width as needed
          height={200}
          className="object-contain"
        /> */}
        <img className='mt-5 rounded-4 p-6' src="https://img.freepik.com/premium-vector/50-percent-off-discount-creative-composition-summer-sale-banner-with-watermelon-sale-banner-poster_3482-7242.jpg" alt="" />
      </div>
      <div className="container px-5 py-16 mx-auto">
        {/* Adjust grid layout for small and large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Link href={'/women/ethnic'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh] md:h-[36vh] block"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/31141456/2024/11/19/c2199616-b230-41d2-b2ad-7911a8502cc71732013802268-GoSriKi-Ethnic-Motifs-Printed-Pleated-Mirror-Work-Anarkali-K-1.jpg" // Updated image link
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Women</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Ethnic Wear</h2>
              </div>
            </div>
          </Link>
          <Link href={'/women/casualwear'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh] md:h-[36vh] block"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12221932/2023/9/7/b2f738cc-7837-43f5-aafd-815d26ac01a61694083281119SASSAFRASBlackHighNeckCroppedTop1.jpg" // Updated image link
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Women</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Casual Wear</h2>
              </div>
            </div>
          </Link>
          <Link href={'/women/western'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh] md:h-[36vh] block"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/NOVEMBER/12/sRv0QM0Z_06dc3d2c107842a49dc854d5e2b83293.jpg" // Updated image link
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Women</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Western Wear</h2>
              </div>
            </div>
          </Link>
          <Link href={'/women/innerwear'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh] md:h-[36vh] block"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25114674/2023/9/22/411b3f52-01ff-472b-bd0e-e207a0b2af2d1695388415253MashaWomenRedPinkPrintedNightsuit1.jpg" // Updated image link
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Women</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Innerwear and Sleepwear</h2>
              </div>
            </div>
          </Link>
          <Link href={'/women/footwear'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[36vh] md:h-[36vh] block object-cover object-bottom"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30849918/2024/9/23/3c9ddf37-36e6-4c36-9b16-605bd007c1fa1727050403375-Lavie-Women-Solid-Open-Toe-Platform-Sandals-2611727050403007-2.jpg"
                />
              </div>

              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Women</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Footwear</h2>
              </div>
            </div>
          </Link>
          <Link href={'/women/kids'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh] md:h-[36vh] block"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26563830/2023/12/21/3eadc80a-38f4-49aa-af6a-80f74400f48c1703131101959DoubleLayerOffShoulderKidsJumpsuit1.jpg" // Updated image link
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Women</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Kids Wear</h2>
              </div>
            </div>
          </Link>
          <Link href={'/women/jewellery'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh] md:h-[36vh] block"
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29979838/2024/6/17/f09ffb9d-ed35-4043-888e-e86fc2d8e7381718613422437Bracelet1.jpg" // Updated image link
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Women</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Jewellery</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WomenCategory;
