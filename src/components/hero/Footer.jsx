import { FaApple } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-700 px-32 py-32 ">
      {/* Apple Store Online */}
      <div className="flex items-center space-x-2 text-sm mb-6">
        <FaApple className="text-xl" />
        <FaAngleRight />
        <p>Apple Store Online</p>
      </div>

      {/* Footer Grid Layout */}
      <div className="grid grid-cols-5 gap-10 text-sm">
        {/* Column 1 - Shop and Learn */}
        <div>
          <p className="font-semibold mb-2">Shop and Learn</p>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Store</li>
            <li className="hover:underline cursor-pointer">Mac</li>
            <li className="hover:underline cursor-pointer">iPad</li>
            <li className="hover:underline cursor-pointer">iPhone</li>
            <li className="hover:underline cursor-pointer">Watch</li>
            <li className="hover:underline cursor-pointer">AirPods</li>
            <li className="hover:underline cursor-pointer">TV & Home</li>
            <li className="hover:underline cursor-pointer">AirTag</li>
            <li className="hover:underline cursor-pointer">Accessories</li>
            <li className="hover:underline cursor-pointer">Gift Cards</li>
          </ul>
        </div>

        {/* Column 2 - Account */}
        <div>
          <p className="font-semibold mb-2">Account</p>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Manage Your Apple ID</li>
            <li className="hover:underline cursor-pointer">Apple Store Account</li>
            <li className="hover:underline cursor-pointer">iCloud.com</li>
          </ul>
          <p className="font-semibold mt-4 mb-2">Entertainment</p>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Apple One</li>
            <li className="hover:underline cursor-pointer">Apple TV+</li>
            <li className="hover:underline cursor-pointer">Apple Music</li>
            <li className="hover:underline cursor-pointer">Apple Arcade</li>
            <li className="hover:underline cursor-pointer">Apple Podcasts</li>
            <li className="hover:underline cursor-pointer">Apple Books</li>
            <li className="hover:underline cursor-pointer">App Store</li>
          </ul>
        </div>

        {/* Column 3 - Apple Store */}
        <div>
          <p className="font-semibold mb-2">Apple Store</p>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Find a Store</li>
            <li className="hover:underline cursor-pointer">Genius Bar</li>
            <li className="hover:underline cursor-pointer">Today at Apple</li>
            <li className="hover:underline cursor-pointer">Apple Summer Camp</li>
            <li className="hover:underline cursor-pointer">Ways to Buy</li>
            <li className="hover:underline cursor-pointer">Apple Trade In</li>
            <li className="hover:underline cursor-pointer">Recycling Programme</li>
            <li className="hover:underline cursor-pointer">Find Your Order - Apple</li>
            <li className="hover:underline cursor-pointer">Shopping Help</li>
          </ul>
        </div>

        {/* Column 4 - Business, Education, Healthcare */}
        <div>
          <p className="font-semibold mb-2">For Business</p>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Apple and Business</li>
          </ul>
          <p className="font-semibold mt-4 mb-2">For Education</p>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Apple and Education</li>
            <li className="hover:underline cursor-pointer">Shop for Education</li>
            <li className="hover:underline cursor-pointer">Shop for University</li>
          </ul>
          <p className="font-semibold mt-4 mb-2">For Healthcare</p>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Apple in Healthcare</li>
            <li className="hover:underline cursor-pointer">Health on Apple Watch</li>
          </ul>
        </div>

        {/* Column 5 - Apple Values, About Apple */}
        <div>
          <p className="font-semibold mb-2">Apple Values</p>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Accessibility</li>
            <li className="hover:underline cursor-pointer">Environment</li>
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Supply Chain</li>
          </ul>
          <p className="font-semibold mt-4 mb-2">About Apple</p>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Newsroom</li>
            <li className="hover:underline cursor-pointer">Apple Leadership</li>
            <li className="hover:underline cursor-pointer">Career Opportunities</li>
            <li className="hover:underline cursor-pointer">Investors</li>
            <li className="hover:underline cursor-pointer">Ethics & Compliance</li>
            <li className="hover:underline cursor-pointer">Events</li>
            <li className="hover:underline cursor-pointer">Contact Apple</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-xs text-gray-500 border-t border-gray-300 pt-4">
        <p>More ways to shop: <span className="text-blue-500 hover:underline cursor-pointer">Find an Apple Store</span> or <span className="text-blue-500 hover:underline cursor-pointer">other retailer</span> near you. Or call 000800 040 1966.</p>
        <p className="mt-2">Copyright © 2025 Apple Inc. All rights reserved.</p>
        <div className="flex space-x-4 mt-2">
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
          <p className="hover:underline cursor-pointer">Terms of Use</p>
          <p className="hover:underline cursor-pointer">Sales Policy</p>
          <p className="hover:underline cursor-pointer">Legal</p>
          <p className="hover:underline cursor-pointer">Site Map</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
