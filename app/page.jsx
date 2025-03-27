import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container xl:mx-auto px-5 h-full">
        <div className="flex flex-col xl:flex-row  items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}

          <div className="text-center xl:text-left order-2 xl:order-none">
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

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/resume/Resume_Rohan_Rai.pdf"
                download="Resume_Rohan_Rai.pdf"
              >
                <Button
                  variant="outline"
                  size="xl"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
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

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
