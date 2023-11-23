import { ProductType } from "@/type/ProductType";
import axios from "axios";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import { Dispatch, SetStateAction } from "react";
import { Col, Row } from "react-bootstrap";

export interface ProductInCartType extends ProductType {
  quantity?: string;
  idProduct?: string;
}

export default function ProductInCart({
  product,
  productsInCart,
  setProductsInCart,
}: {
  product: ProductInCartType;
  productsInCart: ProductInCartType[];
  setProductsInCart: Dispatch<SetStateAction<ProductInCartType[]>>;
}) {
  return (
    <Row lg={12} className="bg-white h-52 rounded ">
      <Col lg={4} className="h-full">
        <Link href={`/product/${product.idProduct}`}>
          <img
            src={product.srcImg}
            alt={product.name}
            className="w-full h-full object-cover -translate-x-3 rounded-l"
          />
        </Link>
      </Col>
      <Col className="py-4 pr-4">
        <div className="flex justify-between pb-3 relative">
          <p className="text-[#41414D] font-light text-xl">{product.name}</p>
          <Trash2
            className="text-red-600 cursor-pointer absolute right-0"
            onClick={() => {
              const newProductsInCart = productsInCart.filter(
                (p) => p.idProduct !== product.idProduct
              );
              axios.delete(`http://localhost:8080/cart/${product._id}`);
              setProductsInCart(newProductsInCart);
            }}
          />
        </div>
        <p className="text-xs leading-5 pb-6">{product.description}</p>
        <div className="flex justify-between">
          <span>{product.quantity}</span>
          <span className="font-semibold ">R${product.priece},00</span>
        </div>
      </Col>
    </Row>
  );
}
