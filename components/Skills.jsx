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

import { TabsContent } from "./ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

// skills data

const skills = {
  title: "Skills",
  description:
    "I am a self-taught developer and I have been coding for 3+ years. I take challenges head-on and I am always eager to learn new technologies.",
  skillset: [
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
      icon: <SiNextdotjs />,
      name: "NEXTJS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
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

const Skills = () => {
  return (
    <TabsContent value="skills" className="w-full h-full">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{skills.title}</h3>
          <p className="w-full max-w-[1200px] text-white/60 mx-auto xl:mx-0">
            {skills.description}
          </p>
        </div>
        <ScrollArea className="h-[598px]">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
            {skills.skillset.map((skill, index) => {
              return (
                <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-purple-700 transition-all duration-300">
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </div>
    </TabsContent>
  );
};

export default Skills;
