const Hamburger = () => {
  return (
    <div className="flex justify-start float-right absolute mt-8 md:hidden py-6 px-6 rounded-2xl bg-gray-100">
      <ul className="flex flex-col gap-3 text-gray-400 text-[16px] items-start justify-start whitespace-nowrap">
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
    </div>
  );
};

export default Hamburger;
