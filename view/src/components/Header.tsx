import { Search, ShoppingBag } from "lucide-react";
import { Saira_Stencil_One } from "next/font/google";
import Link from "next/link";
import { Container } from "react-bootstrap";

const saira_title = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});
export default function Header() {
  return (
    <Container className="h-20 bg-white">
      <header className="w-full h-full flex justify-between items-center">
        <Link
          href="/"
          className={`${saira_title.className} text-4xl text-[#5D5D6D]`}
        >
          capputeeno
        </Link>
        <div className="flex gap-6 items-center">
          <label className="flex w-80 bg-[#F3F5F6] py-2 px-4" htmlFor="search">
            <input
              type="text"
              name="search"
              id="search"
              className=" w-full bg-[#F3F5F6] border-none outline-none"
              placeholder="Procurando por algo específico?"
            />
            <Search className="text-[#737380] cursor-pointer" />
          </label>

          <Link href="/cart" className="relative">
            <ShoppingBag className="cursor-pointer" />
            <span className="w-6 h-6 absolute right-0 translate-x-2/4 -translate-y-2/4 bg-red-600 rounded-full flex justify-center items-center text-white text-xs">
              2
            </span>
          </Link>
        </div>
      </header>
    </Container>
  );
}
