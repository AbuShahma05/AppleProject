import React from "react";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { IoBag } from "react-icons/io5";


const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 bg-gray-100  w-full h-12 pl-48 z-50 shadow-xl">
        <div className="flex items-center justify-between px-12 py-3 ">
          <ul className="flex space-x-8">
            <li>
              <Link to="/">
                <FaApple className="mt-1" />
              </Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/mac">Mac</Link>
            </li>
            <li>
              <Link to="/ipad">iPad</Link>
            </li>
            <li>
              <Link to="/iphone">iPhone</Link>
            </li>
            <li>
              <Link to="/watch">Watch</Link>
            </li>
            <li>
              <Link to="/airpods">AirPods</Link>
            </li>
            <li>
              <Link to="/tv&home">TV & Home</Link>
            </li>
            <li>
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/search">
                <GoSearch className="mt-1" />
              </Link>
            </li>
            <li>
              <Link to="/search">
                <IoBag className="mt-1" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
