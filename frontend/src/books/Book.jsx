import React from "react";
import Navbar from "../componenets/Navbar.jsx";
import Footer from "../componenets/Footer";
import Course from "../componenets/Course";
import bookList from "../../public/list.json";

export default function Book() {
  console.log(bookList);
  return (
    <div>
      <div>
        <Navbar />
        <div className="min-h-screen dark:bg-slate-900 dark:text-white">
          <Course bookList={bookList} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
