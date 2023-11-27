"use client";
import CardProduct from "@/components/CardProduct";
import NavHomeBottom from "@/components/NavHomeBottom";
import NavHomeTop from "@/components/NavHomeTop";
import { useProducts } from "@/hooks/useProducts";
import { Row } from "react-bootstrap";

export default function page({ params }: { params: { id: string } }) {
  const { canecas } = useProducts();

  const targetProducts = canecas.slice(+params.id * 12, +params.id * 12 + 12);

  const linksPages = canecas.filter((_, i) => i % 12 == 0);

  if (+params.id == 5) throw new Error("Page not found");
  return (
    <>
      <NavHomeTop path="canecas">
        <select className="p-1 bg-[#9595951A]/5 text-[#737380]">
          <optgroup label="Organizar por">
            <option value="">Novidade</option>
            <option value="">Preço:Maior-Menor</option>
            <option value="">Preço:Menor-Maior</option>
            <option value="">Mais vendidos</option>
          </optgroup>
        </select>
      </NavHomeTop>
      <NavHomeBottom
        linksPages={linksPages}
        href="/home/canecas"
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
        href="/home/canecas"
        paramsId={params.id}
      />
    </>
  );
}
