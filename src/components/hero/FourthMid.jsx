import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "./style.css";

const FourthMid = () => {
  const swiperRef = useRef(null);
  return (
    <div className="pl-32 pt-20">
      <div>
        <h2 className="text-black text-[24px] font-bold font-[Inter]">
          Help is here.
          <span className="text-gray-500">
            Whenever and however you need it.
          </span>
        </h2>
      </div>

      {/* Swipper same logic */}
      <div className="relative pt-8 group">
        {/* left navigation button */}
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
              src="specialist.jpeg"
              alt="specialist"
              className="w-[480px] h-[500px] object-cover rounded-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-100 left-4 right-4 text-white text-center">
              <p className="text-black mr-52">Apple Specialist</p>

              <p className="text-black text-xl font-bold font-[Inter]">
                Shop one on one with a specialist online.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="session.jpeg"
              alt="store"
              className="w-[480px] h-[500px] object-cover rounded-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-95 left-4 right-4 text-white text-center">
              <p className="text-black text-xl font-bold font-[Inter]">
                Join free sessions at your Apple Store
              </p>
              <p className="text-black">
                Learn about the latest features and grow how to go further with
                your Apple devices
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="business.jpeg"
              alt="business"
              className="w-[480px] h-[500px] object-cover rounded-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-95 left-4 right-4 text-white text-center">
              <p className="mr-70">Business</p>
              <p className="text-white text-xl font-bold font-[Inter]">
                From enterprise to small business, we'll work with you.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="gettoknow.jpeg"
              alt="gettoknow"
              className="w-[480px] h-[500px] object-cover rounded-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-105 left-4 right-4 text-white text-center">
              <p className="text-black text-xl font-bold font-[Inter]">
                Get to know your new device with personal setup
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="watchandlearn.jpeg"
              alt="watchandlearn"
              className="w-[480px] h-[500px] object-cover rounded-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-105 left-4 right-4 text-white text-center">
              <p className="text-black text-xl font-bold font-[Inter]">
                Need Support? Our teams are here for you.
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
    </div>
  );
};

export default FourthMid;
