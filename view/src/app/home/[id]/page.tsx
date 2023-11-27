"use client";
import CardProduct from "@/components/CardProduct";
import NavHomeBottom from "@/components/NavHomeBottom";
import NavHomeTop from "@/components/NavHomeTop";
import { useProducts } from "@/hooks/useProducts";
import { Row } from "react-bootstrap";

export default function page({ params }: { params: { id: string } }) {
  const { products } = useProducts();

  const targetProducts = products.slice(+params.id * 12, +params.id * 12 + 12);

  const linksPages = products.filter((product, i) => i % 12 == 0);
  if (+params.id == 5) throw new Error("Page not found");
  return (
    <>
      <NavHomeTop path="home" />
      <NavHomeBottom
        linksPages={linksPages}
        href="/home"
        paramsId={params.id}
      />
      <Row className=" gap-x-8 gap-y-6 ">
        {targetProducts.map((product) => (
          <CardProduct product={product} key={product._id} />
        ))}
      </Row>
      <NavHomeBottom
        isBottom={true}
        linksPages={linksPages}
        href="/home"
        paramsId={params.id}
      />
    </>
  );
}
