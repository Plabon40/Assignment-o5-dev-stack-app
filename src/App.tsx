import { Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import { TechnologySection } from "./components/Technology/TechnologySection";
import type { Technology } from "./types/technology";
import Footer from "./components/Footer";
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
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <TechnologySection technologyDataPromise={technologyDataPromise()} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
