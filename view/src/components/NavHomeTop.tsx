import Link from "next/link";
import { ReactNode } from "react";

export default function NavHomeTop({
  path,
  children,
}: {
  path: string;
  children?: ReactNode;
}) {
  return (
    <div className=" flex flex-col gap-6 py-8">
      <div className="w-full flex justify-between">
        <div className="flex gap-10">
          <Link
            href="/home/0"
            className={`${
              path == "home"
                ? "text-[#41414D] border-b-orange-500 border-b-4 font-bold"
                : "text-[#737380]"
            }`}
          >
            TODOS OS PRODUTOS
          </Link>
          <Link
            href="/home/camisetas/0"
            className={`${
              path == "camisetas"
                ? "text-[#41414D] border-b-orange-500 border-b-4 font-bold"
                : "text-[#737380]"
            }`}
          >
            CAMISETAS
          </Link>
          <Link
            href="/home/canecas/0"
            className={`${
              path == "canecas"
                ? "text-[#41414D] border-b-orange-500 border-b-4 font-bold"
                : "text-[#737380]"
            }`}
          >
            CANECAS
          </Link>
        </div>

        {children}
      </div>
    </div>
  );
}
