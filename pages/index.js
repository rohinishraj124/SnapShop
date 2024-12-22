import Image from "next/image";
import Header from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SnapShop</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Header>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center bg-[#ededed] text-black pb-24 pt-40 px-8">
        <Image
          src="/tagline.jpg"
          alt="Tagline Logo"
          width={200}
          height={200}
          className="rounded-full shadow-lg mb-6"
          loading="lazy"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Welcome to SnapShop!
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-8 leading-relaxed">
          Discover amazing products at unbeatable prices. Your one-stop online shop for everything you need.
        </p>
        <button
          aria-label="Shop Now"
          className="bg-[#fffdfd] text-pink-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform"
        >
          Shop Now
        </button>
      </div>
      <div className='bg-[#aba4a4] h-0.5 w-full rounded-full'></div>
      <section class="text-gray-400 body-font bg-[#ededed]">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">SnapShop Featured Collections</h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-opacity-80 text-gray-700">
              Discover a curated selection of top products from SnapShop. Trendy, unique, and high-quality items to enhance your shopping experience.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 border-opacity-75 p-6 rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-pink-400 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                <p class="leading-relaxed text-base text-gray-600">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 border-opacity-75 p-6 rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-pink-400 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                <p class="leading-relaxed text-base text-gray-600">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 border-opacity-75 p-6 rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-pink-400 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
                <p class="leading-relaxed text-base text-gray-600">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 border-opacity-75 p-6 rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-pink-400 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                <p class="leading-relaxed text-base text-gray-600">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 border-opacity-75 p-6 rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-pink-400 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
                <p class="leading-relaxed text-base text-gray-600">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 border-opacity-75 p-6 rounded-lg bg-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-pink-400 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
                <p class="leading-relaxed text-base text-gray-600">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
          </div>
          <button class="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Explore More</button>
        </div>
      </section>

    </div>
  );
}
