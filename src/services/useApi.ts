import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import api from './api';

const fetchData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || error.message || 'API Error'
    );
  }
};

export const useApi = (endpoint: string) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: () => fetchData(endpoint),
    enabled: !!endpoint,
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

// const { data, isLoading, error } = useApi('/');



const fetchInfiniteData = async ({ pageParam = 1, queryKey }: any) => {
  const [endpoint] = queryKey;
  try {
    const response = await api.get(`${endpoint}?page=${pageParam}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || error.message || 'Infinite API Error'
    );
  }
};

export const useInfiniteApi = (endpoint: string) => {
  return useInfiniteQuery({
    queryKey: [endpoint],
    queryFn: fetchInfiniteData,
    initialPageParam: 1,
    retry: 1,
    getNextPageParam: (lastPage: any) => {
      if (lastPage?.data?.pageInfo?.hasNextPage) {
        return lastPage.data.pageInfo.currentPage + 1;
      }
      return undefined;
    },
  });
};


// const { data, fetchNextPage, hasNextPage } = useInfiniteApi('/');
