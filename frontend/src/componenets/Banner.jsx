import React from "react";
import banner from "../../public/books.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse md:flex-row my-10 dark:bg-slate-900 dark:text-white">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 dark:bg-slate-900 dark:text-white">
          <div className=" space-y-8">
            <h1 className=" text-2xl md:text-4xl font-bold dark:bg-slate-900 dark:text-white">
              Hello, welocme here to learn something{" "}
              <span className="text-pink-500">new everyday!!</span>
            </h1>
            <p className=" text-sm md:text-xl dark:bg-slate-900 dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <label className="input validator w-full dark:bg-slate-900 dark:text-white">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden dark:bg-slate-900 dark:text-white">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-secondary ">Get Started</button>
        </div>
        <div className="w-full md:w-1/2 dark:bg-slate-900 dark:text-white">
          <img className="w-150" src={banner} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
