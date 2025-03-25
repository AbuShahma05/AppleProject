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

const Iphone = () => {
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
            <img src="/iphone/iphone.png" alt="iphone" className="h-16 w-28 " />
            <p className="pl-2 opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              iPhone 16 Pro
            </p>
          </div>
          <div>
            <img
              src="/iphone/iphone16.jpeg"
              alt="iphone16"
              className="h-16 w-28 "
            />
            <p className="pl-6 opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              iPhone 16
            </p>
          </div>
          <div>
            <img
              src="/iphone/compare.svg"
              alt="compare"
              className="h-16 w-28 "
            />
            <p className="pl-4 opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              Compare
            </p>
          </div>
        </motion.div>

        {/* text */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 2 } }}
          className="pt-24 flex justify-between"
        >
          <h1 className="text-7xl font-semibold pl-24  font-[Inter]">iPhone</h1>
          <p className="pt-8  text-2xl font-semibold pr-24  font-[Inter]">
            Designed to be loved.
          </p>
        </motion.div>

        {/* video section */}
        <motion.div
          className="pt-20 "
          whileHover={{ scale: 0.8, transition: { duration: 0.5 } }}
        >
          <video
            src="/iphone/video.mp4"
            loop
            autoPlay
            muted
            className="w-full h-full object-cover rounded-2xl overflow-hidden"
          ></video>
        </motion.div>

        {/* second text */}
        <div>
          <h2 className="text-4xl font-semibold pl-24 pt-24   font-[Inter]">
            Get to know iPhone
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
                src="/iphone/powerful.jpg"
                alt="macintelligence"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[580px]">
                <p className="text-md font-semibold text-white pl-6 font-[Inter] ">
                  Apple Intelligence 
                </p>
                <p className="text-2xl font-semibold text-white pl-4 font-[Inter] leading-snug">
                  Powerful possibilities.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/iphone/cutting.jpg"
                alt="cutting"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[560px]">
                <p className="text-md font-semibold text-white pl-4 font-[Inter]">
                  Cutting-Edge Cameras
                </p>
                <p className="text-2xl font-semibold text-white pl-4 font-[Inter] leading-snug">
                  Picture your best <br />
                  <span>photos and videos</span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/iphone/chip.jpg"
                alt="chip"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[560px]">
                <p className="text-md font-semibold text-white pl-4 font-[Inter] ">
                  Chip and Battery Life
                </p>
                <p className="text-2xl font-semibold text-white pl-4 font-[Inter] leading-snug">
                  Fast that lasts.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/iphone/innovation.jpg"
                alt="innovation"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[560px]">
                <p className="text-md font-semibold text-black pl-4 font-[Inter] ">
                  Innovation
                </p>
                <p className="text-2xl font-semibold text-black pl-4 font-[Inter] leading-snug">
                  Beautiful and durable,<br />
                  <span>by design.</span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/iphone/environment.jpg"
                alt="environment"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[560px]">
                <p className="text-md font-semibold text-black pl-4 font-[Inter] ">
                  Environment
                </p>
                <p className="text-2xl font-semibold text-black pl-4 font-[Inter] leading-snug">
                 Recycle. Reuse. Repeat.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/iphone/privacy.jpg"
                alt="privacy"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[560px]">
                <p className="text-md font-semibold text-white pl-4 font-[Inter] ">
                  Privacy
                </p>
                <p className="text-2xl font-semibold text-white pl-4 font-[Inter] leading-snug">
                 Your data. <br />
                 <span>Just where you want it.</span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/iphone/cutomize.jpg"
                alt="cutomize"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[560px]">
                <p className="text-md font-semibold text-white pl-4 font-[Inter] ">
                  Customize Your iPhone
                </p>
                <p className="text-2xl font-semibold text-white pl-4 font-[Inter] leading-snug">
                  Make it you. <br />
                  <span>Through and through.</span>
                </p>
              </div>
            </SwiperSlide>
 

          <SwiperSlide>
              <img
                src="/iphone/helpful.jpg"
                alt="helpful"
                className="w-[372px] h-[680px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
              />

              {/* Text on Image */}
              <div className="absolute bottom-[560px]">
                <p className="text-md font-semibold text-white pl-4 font-[Inter] ">
                  Peace of Mind.
                </p>
                <p className="text-2xl font-semibold text-white pl-4 font-[Inter] leading-snug">
                  Helpful features. <br />
                  <span>Just in case.</span>
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
          <h2 className="text-5xl font-semibold fot-[Inter]">iPhone essentials.</h2>
        </div>

        <div className="flex justify-center pt-32">
          <div className="flex justify-between items-center w-[90%] max-w-[1200px]">
            {/* Left Section - Mac Accessories */}
            <div className="w-[45%] text-left">
              <h2 className="text-3xl font-semibold">iPhone accessories</h2>
              <p className="text-gray-600 mt-2">
                Explore colourful cases, USB-C power adapter, 
                <br />
                <span>Magsafe accessories and more.</span>
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                Shop iPhone accessories &#10140;
              </a>
              <img
                src="/iphone/accessories.jpg"
                alt="keyboard"
                className="mt-6 w-full rounded-lg"
              />
            </div>

            {/* Right Section - Studio Display */}
            <div className="w-[45%] text-left">
              <h2 className="text-3xl font-semibold">AirTag</h2>
              <p className="text-gray-600 mt-2">
                Attach one key to your keys. Put another in Your
                <br />
                <span>backpacks. if they're misplaced, just use the Find My app.</span>
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                Buy &#10140;
              </a>
              <img
                src="/iphone/airtag.jpg"
                alt="studiodisplay"
                className="mt-6 w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Iphone;
