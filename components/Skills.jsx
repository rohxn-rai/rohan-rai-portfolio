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

const Skills = () => {
  return (
    <TabsContent value="skills" className="w-full h-full">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{skills.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {skills.description}
          </p>
        </div>
        <ul>
          {skills.skillset.map((skill, index) => {
            return <li key={index}>{skill.name}</li>;
          })}
        </ul>
      </div>
    </TabsContent>
  );
};

export default Skills;
