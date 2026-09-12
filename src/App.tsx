import { Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import { TechnologySection } from "./components/TechnologySection";
import type { Technology } from "./types/technology";
const technologyDataPromise = async (): Promise<Technology[]> => {
  const r = await fetch("/public/Data.json");
  const data = await r.json();
  return data;
};
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense>
        <TechnologySection technologyDataPromise={technologyDataPromise()} />
      </Suspense>
    </>
  );
}

export default App;
