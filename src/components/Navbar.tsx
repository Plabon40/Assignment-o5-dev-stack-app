import Logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <nav className="">
      <div className="container mx-auto grid grid-cols-3 gap-3  items-center px-6 py-3">
        <img src={Logo} alt="" />
        <ul className="flex items-cente  gap-4 text-gray-400">
          <li className="text-[#d91b7e]">
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <div className="flex justify-end items-center gap-3 ">
          <button className="text-gray-700 hover:text-purple-600">
            Sign In
          </button>
          <button className="btn  bg-[#d91b7e] btn-active btn-secondary rounded-4xl">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
