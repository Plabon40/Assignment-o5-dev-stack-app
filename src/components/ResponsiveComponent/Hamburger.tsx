const Hamburger = () => {
  return (
    <div>
      <ul className="hidden text-[16px]  md:flex  items-center justify-center gap-4  text-gray-400 whitespace-nowrap">
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
    </div>
  );
};

export default Hamburger;
