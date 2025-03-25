import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container xl:mx-auto lg:mx-auto px-5 h-full">
        <div className="flex flex-col xl:flex-row lg:flex-row items-center justify-between xl:pt-8 xl:pb-24 lg:pt-8 lg:pb-24">
          {/* text */}

          <div>
            <span className="text-xl">Software Developer</span>

            <h1 className="h1">
              Hello I'm
              <br />
              <span className="text-purple-700">Rohan Rai</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a Software Developer based in India. I have a passion for web
              development and Machine Learning, and I love to explore and create
              new things.
            </p>

            {/* socials */}

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 lg:mb-0">Socials</div>
            </div>
          </div>

          {/* photo */}

          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
