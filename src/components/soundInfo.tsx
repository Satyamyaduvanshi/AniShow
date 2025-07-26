import React from 'react';
import { FaClosedCaptioning, FaMicrophone } from 'react-icons/fa';


type EpisodesType = {
    rating?: string;
    sub: string | number;
    dub: string | number;
    eps: string | number;
  };


type SoundsInfoProps = {
  episodes: EpisodesType;
};


const SoundsInfo = ({ episodes }: SoundsInfoProps) => {
  return (
    <div className="flex flex-wrap gap-[2px] font-extrabold">
   
      {episodes.rating && (
        <p className="flex items-center gap-1 rounded-sm bg-white px-2 py-0.5 text-sm text-black">
          {episodes.rating}
        </p>
      )}

      {episodes.sub && (
        <p className="flex items-center gap-1 rounded-sm border-orange-400 border bg-orange-300/80 px-1  text-sm text-black">
          <FaClosedCaptioning />
          <span>{episodes.sub}</span>
        </p>
      )}

      {episodes.dub && (
        <p className="flex items-center gap-1 rounded-sm border-green-700 border bg-green-500/80 px-1 text-sm text-black">
          <FaMicrophone />
          <span>{episodes.dub}</span>
        </p>
      )}

    </div>
  );
};

export default SoundsInfo;