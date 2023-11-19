import axios from "axios";
import { ProductType } from "@/type/ProductType";
import CardProduct from "@/components/CardProduct";
import { Row } from "react-bootstrap";
import NavHomeTop from "@/components/NavHomeTop";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default async function Home() {
  const products: ProductType[] = await axios
    .get("http://localhost:8080/products")
    .then((res) => res.data);

  const linksPages = products.filter((product, i) => i % 12 == 0);
  console.log(linksPages);
  return (
    <>
      <NavHomeTop path="home" />
      <Row className=" gap-x-8 gap-y-6 ">
        {products.slice(0, 12).map((product) => (
          <CardProduct product={product} />
        ))}
      </Row>

      <div className="py-16 flex justify-end gap-2 items-center">
        <div className="flex gap-1">
          {linksPages.map((product, i) => (
            <Link
              href={`/home/${i}`}
              className="w-8 h-8 border-[#FFA585] border-2 flex justify-center items-center rounded-lg text-[#FFA585] hover:bg-[#FFA585] hover:text-white transition-colors"
            >
              <div>{i + 1}</div>
            </Link>
          ))}

          <div className="flex gap-1">
            <span className="w-8 h-8 bg-[#E9E9F0] text-[#737380] flex justify-center items-center cursor-pointer rounded-lg">
              <ChevronLeft className="  " />
            </span>
            <span className="w-8 h-8 bg-[#E9E9F0] text-[#737380] flex justify-center items-center cursor-pointer rounded-lg">
              <ChevronRight className="  " />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
