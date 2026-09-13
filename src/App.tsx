import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import { TechnologySection } from "./components/Technology/TechnologySection";
import type { Technology } from "./types/technology";
import Footer from "./components/Footer";
import { Suspense } from "react";
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
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <TechnologySection technologyDataPromise={technologyDataPromise()} />
      </Suspense>

      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
