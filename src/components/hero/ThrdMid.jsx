import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "./style.css"; 

const ThrdMid = () => {
  const swiperRef = useRef(null);

  return (
    <div className="pt-24 pl-32">
      <div>
        <h2 className="text-black text-[24px] font-bold font-[Inter]">
          The latest.
          <span className="text-gray-500">
            Take a look at what's new right now.
          </span>
        </h2>
      </div>

      {/* Swiper Wrapper */}
      <div className="relative pt-8 group">
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
              src="macbookair.jpeg"
              alt="macbook"
              className="w-[400px] h-[500px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-[370px] left-8 text-white">
              <p className="text-xl font-bold text-black font-[Inter]">
                MacBook Air
              </p>
              <span className="text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 text-transparent bg-clip-text">
                Apple Intelligence∆
              </span>
              <br />
              <span className="text-lg text-black">From ₹99900.00‡</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="iphone16pro.jpeg"
              alt="iphone"
              className="w-[400px] h-[500px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-[370px] left-8 text-white">
              <p className="text-xl font-bold text-white font-[Inter]">
                iPhone 16 Pro
              </p>
              <span className="text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 text-transparent bg-clip-text">
                Apple Intelligence∆
              </span>
              <br />
              <span className="text-lg text-white">From ₹119900.00‡</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="ipad.jpeg"
              alt="ipad"
              className="w-[400px] h-[500px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-[390px] left-8 text-white">
              <p className="text-xl font-bold text-black font-[Inter]">iPad</p>
              <span className="text-lg text-black">From ₹34900.00‡</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="iphone16e.jpeg"
              alt="iphone16e"
              className="w-[400px] h-[500px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-[370px] left-8 text-white">
              <p className="text-xl font-bold text-black font-[Inter]">
                iPhone 16e
              </p>
              <span className="text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 text-transparent bg-clip-text">
                Apple Intelligence∆
              </span>
              <br />
              <span className="text-lg text-black">From ₹59900.00‡</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="macstudio.jpeg"
              alt="macstudio"
              className="w-[400px] h-[500px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-[370px] left-8 text-white">
              <p className="text-xl font-bold text-black font-[Inter]">
                Mac Studio
              </p>
              <span className="text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 text-transparent bg-clip-text">
                Apple Intelligence∆
              </span>
              <br />
              <span className="text-lg text-black">From ₹214900.00‡</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="iphone16.jpeg"
              alt="iphone16"
              className="w-[400px] h-[500px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-[370px] left-8 text-white">
              <p className="text-xl font-bold text-white font-[Inter]">
                iPhone 16
              </p>
              <span className="text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 text-transparent bg-clip-text">
                Apple Intelligence∆
              </span>
              <br />
              <span className="text-lg text-white">From ₹79900.00‡</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="applewatchseries.jpeg"
              alt="applwatchseries"
              className="w-[400px] h-[500px] object-cover rounded-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-85 left-8 text-white">
              <p className="text-xl font-bold text-black font-[Inter] ">
                Apple Watch Series 10
              </p>
              <p className="text-black pt-2">Thinstant classic</p>
              <br />
              <span className="text-lg text-black">From ₹46900.00‡</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="straps.jpeg"
              alt="straps"
              className="w-[400px] h-[500px] object-cover rounded-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-100 left-8 text-white">
              <p className="text-xl font-bold text-black font-[Inter]">
                Show your true colours
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="macbookpro.jpeg"
              alt="macbookpro"
              className="w-[400px] h-[500px] object-cover rounded-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-[90px] left-8 text-white">
              <p className="text-xl font-bold text-white font-[Inter]">
                MacBook Pro
              </p>
              <span className="text-lg font-medium bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 text-transparent bg-clip-text">
                Apple Intelligence∆
              </span>
              <br />
              <span className="text-lg text-white">From ₹169900.00‡</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="applewatchultra2.jpeg"
              alt="applwatchultra2"
              className="w-[400px] h-[500px] object-cover rounded-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
            />

            {/* text on images */}
            <div className="absolute bottom-[90px] left-8 text-white">
              <p className="text-xl font-bold text-white font-[Inter]">
                Apple Watch Ultra 2
              </p>
              <p className="text-white">New finish. Never quit</p>
              <br />
              <span className="text-lg text-white">From ₹99900.00‡</span>
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

export default ThrdMid;
