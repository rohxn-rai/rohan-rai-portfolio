"use client";

import {
  FaPython,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa6";

import { VscVscode } from "react-icons/vsc";
import {
  SiTypescript,
  SiScikitlearn,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

// about data

const about = {
  title: "About Me",
  description: "",
  info: [
    {
      fieldName: "Name",
      FieldValue: "Rohan Rai",
    },
    {
      fieldName: "Phone",
      FieldValue: "(+91) 971 750 3708",
    },
    {
      fieldName: "Email",
      FieldValue: "rohan.rai932@gmail.com",
    },
    {
      fieldName: "Experience",
      FieldValue: "1 Year",
    },
    {
      fieldName: "Nationality",
      FieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      FieldValue: "Englsih, Hindi",
    },
  ],
};

// skills data

const skill = {
  title: "Skills",
  description:
    "I am a self-taught developer and I have been coding for 3+ years. I take challenges head-on and I am always eager to learn new technologies.",
  info: [
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <SiNextdotjs />,
      name: "NEXTJS",
    },
    {
      icon: <SiScikitlearn />,
      name: "Scikit-Learn",
    },
    {
      icon: <GrMysql />,
      name: "MySQL",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <VscVscode />,
      name: "Vscode",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
