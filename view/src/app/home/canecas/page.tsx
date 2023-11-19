import axios from "axios";
import { ProductType } from "@/type/ProductType";
import CardProduct from "@/components/CardProduct";
import { Row } from "react-bootstrap";
import NavHomeTop from "@/components/NavHomeTop";
export default async function Home() {
  const products: ProductType[] = await axios
    .get("http://localhost:8080/products")
    .then((res) => res.data);
  const mugs = products.filter((product) => product.type === "caneca");

  return (
    <>
      <NavHomeTop path="canecas" />
      <Row className=" gap-x-8 gap-y-6 ">
        {mugs.map((mug) => (
          <CardProduct product={mug} />
        ))}
      </Row>
    </>
  );
}
