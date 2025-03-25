"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/data/navLinks";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-purple-700 border-b-2 border-purple-700"
            } capitalize font-medium hover:text-purple-300 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
