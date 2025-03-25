import React from "react";
import { Link } from "react-router-dom"; 
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import ThrdMid from "./ThrdMid";
import FourthMid from "./FourthMid";
import { motion } from "motion/react";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
      <div className="bg-gray-100 mt-24 w-full h-full">
        {/* Heading & Visit Apple Store */}
        <div className="flex justify-between items-start ml-32 pr-28 pt-20">
          <div>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 2 } }}
              whileHover={{ scale: 1.1, transition: { duration: 1 } }}
              className="text-black text-[45px] font-bold leading-[1.1] tracking-tight font-[Inter]"
            >
              Store.
              <span className="text-gray-500">
                The best way to buy the <br /> products you love.
              </span>
            </motion.h1>
          </div>
          <div className="flex items-center gap-3 pt-5">
            <IoLogoAppleAppstore size={32} />
            <p className="text-gray-700 font-sans">
              Visit an Apple Store
              <br />
              <a
                href="https://www.apple.com/in/retail/"
                className="text-blue-600 hover:underline"
              >
                Find one near you
              </a>
            </p>
          </div>
        </div>

        {/* Product Image Panel */}
        <div className="ml-32 pt-24 grid grid-cols-9 mr-4  items-center  group relative">
          {/* Mac */}
          <div className="text-center">
            <Link to="/mac">
              <img
                src="/mac.png"
                alt="Mac"
                className="w-[120px] h-[78px] object-contain "
              />
              <p className="pt-2 pl-12 hover:underline">Mac</p>
            </Link>
          </div>

          {/* iPhone */}
          <div className="text-center">
            <Link to="/iphone">
              <img
                src="/iphone.png"
                alt="iPhone"
                className="w-[120px] h-[78px] object-contain "
              />
              <p className="pt-2 hover:underline">iPhone</p>
            </Link>
          </div>

          {/* ipad */}
          <div className="text-center">
            <Link to="/ipad">
              <img
                src="ipad.png"
                alt="ipad"
                className="w-[120px] h-[78px] object-contain "
              />
              <p className="pt-2 hover:underline">iPad</p>
            </Link>
          </div>

          {/* apple watch */}
          <div className="text-center">
            <Link to="/shopapplewatch">
              <img
                src="applewatch.png"
                alt="applewatch"
                className="w-[120px] h-[78px] object-contain "
              />
              <p className="pt-2 hover:underline">Apple Watch</p>
            </Link>
          </div>

          {/* airpods*/}
          <div className="text-center">
            <Link to="/shopairpods">
              <img
                src="airpods.png"
                alt="airpods"
                className="w-[120px] h-[78px] object-contain "
              />
              <p className="pt-2 hover:underline">Air Pods</p>
            </Link>
          </div>

          {/* airtag*/}
          <div className="text-center">
            <Link to="/shopairtag">
              <img
                src="airtag.png"
                alt="airtag"
                className="w-[120px] h-[78px] object-contain "
              />
              <p className="pt-2 hover:underline">Air Tag</p>
            </Link>
          </div>

          {/* apple tv*/}
          <div className="text-center">
            <Link to="/shopappletv">
              <img
                src="appletv.png"
                alt="appletv"
                className="w-[120px] h-[78px] object-contain "
              />
              <p className="pt-2 hover:underline">Apple TV 4K</p>
            </Link>
          </div>

          {/* Homepad*/}
          <div className="text-center">
            <Link to="/shophomepad">
              <img
                src="homepad.png"
                alt="homepad"
                className="w-[120px] h-[78px] object-contain "
              />
              <p className="pt-2 hover:underline">HomePad</p>
            </Link>
          </div>

          {/* accessories*/}
          <div className="text-center">
            <Link to="/shopaccessories">
              <img
                src="accessories.png"
                alt="accessories"
                className="w-[120px] h-[78px] object-contain "
              />
              <p className="pt-2 hover:underline">Accessories</p>
            </Link>
          </div>
          <FaAngleRight
            size={40}
            className="absolute top-34 right-0 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          />
        </div>

        <ThrdMid />
        <FourthMid />
        <Footer />
      </div>
    </>
  );
};

export default Hero;
