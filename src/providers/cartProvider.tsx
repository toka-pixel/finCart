import { createContext, ReactNode, useEffect, useState } from "react";
import { CartProduct } from "../types/cart.type";
import CartHelper from "../helpers/CartHelper";

interface CartContextType {
  cart: CartProduct[];
  summary: { totalPrice: number; totalQuantity: number } | undefined;
  addProduct: (product: CartProduct) => void;
  decreaseProduct: ({ id }: { id: number }) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  summary: { totalPrice: 0, totalQuantity: 0 },
  addProduct: () => {},
  decreaseProduct: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [summary, setSummary] = useState<{
    totalPrice: number;
    totalQuantity: number;
  }>();

  useEffect(() => {
    setCart(CartHelper.getCartProducts() ?? []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      CartHelper.setCartProducts({ value: cart });
      const { totalPrice, totalQuantity } = cart.reduce(
        (acc, product) => {
          const price = product.price || 0;
          acc.totalPrice += price * product.quantity;
          acc.totalQuantity += product.quantity;
          return acc;
        },
        { totalPrice: 0, totalQuantity: 0 }
      );
      setSummary((prev) => ({
        ...prev,
        totalPrice,
        totalQuantity,
      }));
    } else {
      setSummary(() => ({
        totalPrice: 0,
        totalQuantity: 0,
      }));
    }
  }, [cart]);

  const addProduct = (item: CartProduct) => {
    setCart((prev) => {
      const existingProduct = prev?.find((product) => product.id === item.id);
      if (existingProduct) {
        return prev.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else return [...prev, item];
    });
  };

  const decreaseProduct = ({ id }: { id: number }) => {
    setCart((prev) => {
      return prev
        .map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        })
        .filter((p) => p.quantity > 0);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        summary,
        addProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
