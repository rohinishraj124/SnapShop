import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Men = () => {
  return (
    <section className="flex flex-col justify-center items-center text-gray-600 body-font">
      <Head><title>Men Section</title></Head>
      <h2 className="text-3xl font-bold text-center mt-6">Men Section</h2>
      <div className="flex justify-center mb-8">
        <img
          className="mt-5 rounded-4 p-6"
          src="https://img.freepik.com/premium-vector/50-percent-off-discount-creative-composition-summer-sale-banner-with-watermelon-sale-banner-poster_3482-7242.jpg"
          alt="Sale Banner"
        />
      </div>
      <div className="container px-5 py-16 mx-auto">
        {/* Grid layout for categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* T-shirts */}
          <Link href={'/men/tshirts'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
               <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh]  block"
                  src="https://m.media-amazon.com/images/I/612Rl6GKHoL._AC_UL480_FMwebp_QL65_.jpg"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">T-shirts</h2>
              </div>
            </div>
          </Link>

          {/* Shirts */}
          <Link href={'/men/shirts'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
               <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh]  block"
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgHhByJHFj5WEl70x6A9szuqPfKjGoU4txq04SywTzH8WtarUsArYaKn3XAcpV5eCpVcnupCxyHgdjLgm9jTP99OTpdxvcTcojjefKSwmOsDPIFXUc5zlj&usqp=CAE"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shirts</h2>
              </div>
            </div>
          </Link>

          {/* Jeans */}
          <Link href={'/men/jeans'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
               <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh]  block"
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRevRCxEnapOx-Oa0JKEtW06Ggc9fAPMrbRLr-eCMRHTYY2_UmzmDcp-taj6qSzfJ_Dznax6O0EehdLupH8vp-jBoFdxouIeIP5q8SLvNnrt2EcvfSQ4upv&usqp=CAE"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Jeans</h2>
              </div>
            </div>
          </Link>

          {/* Ethnic Wear */}
          <Link href={'/men/ethnic'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
               <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh]  block"
                  src="https://imgs.search.brave.com/QL2jsWBQTs_5N-VUcGm5yudP3lSGJQtwpCeM6dOdxvc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIyOTY5MDg5L2Mv/NTY0LzU2NC8wLzAv/aWwvZWQxNDUwLzQz/NDg5NzkyNDYvaWxf/NjAweDYwMC40MzQ4/OTc5MjQ2X293ODEu/anBn"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Ethnic Wear</h2>
              </div>
            </div>
          </Link>

          {/* Shorts & Trousers */}
          <Link href={'/men/shorts'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
               <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh]  block"
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQSlGMXtbDUKCmd33Oe2PFqox4M7XGEiQnXdrvHmBRNbbspbFl3BlF_Bhfk6hICSPUEAq_FTv_ihpRTIk2-hTFrrJQecnc5QeYLouKpYUg&usqp=CAE"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shorts & Trousers</h2>
              </div>
            </div>
          </Link>

          {/* Shoes */}
          <Link href={'/men/shoes'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
               <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh]  block"
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStaex7SFDWZgW9xdtRJ_AhsoTU7HFtE7Jh2-OVvlWCN5DrHEts5cofjzK_05leRPp6KOm5E5s7Z2jgUVVAUsaC13z5-LdiNw_nDsyKnx59dgIBPV7aJ4ggGQ"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shoes</h2>
              </div>
            </div>
          </Link>

          {/* Infant Necessities */}
          <Link href={'/men/infant'}>
            <div className="cursor-pointer shadow-lg p-4 w-full h-full">
               <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[30vh]  block"
                  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTMUtHjPilml8RemwvRq7EX3yOpyKDxmd9RnSSXe_BzgsmnLdhOZrZKrLgUw2pC8tGJw783Vard8F2dq_fRG3pZjQ2qjJn4Uehiqskx8s&usqp=CAE"
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

export default Men;
