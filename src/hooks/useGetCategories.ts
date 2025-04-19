import { useQuery } from "@tanstack/react-query";
import { Serviceskeys } from "../contants";
import { getCategories } from "../services/getCategories";

export const useGetCategories = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: [Serviceskeys.getCategories],
    queryFn: getCategories,
  });

  return {
    isLoading,
    isError,
    data,
    error,
  };
};
