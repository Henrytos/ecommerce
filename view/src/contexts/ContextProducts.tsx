"use client";

import { ProductType } from "@/type/ProductType";
import axios from "axios";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export type ProductsContextType = {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
  camisetas: ProductType[];
  setCamisetas: Dispatch<SetStateAction<ProductType[]>>;
  canecas: ProductType[];
  setCanecas: Dispatch<SetStateAction<ProductType[]>>;
};

export const ProductsContext = createContext({} as ProductsContextType);

export default function ProductsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [products, setProducts] = useState([] as ProductType[]);
  const [camisetas, setCamisetas] = useState([] as ProductType[]);
  const [canecas, setCanecas] = useState([] as ProductType[]);

  const mixArray = (arr: ProductType[]): ProductType[] => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const dataFetch = async () => {
    const products: ProductType[] = await axios
      .get("http://localhost:8080/products")
      .then((res) => res.data);
    const camisetas: ProductType[] = products.filter(
      (product) => product.type === "camiseta"
    );
    const canecas: ProductType[] = products.filter(
      (product) => product.type === "caneca"
    );
    setProducts(mixArray(products));
    setCamisetas(camisetas);
    setCanecas(canecas);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        camisetas,
        setCamisetas,
        canecas,
        setCanecas,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
