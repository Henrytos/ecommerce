import Link from "next/link";

export default function NavHomeTop({ path }: { path: string }) {
  return (
    <div className=" flex flex-col gap-6 py-8">
      <div className="w-full flex justify-between">
        <div className="flex gap-10">
          <Link
            href="/home"
            className={`${
              path == "home"
                ? "text-[#41414D] border-b-orange-500 border-b-4 font-bold"
                : "text-[#737380]"
            }`}
          >
            TODOS OS PRODUTOS
          </Link>
          <Link
            href="/home/camisetas"
            className={`${
              path == "camisetas"
                ? "text-[#41414D] border-b-orange-500 border-b-4 font-bold"
                : "text-[#737380]"
            }`}
          >
            CAMISETAS
          </Link>
          <Link
            href="/home/canecas"
            className={`${
              path == "canecas"
                ? "text-[#41414D] border-b-orange-500 border-b-4 font-bold"
                : "text-[#737380]"
            }`}
          >
            CANECAS
          </Link>
        </div>

        <select className="p-1 bg-[#9595951A]/5 text-[#737380]">
          <optgroup label="Organizar por">
            <option value="">Novidade</option>
            <option value="">Preço:Maior-Menor</option>
            <option value="">Preço:Menor-Maior</option>
            <option value="">Mais vendidos</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
}
