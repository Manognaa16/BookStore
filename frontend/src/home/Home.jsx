import React from "react";
import Navbar from "../componenets/Navbar.jsx";
import Banner from "../componenets/Banner";
import FreeBook from "../componenets/FreeBook";
import Footer from "../componenets/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </div>
  );
}
