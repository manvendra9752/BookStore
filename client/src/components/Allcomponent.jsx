import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import FreeBook from "./FreeBook";
import Footer from "./Footer";

const Allcomponent = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-900 dark:text-white h-screen">
      <Navbar />
      <Home />
      <FreeBook />
      <Footer />
    </div>
  );
};

export default Allcomponent;
