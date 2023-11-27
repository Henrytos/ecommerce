"use client";
import { ProductInCartType } from "@/components/ProductInCart";
import axios from "axios";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export interface ProductsContextType {
  productsInCart: ProductInCartType[];
  setProductsInCart: Dispatch<SetStateAction<ProductInCartType[]>>;
  addProduct: (id: string) => void;
}
export const ContextCart = createContext({} as ProductsContextType);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [productsInCart, setProductsInCart] = useState(
    [] as ProductInCartType[]
  );
  const fetchData = async () => {
    const productsInCart: ProductInCartType[] = await axios
      .get("http://localhost:8080/cart")
      .then((res) => res.data);
    setProductsInCart(productsInCart.reverse());
  };
  useEffect(() => {
    fetchData();
  }, []);
  const addProduct = (id: string) => {};

  return (
    <ContextCart.Provider
      value={{
        productsInCart,
        setProductsInCart,
        addProduct,
      }}
    >
      {children}
    </ContextCart.Provider>
  );
}
