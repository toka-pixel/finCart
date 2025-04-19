"use client";
import { useContext } from "react";

import { CartContext } from "../providers/cartProvider";

export default function useCartContext() {
  return useContext(CartContext);
}
