import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container xl:mx-auto lg:mx-auto px-5 h-full">
        <div className="flex flex-col xl:flex-row lg:flex-row items-center justify-between xl:pt-8 xl:pb-24 lg:pt-8 lg:pb-24">
          {/* text */}

          <div>
            <span>Software Developer</span>
            <h1 className="text-[48px] lg:text-[80px] leading-[1.1] font-semibold">
              Hello I'm
              <br />
              <span>Rohan Rai</span>
            </h1>
          </div>

          {/* photo */}

          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
