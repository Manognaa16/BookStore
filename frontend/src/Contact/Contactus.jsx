import React from "react";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import ContactCard from "../componenets/ContactCard";

function Contactus() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen dark:bg-slate-900 dark:text-white my-19">
        <ContactCard />
      </div>
      <Footer />
    </div>
  );
}

export default Contactus;
