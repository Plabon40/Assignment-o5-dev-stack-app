import type { Technology } from "../../types/technology";
import { RxStar } from "react-icons/rx";
import ShowStack from "./ShowStack";
import { useState } from "react";
interface technologyCardProps {
  technology: Technology[];
}

const TechnologyCardComponent = ({ technology }: technologyCardProps) => {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (tech: Technology) => {
    const newStack = [...stack, tech];
    setStack(newStack);
  };

  return (
    <div className="container mx-auto p-6 sm:px-6 lg:px-5 lg:py-10 ">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
        <section className="lg:col-span-2 ">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 ">
            {technology.map((tech: Technology) => (
              <div
                key={tech.id}
                className="flex min-h-[255px] flex-col rounded-2xl border border-gray-200 ]  p-4"
              >
                <div className="flex items-center justify-between">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-8 w-8 object-contain"
                  />

                  <span
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium ${tech.color}`}
                  >
                    {tech.badge}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-bold text-gray-900">
                  {tech.name}
                </h2>

                <p className="mt-2 line-clamp-3 text-[12px]  text-gray-400">
                  {tech.description}
                </p>

                <div className="mt-4 border-t border-gray-100" />

                <div className="mt-3 mb-4 flex text-[11px] flex-wrap items-center justify-between  text-xs">
                  <span className="rounded bg-gray-100 px-2 py-2 text-gray-600">
                    {tech.category}
                  </span>

                  <span className="text-gray-400">{tech.difficulty}</span>

                  <span className="flex items-center gap-1 text-gray-700">
                    <RxStar className="text-orange-300 " />
                    {tech.rating}
                  </span>
                </div>

                <button
                  onClick={() => handleAddToStack(tech)}
                  disabled={stack.some((item) => item.id === tech.id)}
                  type="button"
                  className="btn btn-neutral mt-auto h-9 min-h-9 w-full rounded-lg text-sm hover:bg-gray-100 hover:text-black disabled:bg-gray-200 disabled:text-gray-400 "
                >
                  {stack.some((item) => item.id === tech.id)
                    ? "Added"
                    : "Add to Stack"}
                </button>
              </div>
            ))}
          </div>
        </section>

        <ShowStack stack={stack} setStack={setStack} />
      </div>
    </div>
  );
};

export default TechnologyCardComponent;
