"use client";

//"src/app/animes/[[...params]]/page.tsx" folder structure for next project


import React from "react";
import { useParams } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "@/components/Loading";
import NotFound from "@/components/notFound";
import { useInfiniteApi } from "@/services/useApi";
import AnimeCard from "@/components/animecard";
import { validateQueries } from "@/constant";

const ListPage = () => {


  const params = useParams();
  const [category, query = null] = params?.params || [];


  const isValidateQuery = validateQueries.includes(category);
  if (!category || !isValidateQuery) {
    return <NotFound />;
  }


  const endpoint = query ? `animes/${category}/${query}` : `animes/${category}`;

  const { data, isError, isLoading, hasNextPage, fetchNextPage } = useInfiniteApi(endpoint);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <NotFound />;
  }

  const allItems = data?.pages.flatMap((page) => page.data.response) || [];
  
  return (
    <div className="h-screen container mx-auto px-4 py-8 mt-[80px]">
      <h1 className="mb-8 text-3xl font-bold capitalize md:text-4xl text-text-primary">
        {`${query || category} Anime`}
      </h1>
        <InfiniteScroll
          dataLength={allItems.length}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={<Loading />}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-2 pt-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
            {allItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flw-item">
                <AnimeCard data={item} />
              </div>
            ))}
          </div>
        </InfiniteScroll>

    </div>
  );
};

export default ListPage;