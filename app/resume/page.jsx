"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";

import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import AboutMe from "@/components/AboutMe";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.25, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-5">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}

          <div className="min-h-[70vh] w-full">
            {/* experience */}

            <Experience />

            {/* education */}

            <Education />

            {/* skills */}

            <Skills />

            {/* about */}

            <AboutMe />
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
