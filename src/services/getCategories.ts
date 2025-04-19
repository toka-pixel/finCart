import { interceptRequest } from "../helpers/Interceptor";
import { TypeCategory } from "../types/category.type";


export const getCategories = () => {
    
  return interceptRequest<Array<TypeCategory>>({
    url: `categories`,
    options: {
      method: "GET",
    },
  });
};


