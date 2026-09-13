import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png";
import Hamburger from "./NavComponent/ResponsiveComponent/Hamburger";
import { useState } from "react";
const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 items-center px-4 md:px-6 py-3">
        <img src={Logo} alt="" />

        <ul className="hidden  table:text-[13px] md:flex  items-center justify-center gap-4  text-gray-400 whitespace-nowrap">
          <li className="hover:text-[#d91b7e]">
            <a href="">Home</a>
          </li>

          <li className="hover:text-[#d91b7e]">
            <a href="">Technologies</a>
          </li>

          <li className="hover:text-[#d91b7e]">
            <a href="">Projects</a>
          </li>

          <li className="hover:text-[#d91b7e]">
            <a href="">About</a>
          </li>

          <li className="hover:text-[#d91b7e]">
            <a href="">Contact</a>
          </li>
        </ul>

        <div className="hidden md:flex justify-end items-center gap-3 whitespace-nowrap">
          <button className="text-gray-700 hover:text-purple-600">
            Sign In
          </button>

          <button className="btn bg-[#d91b7e] btn-active btn-secondary rounded-4xl">
            Sign Up
          </button>
        </div>

        <div className="flex justify-end md:hidden ">
          <button onClick={handleHamburgerClick} className={`text-2xl  `}>
            {isHamburgerOpen === true ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
          {isHamburgerOpen && <Hamburger />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
