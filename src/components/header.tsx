"use client";

import React, { useState } from "react";
import FilterSearch from "./filterSearch";

const Header = () => {
  const [filter, setFilter] = useState(false);

  function filterChange() {
    setFilter((prev) => !prev);
  }

  return (
    <>
      <div className="absolute top-3 bg-amber-100 w-full z-40">
        <header>
          <nav className="flex items-center h-[50px] justify-between px-4">
            <div>
              <h1 className="text-black text-2xl">anishow</h1>
            </div>

            <div className="text-2xl">
              <div className="bg-gray-900 rounded-3xl flex items-center px-4 gap-1 h-10">
                <div className="font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white z-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  placeholder="Search anime"
                  className="bg-gray-900 text-white px-2 h-8 text-[18px] outline-none"
                />

                <div>
                  <button
                    onClick={filterChange}
                    className="text-[18px] flex hover:scale-105 transition-transform duration-100 items-center gap-1"
                    aria-label="Toggle Filter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3Z"
                      />
                    </svg>
                    FILTER
                  </button>
                </div>
              </div>
            </div>

            <div className="">
hell
            </div>
          </nav>
        </header>
      </div>

      {filter && (
        <div className="flex items-center justify-center w-full h-screen fixed top-0 left-0 bg-black/50 z-30">
          <div className="z-50 h-[800px] w-[1200px] text-black bg-white absolute transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-xl p-4 left-1/2 top-1/2">
            <FilterSearch/>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
