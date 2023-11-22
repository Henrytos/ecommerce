import {
  ProductsContext,
  ProductsContextType,
} from "@/contexts/ContextProducts";
import { useContext } from "react";

export function useProducts() {
  const {
    camisetas,
    canecas,
    products,
    setCamisetas,
    setCanecas,
    setProducts,
  }: ProductsContextType = useContext(ProductsContext);
  return {
    camisetas,
    canecas,
    products,
    setCamisetas,
    setCanecas,
    setProducts,
  };
}
