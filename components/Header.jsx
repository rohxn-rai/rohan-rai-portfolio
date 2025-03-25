import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <header className="py-8 lg:py-12 text-white">
      <div className="container xl:mx-auto lg:mx-auto px-5 flex justify-between items-center">
        {/* lgoo */}

        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Rohan Rai<span className="text-purple-700">.</span>
          </h1>
        </Link>

        {/* destop navigation */}

        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile navigation */}

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
