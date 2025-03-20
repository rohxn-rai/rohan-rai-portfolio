import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container max-auto">
        {/* lgoo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Rohan Rai<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* destop navigation */}
      </div>
    </header>
  );
};

export default Header;
