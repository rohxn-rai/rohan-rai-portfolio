"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const projects = [
  {
    num: "01",
    category: "ML",
    title: "Reflair - Reddit Flair Prediction",
    description:
      "This is a Project for prediction of flairs in each subreddit submissions. It used PRAW and the Reddit API to fetch data from reddit and then passes the data to the Model for prediction.",
    stack: [
      { name: "Py" },
      { name: "Flask" },
      { name: "JavaScript" },
      { name: "DS" },
      { name: "ML" },
    ],
    image: "/work/Reflair/test1.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "ML",
    title: "Reflair - Reddit Flair Prediction",
    description:
      "This is a Project weather focast prediction. This project is able to predict the weather forcast of the next 7 days with an accuracy of 98% and the next 14 days with am accuracy of 94%.",
    stack: [
      { name: "Py" },
      { name: "ML" },
      { name: "ReactJS" },
      { name: "MongoDB" },
    ],
    image: "/work/Reflair/test2.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "ML",
    title: "Reflair - Reddit Flair Prediction",
    description:
      "This is a Project weather focast prediction. This project is able to predict the weather forcast of the next 7 days with an accuracy of 98% and the next 14 days with am accuracy of 94%.",
    stack: [
      { name: "Py" },
      { name: "ML" },
      { name: "ReactJS" },
      { name: "MongoDB" },
    ],
    image: "/work/Reflair/test3.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.1, duration: 0.25, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[45%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col h-[50%]">
              <div className="flex flex-col gap-[30px] group">
                {/* outline Num */}

                <div className="text-6xl leading-none font-extrabold text-transparent [-webkit-text-stroke:1px_#fff]">
                  {project.num}
                </div>

                {/* project category */}

                <h2 className="text-4xl font-bold leading-none text-white group-hover:text-purple-700 transition-all duration-500 capitalize">
                  {project.category} project
                </h2>

                {/* project title */}

                <h3 className="text-3xl leading-none text-white capitalize">
                  {project.title}
                </h3>

                {/* project description */}

                <p className="text-white/60">{project.description}</p>

                {/* stack */}

                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-purple-700">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* border */}

              <div className="border border-white/20" />

              {/* buttons */}

              <div className="flex items-center gap-4 pt-6">
                {/* live project */}

                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-purple-700" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github */}

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-purple-700" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[55%]">
            <Swiper
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[360px] md:h-[554] xl:h-[460px] relative group flex justify-center items-center bg-purple-50/20">
                      {/* overlay */}

                      <div></div>

                      {/* image */}

                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          quality={100}
                          className=" object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
