"use client";

import { useEffect, useMemo } from "react";
import { getProducts } from "../services/getProducts";
import { useInfiniteQuery } from "@tanstack/react-query";
import { metaParams, Serviceskeys, thresholdWindow } from "../contants/index";
import { useSearchParams } from "react-router-dom";

export default function useGetProducts() {
  // nextOffset: response.data.length === limit ? pageParam + limit : null
  const [searchParams] = useSearchParams();

  const search = searchParams.get(metaParams.search) || "";
  const categoryId = searchParams.get(metaParams.categoryId) || "";
  const price_min = searchParams.get(metaParams.price_min) || "";
  const price_max = searchParams.get(metaParams.price_max) || "";

  const {
    data,
    isLoading,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: [Serviceskeys.getProducts, search, categoryId,price_min,price_max],
    queryFn: ({ pageParam = 1 }: { pageParam: number }) =>
      getProducts({ offset: pageParam, search, categoryId ,price_min,price_max }),
    initialPageParam: 1,
    getNextPageParam(lastPage: any, allPages) {
      return lastPage.length === 10 ? allPages.length * 10 : undefined;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    const onScroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      const isReachBottom =
        document.body.scrollHeight - thresholdWindow <= scrolledTo;
      if (isReachBottom && hasNextPage && !isFetchingNextPage && !isFetching) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasNextPage, isFetchingNextPage, isFetching]);

  const productsData = useMemo(() => {
    if (data) {
      return data.pages.flatMap((page) => page);
    } else return [];
  }, [data]);

  //const typedError = error as TypeResponseError | null;

  return {
    productsData,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isFetching,
    error,
    // typedError,
  };
}
