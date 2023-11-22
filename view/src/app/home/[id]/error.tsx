"use client";

import NavHomeTop from "@/components/NavHomeTop";

export default function error() {
  return (
    <>
      <div className="relative w-full h-[89vh]">
        <NavHomeTop path="/home" />
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
