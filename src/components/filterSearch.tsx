"use client";

import { useApi } from "@/services/useApi";
import Image from "next/image";
import React, { useRef } from "react";


import { ChevronLeft, ChevronRight } from "lucide-react";

interface EpisodeInfo {
  sub: number;
  dub: number;
  eps: number;
}

interface AnimeItem {
  id: string;
  title: string;
  type: string;
  poster: string;
  episodes: EpisodeInfo;
}

const FilterSearch = () => {
  const { data, isLoading, error } = useApi("/animes/most-favorite?page=1");
  const mostFavorite: AnimeItem[] = data?.data?.response || [];


  const scrollContainerRef = useRef<HTMLDivElement>(null);


  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, 
        behavior: "smooth",
      });
    }
  };


  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, 
        behavior: "smooth",
      });
    }
  };

  return (

    <div className="relative bottom-1 p-4 font-sans bg-amber-200">

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;  
            scrollbar-width: none;  
          }
        `}
      </style>

      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Most Favorite</h2>
        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Loading and Error States */}
      {isLoading && <p className="text-gray-600">Loading...</p>}
      {error && (
        <p className="text-red-500">Error: {(error as Error).message}</p>
      )}


      <div
        ref={scrollContainerRef}
        className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide pt-2 pl-2 pr-2"
      >
        {mostFavorite.map((item) => (
    
          <a
            key={item.id}
            href="#" 
            className="flex-shrink-0 w-44 space-y-2 group transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Image
              src={item.poster || "/fallback-image.jpg"}
              alt={item.title}
              width={176}
              height={264}
              className="rounded-lg object-cover w-full aspect-[2/3] bg-gray-300"
            />

            <div className="flex flex-col">
              <h2
                className="text-gray-800 font-semibold truncate group-hover:text-gray-600"
                title={item.title}
              >
                {item.title}
              </h2>

              <div className="flex items-center justify-between mt-1">
                
                <div className="flex items-center space-x-1">
                  {item.episodes?.sub && (
                    <span className="border-[#c49002] border text-[#c49002] bg-[#c49002]/20 text-[9px] font-bold px-1.5 py-0.5  rounded">
                      S: {item.episodes.sub}
                    </span>
                  )}
                  {item.episodes?.dub && (
                    <span className="border-green-500 border text-green-600 bg-green-500/20 text-[9px] font-bold px-1.5 py-0.5 rounded">
                      D: {item.episodes.dub}
                    </span>
                  )}
                   {item.episodes?.eps && (
                    <span className="border-blue-500 border text-blue-600 bg-blue-500/20 text-[9px] font-bold px-1.5 py-0.5 rounded">
                      T: {item.episodes.eps}
                    </span>
                  )}
                </div>

                
                <span className="border border-gray-300 text-gray-900 text-[10px] font-bold px-1.5 py-0.5 rounded">
                  {item.type}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FilterSearch;
