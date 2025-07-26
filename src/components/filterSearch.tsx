"use client";

import React, { useRef, useState, useEffect } from "react";
import { useApi } from "@/services/useApi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Loading from "./Loading";
import AnimeCard from "./animecard"; 

interface FilterSearchProps {
  onClose: () => void;
}

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
  duration?: string; 
}

const FilterSearch: React.FC<FilterSearchProps> = ({ onClose }) => {
  const { data, isLoading, error } = useApi("/animes/most-favorite?page=1");
  const mostFavorite: AnimeItem[] = data?.data?.response || [];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };
  
  useEffect(() => {
    if (mostFavorite.length) {
        handleScroll();
    }
  }, [mostFavorite]);

  const scrollBy = (amount: number) => {
    scrollContainerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="relative p-4 font-sans">
      <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}`}</style>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Most Favorite</h2>
        <button onClick={onClose} className="text-3xl font-light text-gray-500 transition-colors hover:text-black" aria-label="Close filters">
          &times;
        </button>
      </div>

      {error && (
        <p className="text-center text-red-500">
          Error: {error instanceof Error ? error.message : "An unknown error occurred"}
        </p>
      )}
      
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-700">Trending Now</h3>
        <div className="flex space-x-2">
          <button onClick={() => scrollBy(-300)} disabled={isAtStart} className="cursor-pointer rounded-full border border-gray-800 p-2 transition-colors hover:bg-gray-300 disabled:cursor-not-allowed disabled:border-gray-300 disabled:opacity-50" aria-label="Scroll left">
            <ChevronLeft className="h-5 w-5 text-gray-800" />
          </button>
          <button onClick={() => scrollBy(300)} disabled={isAtEnd} className="cursor-pointer rounded-full border border-gray-800 p-2 transition-colors hover:bg-gray-300 disabled:cursor-not-allowed disabled:border-gray-300 disabled:opacity-50" aria-label="Scroll right">
            <ChevronRight className="h-5 w-5 text-gray-800" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="scrollbar-hide flex space-x-4 overflow-x-auto p-2"
      >
        {mostFavorite.map((item) => (
          <div key={item.id} className="w-44 flex-shrink-0">
            <AnimeCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSearch;