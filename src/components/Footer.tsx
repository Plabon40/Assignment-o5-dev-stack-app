import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-10">
      <footer className=" py-6 container mx-auto px-6">
        <div className=" grid grid-cols-[2fr_1fr_1fr_1fr] gap-6 items-center ">
          <div className="flex flex-col gap-3">
            <img className="w-[150px]" src={Logo} alt="Dev Stack Logo" />
            <p className="text-gray-400 mt-2 text-[12px] w-[300px]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <ul className="flex gap-5 flex-row text-[12px]">
              <li>
                <a href="">Github</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Linkdin</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 ">
            <h1 className="text-[14px]">PRODUCT</h1>
            <ul className=" text-gray-400 text-[12px] flex flex-col gap-1">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Technologies</a>
              </li>
              <li>
                <a href="">Project</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[14px]">COMPANY</h1>
            <ul className=" text-gray-400 text-[12px] flex flex-col gap-1">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[14px]">LEGAL</h1>
            <ul className=" text-gray-400 text-[11px] flex flex-col gap-1">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Service </a>
              </li>
              <li>
                <a href="">Feedback </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-300 mt-5" />
        <p className="text-[11px] text-gray-400 mt-5">
          &copy; 2026 Dev Stack All Rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
