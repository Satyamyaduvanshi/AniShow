// @/components/AnimeCard.tsx (with adjustments)
import Link from "next/link";
import NextImage from "next/image"; 
import React from "react";
import SoundsInfo from "./soundInfo";

type EpisodesType = {
  rating?: string;
  sub: string | number;
  dub: string | number;
  eps: string | number;
};

type AnimeDataType = {
  id: string | number;
  poster: string;
  title: string;
  episodes: EpisodesType;
  type: string;
  duration?: string; 
};

type AnimeCardProps = {
  data: AnimeDataType;
};

const AnimeCard = ({ data }: AnimeCardProps) => {
  if (!data) return null;

  return (
    <Link href={`/anime/${data.id}`} className="block group">
      <div className="hover:-translate-y-1 transform duration-200 ease-in-out">
        <div className="film-poster mb-2 w-full  rounded-sm bg-[#545454] pb-[140%] relative">
          <div className="absolute bottom-[3px] left-[3px] z-10 opacity-[.9]">
            <SoundsInfo episodes={data.episodes} />
          </div>
          <NextImage
            src={data.poster}
            alt={data.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300"
          />
        </div>
        <h3
          title={data.title}
          className="title line-clamp-1 text-sm font-semibold transition-colors  md:text-base"
        >
          {data.title}
        </h3>
        {data.type && (
          <div className="type mt-1 flex items-center gap-2 text-xs text-gray-400 md:text-sm">
            <span>{data.type}</span>
            {data.duration && (
              <>
                <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                <span>{data.duration}</span>
              </>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default AnimeCard;