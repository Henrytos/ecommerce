"use client";

import NavHomeTop from "@/components/NavHomeTop";

export default function error() {
  return (
    <>
      <div className="relative w-full h-[89vh]">
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
        <img
          src="https://media.tenor.com/r2DGstl2IWEAAAAC/raiden-shogun-ei.gif"
          alt="error 404"
          className="w-[50%] h-auto absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          "
        />
      </div>
    </>
  );
}
