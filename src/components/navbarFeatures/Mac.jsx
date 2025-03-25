import React, { useRef } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "../hero/style.css";
import Footer from "../hero/Footer";

const Mac = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div>
        {/* Top images div */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 2 } }}
          className="pt-24 pl-40 items-center group relative grid grid-cols-7 "
        >
          <div>
            <img
              src="/mac/macbookair.png"
              alt="macbookair"
              className="h-16 w-28 "
            />
            <p className="pl-2 opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              MacBook Air
            </p>
          </div>
          <div>
            <img
              src="/mac/macbookair.png"
              alt="macbookair"
              className="h-16 w-28 "
            />
            <p className="pl-2 opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              MacBook Pro
            </p>
          </div>
          <div>
            <img src="/mac/imac.avif" alt="imac" className="h-16 w-20 " />
            <p className="pl-4 opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              iMac
            </p>
          </div>
          <div>
            <img src="/mac/macmini.jpg" alt="macmini" className="h-16 w-20 " />
            <p className="pl-4 opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              Mac mini
            </p>
          </div>
          <div>
            <img
              src="/mac/macstudio.jpeg"
              alt="macstudio"
              className="h-16 w-20 "
            />
            <p className="pl-2 opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              Mac Studio
            </p>
          </div>
        </motion.div>

        {/* text */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 2 } }}
          className="pt-24 flex justify-between"
        >
          <h1 className="text-7xl font-semibold pl-24  font-[Inter]">Mac</h1>
          <p className="text-2xl font-semibold pr-24  font-[Inter]">
            If you can dream it,
            <br /> Mac can do it.
          </p>
        </motion.div>

        {/* video section */}
        <motion.div
          className="pt-20 overflow-hidden"
          whileHover={{ scale: 0.8, transition: { duration: 0.5 } }}
        >
          <video
            src="/mac/video1.mp4"
            loop
            autoPlay
            muted
            className="w-full h-full object-cover rounded-2xl overflow-hidden"
          ></video>
        </motion.div>

        {/* second text */}
        <div>
          <h2 className="text-4xl font-semibold pl-24 pt-24   font-[Inter]">
            Get to know Mac
          </h2>
        </div>

        {/* bottom images */}
        <div className="relative pt-12 pl-24  group">
          {/* Left Navigation Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/40 p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Swiper Component */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <img
                src="/mac/macintelligence.jpg"
                alt="macintelligence"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[580px]">
                <p className="text-md font-semibold text-black pl-6 font-[Inter] ">
                  Apple Intelligence and macOS
                </p>
                <p className="text-2xl font-semibold text-black pl-4 font-[Inter] leading-snug">
                  Easy to use. Easy to love.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/mac/gofast.jpg"
                alt="gofast"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[560px]">
                <p className="text-md font-semibold text-white pl-4 font-[Inter]">
                  Performance and Battery Life
                </p>
                <p className="text-2xl font-semibold text-white pl-4 font-[Inter] leading-snug">
                  Go fast. Go far.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/mac/dreamteam.jpg"
                alt="dreamteam"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[560px]">
                <p className="text-md font-semibold text-black pl-4 font-[Inter] ">
                  Mac and iPhone
                </p>
                <p className="text-2xl font-semibold text-black pl-4 font-[Inter] leading-snug">
                  Dream team.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/mac/macruns.jpg"
                alt="macruns"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[560px]">
                <p className="text-md font-semibold text-black pl-4 font-[Inter] ">
                  Compatibility
                </p>
                <p className="text-2xl font-semibold text-black pl-4 font-[Inter] leading-snug">
                  Mac runs your <br />
                  <span>favourite apps.</span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/mac/yourbusiness.jpg"
                alt="yourbusiness"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[560px]">
                <p className="text-md font-semibold text-black pl-4 font-[Inter] ">
                  Privacy and Security
                </p>
                <p className="text-2xl font-semibold text-black pl-4 font-[Inter] leading-snug">
                  Your business is <br />
                  <span>nobody else's.</span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/mac/buildtostand.jpg"
                alt="buildtostand"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[560px]">
                <p className="text-md font-semibold text-white pl-4 font-[Inter] ">
                  Durability
                </p>
                <p className="text-2xl font-semibold text-white pl-4 font-[Inter] leading-snug">
                  Build to stand
                  <br />
                  <span>the test of time.</span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/mac/ourvalues.jpg"
                alt="ourvalues"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[560px]">
                <p className="text-md font-semibold text-white pl-4 font-[Inter] ">
                  Apple Values
                </p>
                <p className="text-2xl font-semibold text-white pl-4 font-[Inter] leading-snug">
                  Our values drive <br />
                  <span>everything we do.</span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Right Navigation Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/40 p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
        {/* bottom text */}
        <div className="pl-24 pt-32  ">
          <h2 className="text-5xl font-semibold fot-[Inter]">Mac essentials</h2>
        </div>

        <div className="flex justify-center pt-32">
          <div className="flex justify-between items-center w-[90%] max-w-[1200px]">
            {/* Left Section - Mac Accessories */}
            <div className="w-[45%] text-left">
              <h2 className="text-3xl font-semibold">Mac accessories</h2>
              <p className="text-gray-600 mt-2">
                Explore keyboards, mice, and other essentials.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                Shop Mac accessories &#10140;
              </a>
              <img
                src="/mac/keyboard.jpg"
                alt="keyboard"
                className="mt-6 w-full rounded-lg"
              />
            </div>

            {/* Right Section - Studio Display */}
            <div className="w-[45%] text-left">
              <h2 className="text-3xl font-semibold">Studio Display</h2>
              <p className="text-gray-600 mt-2">
                The 68.29 cm (27") 5K Retina display pairs beautifully with any
                Mac.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                Learn more &#10140;
              </a>
              <img
                src="/mac/studiodisplay.jpg"
                alt="studiodisplay"
                className="mt-6 w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mac;
