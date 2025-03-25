import React, { useRef } from "react";
import { motion } from "motion/react";
import Footer from "../hero/Footer";

const Ipad = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div>
        {/* Top images div */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 2 } }}
          className="pt-28 pl-40 items-center group relative grid grid-cols-11 "
        >
          <div>
            <img
              src="/ipad/ipadpro.svg"
              alt="macbookair"
              className="h-16 w-24 "
            />
            <p className="pl-4 opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              Ipad pro
            </p>
          </div>
          <div>
            <img
              src="/ipad/ipadair.svg"
              alt="macbookpro"
              className="h-16 w-24 "
            />
            <p className="pl-4  opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              iPad Air
            </p>
          </div>
          <div>
            <img src="/ipad/ipad.svg" alt="imac" className="h-16 w-12" />
            <p className="pl-2 opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              iPad
            </p>
          </div>
          <div>
            <img src="/ipad/ipadmini.svg" alt="macmini" className="h-16 w-8 " />
            <p className="opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              iPad mini
            </p>
          </div>
          <div>
            <img
              src="/ipad/compare.svg"
              alt="macstudio"
              className="h-16 w-20 "
            />
            <p className="pl-2 opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              Compare
            </p>
          </div>
          <div>
            <img
              src="/ipad/pencil.svg"
              alt="macstudio"
              className="h-16 w-20 "
            />
            <p className="opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              Apple Pencil
            </p>
          </div>
          <div>
            <img
              src="/ipad/keyboard.svg"
              alt="macstudio"
              className="h-16 w-20 "
            />
            <p className=" opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              Keyboards
            </p>
          </div>
          <div>
            <img
              src="/ipad/accessories.svg"
              alt="macstudio"
              className="h-16 w-20 "
            />
            <p className=" opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              Accessories
            </p>
          </div>
          <div>
            <img
              src="/ipad/ipados.svg"
              alt="macstudio"
              className="h-16 w-20 "
            />
            <p className="pl-2 opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              iPadOS 18
            </p>
          </div>
          <div>
            <img
              src="/ipad/shopipad.svg"
              alt="macstudio"
              className="h-16 w-20 "
            />
            <p className="pl-2 opacity-70 hover:opacity-100 hover:text-black font-[Inter]">
              Shop iPad
            </p>
          </div>
        </motion.div>

        {/* text */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 2 } }}
          className="pt-24 flex justify-between"
        >
          <h1 className="text-7xl font-semibold pl-24  font-[Inter]">iPad</h1>
          <p className="text-2xl font-semibold pr-24  font-[Inter]">
            Touch, draw and type
            <br /> on one magical device.
          </p>
        </motion.div>

        {/* video section */}
        <motion.div
          className="pt-20 overflow-hidden"
          whileHover={{ scale: 0.8, transition: { duration: 0.5 } }}
        >
          <video
            src="/ipad/video.mp4"
            loop
            autoPlay
            muted
            className="w-full h-full object-cover rounded-2xl overflow-hidden"
          ></video>
        </motion.div>

        {/* second text */}
        <div>
          <h2 className="text-4xl font-semibold pl-24 pt-24   font-[Inter]">
            Get to know iPad
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ipad;
