import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Head from "next/head";
import { ToastContainer, toast, Bounce } from "react-toastify";

export default function Home({ theme, toggleTheme }) {
  const [currentImage, setCurrentImage] = useState({ index: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const Categories = [
    {
      title: "men",
      images: ["/categories/men1.jpg", "/categories/men2.jpg", "/categories/men3.jpg"],
      url: "/men",
    },
    {
      title: "women",
      images: ["/categories/women1.jpg", "/categories/women2.jpg", "/categories/women3.jpg"],
      url: "/women",
    },
    {
      title: "kids",
      images: ["/categories/kids1.jpg", "/categories/kids2.jpg", "/categories/kids3.jpg"],
      url: "/kids",
    },
  ];

  const featuredCollections = [
    {
      title: "Tshirts",
      images: ["/featured/tshirt1.jpg", "/featured/tshirt2.jpg", "/featured/tshirt3.jpg"],
    },
    {
      title: "Jeans",
      images: ["/featured/jeans1.jpg", "/featured/jeans2.jpg", "/featured/jeans3.jpg"],
    },
    {
      title: "Shoes",
      images: ["/featured/shoes1.jpg", "/featured/shoes2.jpg", "/featured/shoes3.jpg"],
    },
    {
      title: "Ethnic",
      images: ["/featured/ethnic1.jpg", "/featured/ethnic2.jpg", "/featured/ethnic3.jpg"],
    },
    {
      title: "Innerwear",
      images: ["/featured/innerwear1.jpg", "/featured/innerwear2.jpg", "/featured/innerwear3.jpg"],
    },
    {
      title: "Casual",
      images: ["/featured/casual1.jpg", "/featured/casual2.jpg", "/featured/casual3.jpg"],
    },
  ];
  const allCollections = [...Categories, ...featuredCollections]; // Combine both sections
  const [imageIndex, setImageIndex] = useState(allCollections.map(() => 0));

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500, // Slow transition (increase for even slower effect)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Time before changing slides
    fade: true, // Enables smooth fading transition
    cssEase: "ease-in-out", // Smooth easing
  };



  // Fade-in animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndexes) =>
        prevIndexes.map((currentIndex, i) =>
          (currentIndex + 1) % allCollections[i].images.length
        )
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [allCollections]);

  const handleCardClick = (title) => {
    toast.info(`Go to ${title} section from your categories.`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    // Scroll to the section
    const section = document.querySelector(".categories");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Head>
        <title>SnapShop</title>
      </Head>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInVariants}
        className="flex flex-col items-center text-gray-600 dark:text-gray-300 justify-center pb-24 pt-24 px-8"
      >
        <div className="w-full max-w-4xl">
          <Slider {...sliderSettings}>
            {["image1.jpg", "image2.jpg", "image3.jpg"].map((img, index) => (
              <div key={index} className="relative transition-opacity duration-1000 ease-in-out">
                <Image
                  src={`/featured/${img}`}
                  alt={`Slide ${index + 1}`}
                  width={800}
                  height={400}
                  className="rounded-lg object-contain w-full h-64 mx-auto"
                />
              </div>
            ))}
          </Slider>

        </div>
        <h1 className="text-4xl text-gray-900 dark:text-gray-300 md:text-5xl font-bold mt-10 mb-6 text-center">
          Welcome to SnapShop!
        </h1>
        <p className="text-lg md:text-xl text-gray-900 dark:text-gray-300 text-center max-w-2xl mb-8 leading-relaxed">
          Discover amazing products at unbeatable prices. Your one-stop online shop for everything you need.
        </p>
        <button
          aria-label="Shop Now"
          className="bg-[#fffdfd]  text-pink-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-100 hover:scale-105 transition-transform"
          onClick={() => {
            const section = document.querySelector(".categories");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Shop Now
        </button>
      </motion.div>

      <div className="bg-[#aba4a4] h-0.5 w-full rounded-full"></div>

      <section className="categories text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">

          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-gray-300">
              Categories
            </h1>
          </div>


          <div className="flex flex-wrap -m-4 categories">
            {Categories.map((item, index) => (
              <Link key={index} href={item.url} passHref className="sm:w-1/2 md:w-[20em] p-4 w-[11em] m-auto">
                <div
                  className="sm:w-1/2 md:w-[20em] p-4 w-[11em] m-auto cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="border border-gray-200 p-2 rounded-lg relative group h-full transition-transform duration-500 ease-in-out hover:scale-105">
                    <div className="relative w-full overflow-hidden" style={{ paddingBottom: "150%" }}>
                      <div className="absolute inset-0 w-full h-full">
                        {item.images.map((img, imgIdx) => (
                          <Image
                            key={imgIdx}
                            src={img}
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                            className={`absolute inset-0 rounded-lg transition-all duration-1000 ease-in-out ${imgIdx === imageIndex[index]
                                ? "opacity-100 scale-100 z-10"
                                : "opacity-0 scale-105 z-0"
                              } ${hoveredIndex === index ? "scale-110 opacity-90" : ""}`}
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-center text-lg text-gray-900 dark:text-gray-300 font-medium title-font p-3 mb-2 mt-4">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>




          <div className="flex flex-wrap w-full mb-20 mt-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-gray-300">
              SnapShop Featured Collections
            </h1>
          </div>

          <div className="flex flex-wrap -m-4">
            {featuredCollections.map((item, index) => {
              const globalIndex = Categories.length + index; // Adjust index for shared state
              return (
                <div
                  key={`featured-${index}`}
                  className="sm:w-1/2 md:w-[20em] p-4 w-[11em] m-auto"
                  onMouseEnter={() => setHoveredIndex(globalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleCardClick(item.title)}
                >
                  <div className="border border-gray-200 p-2 rounded-lg relative group h-full transition-transform duration-500 ease-in-out hover:scale-105">
                    <div className="relative w-full overflow-hidden" style={{ paddingBottom: "150%" }}>
                      <div className="absolute inset-0 w-full h-full">
                        {item.images.map((img, imgIdx) => (
                          <Image
                            key={imgIdx}
                            src={img}
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                            className={`absolute inset-0 rounded-lg transition-all duration-1000 ease-in-out ${imgIdx === imageIndex[globalIndex]
                                ? "opacity-100 scale-100 z-10"
                                : "opacity-0 scale-105 z-0"
                              } ${hoveredIndex === globalIndex ? "scale-110 opacity-90" : ""}`}
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-center text-lg text-gray-900 dark:text-gray-300 font-medium title-font p-3 mb-2 mt-4">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div class="flex flex-wrap mt-2 m-auto mb-4">
          <div class="xl:w-1/3 md:w-1/2 p-4 m-auto">
            <div class="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center w-[20em] m-auto  ">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M14 6a2 2 0 1 0 -4 0c0 1.667 .67 3 2 4h-.008l7.971 4.428a2 2 0 0 1 1.029 1.749v.823a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-.823a2 2 0 0 1 1.029 -1.749l7.971 -4.428"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 dark:text-gray-300 font-medium title-font mb-2">Premium Tshirts</h2>
              <p class="leading-relaxed text-base text-gray-900 dark:text-gray-300 text-center">Our T-Shirts are 100% made of cotton.</p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4 m-auto">
            <div class="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center w-[20em] m-auto  ">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 dark:text-gray-300font-medium title-font mb-2">Free Shipping</h2>
              <p class="leading-relaxed text-base text-gray-900 dark:text-gray-300 text-center">We ship all over India for FREE.</p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4 m-auto">
            <div class="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center w-[20em] m-auto  ">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></svg>
              </div>
              <h2 class="text-lg text-gray-900 dark:text-gray-300 font-medium title-font mb-2"> Exciting Offers</h2>
              <p class="leading-relaxed text-gray-900 dark:text-gray-300 text-base text-center">We provide amazing offers & discounts on our products.</p>
            </div>
          </div>
        </div>
      </section >
    </div>
  );
}
