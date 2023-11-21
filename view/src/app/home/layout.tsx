import ProductsProvider from "@/contexts/ContextProducts";
import { ReactNode } from "react";
import { Container } from "react-bootstrap";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ProductsProvider>
        <Container>{children}</Container>;
      </ProductsProvider>
    </>
  );
}
