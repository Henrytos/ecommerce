"use client";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function page({ params }: { params: { id: string } }) {
  const [state, setState] = useState();
  console.log(params.id);
  return (
    <span className="flex justify-center items-center h-11 bg-[#115D8C] cursor-pointer">
      <p className="flex gap-3 text-base text-white font-medium">
        <ShoppingBag />
        <span>ADICIONAR AO CARRINHO</span>
      </p>
    </span>
  );
}
