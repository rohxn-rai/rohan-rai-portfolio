import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "@/components/Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container xl:mx-auto mx-5">
        {/* lgoo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Rohan Rai<span className="text-purple-700">.</span>
          </h1>
        </Link>

        {/* destop navigation */}

        <div className="hidden xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
