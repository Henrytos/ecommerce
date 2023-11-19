import axios from "axios";
import { ProductType } from "@/type/ProductType";
import CardProduct from "@/components/CardProduct";
import NavHomeTop from "@/components/NavHomeTop";
import { Row } from "react-bootstrap";

export default async function Home() {
  const products: ProductType[] = await axios
    .get("http://localhost:8080/products")
    .then((res) => res.data);

  const tShirts = products.filter((product) => product.type === "camiseta");
  return (
    <>
      <NavHomeTop path="camisetas" />
      <Row className=" gap-x-8 gap-y-6 ">
        {tShirts.map((tShirt) => (
          <CardProduct product={tShirt} />
        ))}
      </Row>
    </>
  );
}
