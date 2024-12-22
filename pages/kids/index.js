import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const men = () => {
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
          <Link href={'/kids/tshirts'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh] md:h-[36vh] block"
                  src="https://m.media-amazon.com/images/I/612Rl6GKHoL._AC_UL480_FMwebp_QL65_.jpg" // Updated image link
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">T-shirts</h2>
              </div>
            </div>
          </Link>
          <Link href={'/kids/shirts'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh] md:h-[36vh] block"
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgHhByJHFj5WEl70x6A9szuqPfKjGoU4txq04SywTzH8WtarUsArYaKn3XAcpV5eCpVcnupCxyHgdjLgm9jTP99OTpdxvcTcojjefKSwmOsDPIFXUc5zlj&usqp=CAE" // Updated image link
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shirts</h2>
              </div>
            </div>
          </Link>
          <Link href={'/kids/jeans'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh] md:h-[36vh] block"
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRevRCxEnapOx-Oa0JKEtW06Ggc9fAPMrbRLr-eCMRHTYY2_UmzmDcp-taj6qSzfJ_Dznax6O0EehdLupH8vp-jBoFdxouIeIP5q8SLvNnrt2EcvfSQ4upv&usqp=CAE" // Updated image link
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Jeans</h2>
              </div>
            </div>
          </Link>
          <Link href={'/kids/shorts'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh] md:h-[36vh] block"
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQSlGMXtbDUKCmd33Oe2PFqox4M7XGEiQnXdrvHmBRNbbspbFl3BlF_Bhfk6hICSPUEAq_FTv_ihpRTIk2-hTFrrJQecnc5QeYLouKpYUg&usqp=CAE" // Updated image link
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shorts</h2>
              </div>
            </div>
          </Link>
          <Link href={'/kids/shoes'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh] md:h-[36vh] block"
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStaex7SFDWZgW9xdtRJ_AhsoTU7HFtE7Jh2-OVvlWCN5DrHEts5cofjzK_05leRPp6KOm5E5s7Z2jgUVVAUsaC13z5-LdiNw_nDsyKnx59dgIBPV7aJ4ggGQ" // Updated image link
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shoes & Trousers</h2>
              </div>
            </div>
          </Link>
          <Link href={'/kids/infant'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh] md:h-[36vh] block"
                  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTMUtHjPilml8RemwvRq7EX3yOpyKDxmd9RnSSXe_BzgsmnLdhOZrZKrLgUw2pC8tGJw783Vard8F2dq_fRG3pZjQ2qjJn4Uehiqskx8s&usqp=CAE" // Updated image link
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Infant Necessities</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default men;
