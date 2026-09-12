import Heroimg from "../assets/banner-stack.png";
import "../index.css";
const Hero = () => {
  return (
    <section className=" ">
      <div className="container p-6 mx-auto md:flex  justify-between items-center grid grid-rows-2 ">
        <div className="w-[500px] flex flex-col gap-y-6  ">
          <div>
            <h1 className="text-4xl ">Build Your Ideal</h1>
            <h2 className="text-5xl font-bold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </h2>
            <p className="text-gray-400 mt-5">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
          </div>
          <div className="flex flex-row gap-2 ">
            <button className="btn bg-[#F5663F] btn-active btn-secondary rounded-bl-md">
              Explore Technologies
            </button>
            <button className="btn btn-outline px-[50px]"> Learn More</button>
          </div>
        </div>

        <img
          className="object-cover w-[500px] h-[500px]    md:w-[400px] h-[400px]   "
          src={Heroimg}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
