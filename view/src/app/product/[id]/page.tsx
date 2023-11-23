"use client";
import axios from "axios";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function page({ params }: { params: { id: string } }) {
  return (
    <span
      className="flex justify-center items-center h-11 bg-[#115D8C] cursor-pointer"
      onClick={() => {
        axios.post(`http://localhost:8080/cart`, { idProduct: params.id });
      }}
    >
      <p className="flex gap-3 text-base text-white font-medium">
        <ShoppingBag />
        <span>ADICIONAR AO CARRINHO</span>
      </p>
    </span>
  );
}
