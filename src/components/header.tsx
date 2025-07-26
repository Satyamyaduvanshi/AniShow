"use client";

import React, { useState, useRef, useCallback } from "react"; 
import FilterSearch from "./filterSearch"; 
import Image from "next/image";
import Link from "next/link";
import { genres, navButtons, types } from "@/constant";
import { FilterIcon, SearchIcon } from "@/svg";


const Header = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<null | "genres" | "types">(null);
  const [searchTerm, setSearchTerm] = useState("");
  

  const dropdownTimer = useRef<NodeJS.Timeout | null>(null);

 
  const handleMouseEnter =useCallback( (dropdown: "genres" | "types") => {
    if (dropdownTimer.current) {
      clearTimeout(dropdownTimer.current); 
    }
    setActiveDropdown(dropdown);
  },[])
  
  
  const handleMouseLeave =useCallback(() => {
    dropdownTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  },[])

  const slugify = (text: string) => text.trim().toLowerCase().replace(/\s+/g, "-");


  const navButtonClass = `relative group cursor-pointer text-white transition-all duration-300 ease-in-out`;
  const navButtonUnderlineClass = `absolute bottom-0 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full`;
  
  return (
    <>
      <div className="absolute top-3 z-40 w-full">
        <header className="mx-16">
          <nav className="flex h-[50px] items-center justify-between rounded-full bg-[#1d1d1f]/30 px-4 py-7">
            
            <Link href="/home">
              <Image src="/logo2.png" alt="Logo" width={160} height={110} />
            </Link>
            <div className="flex h-10 items-center gap-1 rounded-3xl bg-[#1d1d1f]/80 px-4">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search anime"
                className="h-8 w-[330px] bg-transparent px-2 text-[18px] text-white placeholder:text-gray-400 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-1 text-[18px] font-semibold text-red-500 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 active:scale-90"
                aria-label="Open filter options"
              >
                <FilterIcon />
                FILTER
              </button>
            </div>

            
            <div className="flex items-center gap-6 pr-2 font-semibold">
              
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("genres")}
                onMouseLeave={handleMouseLeave}
              >
                <div className={navButtonClass}>
                  GENRES
                  <div className={navButtonUnderlineClass} />
                </div>
                {activeDropdown === "genres" && (
                   
                  <div className="absolute top-full left-1/2 z-50 mt-2 w-max -translate-x-1/2 rounded-md border border-gray-700 bg-[#1d1d1f]/90 p-4 shadow-lg transition-opacity duration-300">
                    <div className="grid grid-cols-3 gap-x-8 gap-y-2">
                      {genres.map((label) => (
                        <Link key={label} href={`/animes/genre/${slugify(label)}`} className="whitespace-nowrap text-white transition-colors duration-200 hover:text-red-500">
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("types")}
                onMouseLeave={handleMouseLeave}
              >
                <div className={navButtonClass}>
                  TYPES
                  <div className={navButtonUnderlineClass} />
                </div>
                {activeDropdown === "types" && (
                  
                  <div className="absolute top-full left-1/2 z-50 mt-2 w-max -translate-x-1/2 rounded-md border border-gray-700 bg-[#1d1d1f]/90 p-4 shadow-lg transition-opacity duration-300">
                    <div className="flex flex-col gap-2">
                      {types.map((label) => (
                        <Link key={label} href={`/animes/${slugify(label)}`} className="whitespace-nowrap text-white transition-colors duration-200 hover:text-red-500">
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

             
              {navButtons.map((label) => (
                <div className={navButtonClass} key={label}>
                  <Link href={`/animes/${slugify(label)}`}>{label}</Link>
                  <div className={navButtonUnderlineClass} />
                </div>
              ))}
            </div>
          </nav>
        </header>
      </div>

      {isFilterOpen && (
        <div onClick={() => setIsFilterOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div onClick={(e) => e.stopPropagation()} className="z-50 h-auto max-h-[90vh] w-[1200px] max-w-[95vw] rounded-xl bg-gray-100 p-4 text-black shadow-lg">
            <FilterSearch onClose={() => setIsFilterOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;