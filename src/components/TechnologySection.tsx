import { use } from "react";

import type { Technology } from "../types/technology";

import TechnologyCardComponent from "./TechnologyCard";

interface TechnologySectionProps {
  technologyDataPromise: Promise<Technology[]>;
}

export const TechnologySection = ({
  technologyDataPromise,
}: TechnologySectionProps) => {
  const technology = use(technologyDataPromise);

  return (
    <div>
      <section className="container p-6 mt-10 mx-auto">
        <h1 className="text-3xl font-bold ">
          Explore the
          <strong className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Technologies
          </strong>
        </h1>
        <p className="text-gray-400 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </section>
      <TechnologyCardComponent technology={technology} />
    </div>
  );
};

export default TechnologySection;
