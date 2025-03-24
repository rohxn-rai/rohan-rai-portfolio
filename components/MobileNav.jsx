"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-purple-700" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-18 mb-24 text-center text-2xl">
          <Link href="/">
            <h1>
              Rohan Rai<span className="text-purple-700">.</span>
            </h1>
          </Link>
        </div>
        <nav></nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
