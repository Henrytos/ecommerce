import { ProductType } from "@/type/ProductType";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NavHomeBottom({
  isBottom,
  linksPages,
  href,
  paramsId,
}: {
  isBottom?: boolean;
  linksPages: ProductType[];
  href: string;
  paramsId: string;
}) {
  return (
    <div
      className={`${
        isBottom == true ? "py-16" : "pb-3"
      } flex justify-end gap-2 items-center`}
    >
      <div className="flex gap-1">
        {linksPages.map((_, i) => (
          <Link
            href={`${href}/${i}`}
            className={`w-8 h-8
              ${
                i == +paramsId
                  ? "border-[#FFA585] text-[#FFA585] hover:bg-[#FFA585] "
                  : "bg-[#E9E9F0] text-[#737380] hover:bg-[#FFA585] "
              }border-2 flex justify-center items-center rounded-lg  hover:text-white transition-colors`}
          >
            <div>{i + 1}</div>
          </Link>
        ))}

        <div className="flex gap-1">
          <Link
            href={`${href}/${+paramsId - 1}`}
            className="w-8 h-8 bg-[#E9E9F0] text-[#737380] flex justify-center items-center cursor-pointer rounded-lg"
          >
            <ChevronLeft className="  " />
          </Link>
          <Link
            href={`${href}/${+paramsId + 1}`}
            className="w-8 h-8 bg-[#E9E9F0] text-[#737380] flex justify-center items-center cursor-pointer rounded-lg"
          >
            <ChevronRight className="  " />
          </Link>
        </div>
      </div>
    </div>
  );
}
