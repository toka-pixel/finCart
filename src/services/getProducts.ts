import { interceptRequest } from "../helpers/Interceptor";
import { TypeProduct } from "../types/product.type";

export const getProducts = ({
  offset = 0,
  search,
  categoryId,
  price_min,
  price_max,
}: {
  offset: number;
  search: string;
  categoryId: string;
  price_min: string;
  price_max: string;
}) => {
  return interceptRequest<Array<TypeProduct>>({
    url: `Products?title=${search}&offset=${offset}&limit=10&categoryId=${categoryId}&=${price_min}&=${price_max}`,
    options: {
      method: "GET",
    },
  });
};
