"use client";

import { ProductType } from "@/type/ProductType";
import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

export const ProductsContext = createContext([] as ProductType[]);

export default function ProductsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [products, setProducts] = useState([] as ProductType[]);

  const mixArray = (arr: ProductType[]): ProductType[] => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const dataFetch = async () => {
    const products = await axios
      .get("http://localhost:8080/products")
      .then((res) => res.data);

    setProducts(mixArray(products));
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
