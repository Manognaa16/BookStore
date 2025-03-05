import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res);
        setBook(res.data);
      } catch (error) {
        console.log("Getting data from backend to frontend error", error);
      }
    };
    getBooks();
  }, []);
  // console.log(bookList);
  return (
    <div>
      <div className="w-full max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="py-30 items-center justify-center text-center dark:bg-slate-900 dark:text-white">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! ;)</span>
          </h1>
          <p className="mt-12 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
          <Link to="/">
            <button className="btn btn-secondary mt-12">back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((book) => (
            <Cards item={book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
