"use client";
import axios from "axios";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Toast } from "react-bootstrap";

export default function page({ params }: { params: { id: string } }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Toast
        className="absolute right-0 bottom-14"
        onClose={() => setShow(false)}
        show={show}
        delay={1000}
        autohide
      >
        <Toast.Body className=" bg-green-600 text-white">Sucsess</Toast.Body>
      </Toast>
      <span
        className=" flex justify-center  h-auto bg-[#115D8C] cursor-pointer"
        onClick={() => {
          setShow(true);
          axios.post(`http://localhost:8080/cart`, { idProduct: params.id });
        }}
      >
        <p className="flex gap-3 h-full py-1 translate-y-2 text-base text-white font-medium">
          <ShoppingBag />
          <span>ADICIONAR AO CARRINHO</span>
        </p>
      </span>
    </div>
  );
}
