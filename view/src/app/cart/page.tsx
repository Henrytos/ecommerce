"use client";
import ProductInCart, { ProductInCartType } from "@/components/ProductInCart";
import axios from "axios";
import { Undo2 } from "lucide-react";
import { Metadata } from "next";
import { Saira } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function page() {
  const [productsInCart, setProductsInCart] = useState<ProductInCartType[]>(
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
  const quantityProducts = productsInCart.reduce(
    (acum, p) => acum + +p.quantity,
    0
  );
  const productsPriece = productsInCart.reduce(
    (acum, p) => acum + +p.priece * +p.quantity,
    0
  );

  const fretePriece = productsPriece > 250 ? 0 : 40;
  return (
    <Container className="py-10 h-[92vh]">
      <Row className="h-full  gap-3">
        <Col lg={8} className=" h-full overflow-y-auto flex flex-col gap-4">
          <Row lg={12} className="flex flex-col gap-2 -translate-x-3">
            <Link href="/home/0" className="flex gap-2 items-center ">
              <Undo2 className="w-5 h-5 text-[#617480] border-[#617480] border-2 rounded-full" />
              <p className="text-[#617480] text-sm">voltar</p>
            </Link>
            <h2 className="font-medium text-2xl uppercase text-[#41414D]">
              SEU CARRINHO
            </h2>
            <p>
              Total ({quantityProducts}Produtos)
              <span className="font-semibold"> R${productsPriece},00</span>
            </p>
          </Row>
          {productsInCart.map((product) => (
            <ProductInCart
              product={product}
              productsInCart={productsInCart}
              setProductsInCart={setProductsInCart}
            />
          ))}
        </Col>

        <Col className="bg-white flex flex-col justify-between  py-4 px-6">
          <div className="flex flex-col">
            <h2 className={`${saira.className} text-xl font-semibold pb-7`}>
              RESUMO DO PEDIDO
            </h2>
            <span className="flex justify-between pb-3">
              <span>Subtotal de produtos</span>
              <span>R$ {productsPriece},00</span>
            </span>
            <span className="flex justify-between pb-6">
              <span>Entrega</span>
              <span>R$ {fretePriece},00</span>
            </span>
            <hr className="pb-2" />
            <span className="flex justify-between font-semibold pb-10">
              <span>Total</span>
              <span>R$ {productsPriece + fretePriece},00</span>
            </span>
            <button className="w-full h-11 bg-green-600 text-white uppercase text-center font-medium">
              FINALIZAR A COMPRA
            </button>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <span className="uppercase text-[#737380] text-sm border-b-[1px] border-b-[#737380] cursor-pointer ">
              Ajuda
            </span>
            <span className="uppercase text-[#737380] text-sm border-b-[1px] border-b-[#737380] cursor-pointer ">
              reembolsos
            </span>
            <span className="uppercase text-[#737380] text-sm border-b-[1px] border-b-[#737380] cursor-pointer ">
              {" "}
              entregas e frete
            </span>
            <span className="uppercase text-[#737380] text-sm border-b-[1px] border-b-[#737380] cursor-pointer ">
              trocas e devoluções
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
