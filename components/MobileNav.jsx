"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";

import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { links } from "@/data/navLinks";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-purple-700" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-20 mb-24 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Rohan Rai<span className="text-purple-700">.</span>
            </h1>
          </Link>
        </div>

        <VisuallyHidden>
          <DialogTitle>Menu</DialogTitle>
        </VisuallyHidden>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-purple-700 border-b-2 border-purple-700"
                } text-xl capitalize hover:text-purple-300 transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
