import { finCart } from "../contants";
import { CartProduct } from "../types/cart.type";
import { getLocalStorageItem, setLocalStorageItem } from "../utils/storage";

export default class CookieHelper {
 static setCartProducts = ({value}:{value: Array<CartProduct>}) => {
    setLocalStorageItem({ key: finCart, value });
  };

  static getCartProducts = () => {
    return getLocalStorageItem({ key: finCart });
  };
}
