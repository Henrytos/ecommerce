import { ProductType } from "@/type/ProductType";
import { ShoppingBag, Undo2 } from "lucide-react";
import { Saira } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default async function layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { id: string };
}) {
  const product: ProductType = await fetch(
    `http://localhost:8080/products/${params.id}`
  ).then((res) => res.json());

  return (
    <Container className={`${saira.className} py-8 `}>
      <div className="pb-4">
        <Link href="/" className="flex gap-2 items-center ">
          <Undo2 className="w-5 h-5 text-[#617480] border-[#617480] border-2 rounded-full" />
          <p className="text-[#617480] text-sm">voltar</p>
        </Link>
      </div>
      <Row>
        <Col lg={7}>
          <img
            src={product.srcImg}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </Col>
        <Col lg={5}>
          <section className="flex flex-col justify-between h-full ">
            <section>
              <div>
                <p className="font-normal text-#41414D pb-3">{product.type}</p>
                <h2 className="text-3xl font-light text-[#41414D] pb-1">
                  {product.name}
                </h2>
                <p className="text-xl font-semibold text-[#09090A] pb-6">
                  R$ {product.priece},00
                </p>
                <p className="font-normal text-xs pb-14">
                  *Frete de R$40,00 para todo o Brasil. Grátis para compras
                  acima de R$900,00.
                </p>
              </div>
              <div>
                <h3 className="text-[#737380] font-medium pb-2">DESCRIÇÂO</h3>
                <p className="text-[#41414D] font-normal text-sm">
                  {product.description}
                </p>
              </div>
            </section>
            <div>{children}</div>
          </section>
        </Col>
      </Row>
    </Container>
  );
}
