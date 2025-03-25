import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";

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
              I'm a Software Developer based in India. I have a passion for Web
              Development and Machine Learning, and I love to explore, learn and
              create new things.
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

              <div className="mb-8 lg:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles={`w-9 h-9 border border-purple-700
                    rounded-full flex justify-center items-center
                    text-purple-700 text-base hover:bg-purple-700
                    hover:text-primary hover:transition-all duration-500`}
                />
              </div>
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
