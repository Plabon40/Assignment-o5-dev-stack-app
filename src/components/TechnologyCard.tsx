import type { Technology } from "../types/technology";
import { RxStar } from "react-icons/rx";
interface technologyCardProps {
  technology: Technology[];
}

const TechnologyCardComponent = ({ technology }: technologyCardProps) => {
  return (
    <div className="grid grid-cols-[2fr] items-center">
      <div className="container mx-auto p-6 md:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technology.map((tech: Technology) => {
            return (
              <div
                key={tech.id}
                className="w-full border border-gray-200 rounded-2xl flex flex-col gap-6 p-6 min-h-[470px]"
              >
                <div className="flex justify-between items-center">
                  <img className="w-10 h-10" src={tech.icon} alt={tech.name} />

                  <span className="inline-flex px-4 h-[30px] items-center justify-center border border-blue-400 rounded-full text-blue-400">
                    {tech.badge}
                  </span>
                </div>

                <h2 className="font-bold text-2xl sm:text-3xl">{tech.name}</h2>

                <p className="text-gray-400">{tech.description}</p>

                <div className="flex flex-wrap justify-between gap-2 items-center">
                  <h2 className="inline-flex px-3 h-[30px] items-center justify-center bg-gray-100 rounded">
                    {tech.category}
                  </h2>

                  <h2 className="text-gray-400">{tech.difficulty}</h2>

                  <span className="flex items-center gap-1">
                    <RxStar className="text-orange-300" />
                    {tech.rating}
                  </span>
                </div>

                <button className="mt-auto btn btn-neutral w-full">
                  Add to Stock
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="  w-[300px] h-[250px] border border-gray-200 rounded-2xl ">
        <h2 className="text-3xl">Your Stack</h2>
        <p className="text-gray-400">No technologies selected yet</p>
        <span className="">Your stack is empty</span>
      </div>
    </div>
  );
};

export default TechnologyCardComponent;
