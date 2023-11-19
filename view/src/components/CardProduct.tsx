import { Col } from "react-bootstrap";
import { ProductType } from "../type/ProductType";
import { Saira } from "next/font/google";
import Link from "next/link";

const saira = Saira({ subsets: ["latin"], weight: ["300", "600"] });

export default function CardProduct({ product }: { product: ProductType }) {
  return (
    <Col className="bg-white/40  rounded-t-md p-0 min-w-[256px] max-w-[256px]   w-full min-lg:m-auto">
      <Link href={`/product/${product._id}`}>
        <img
          alt={product.name}
          src={product.srcImg}
          className="object-cover w-full h-72 rounded-t-md"
        />
        <div className="py-2 px-3 flex flex-col gap-2">
          <p className={`${saira.className} text-base text-[#41414D]`}>
            {product.name}
          </p>
          <hr />
          <p className={`${saira.className} text-sm text-black font-semibold`}>
            R$ {product.priece},00
          </p>
        </div>
      </Link>
    </Col>
  );
}
