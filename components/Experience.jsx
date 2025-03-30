import { TabsContent } from "./ui/tabs";

import { FaBriefcase } from "react-icons/fa6";

import { ScrollArea } from "@/components/ui/scroll-area";

// experience data

const experience = {
  icons: <FaBriefcase />,
  title: "Experience",
  description: "I am a MERN stack developer at Digi-Safari LLC.",
  items: [
    {
      company: "Digi-Safari LLC",
      position: "MERN Stack Developer",
      duration: "Dec 2024 - Present",
    },
    {
      company: "AI LifeBOT",
      position: "Data Science Intern",
      duration: "Apr 2024 - Jul 2024",
    },
    {
      company: "RadicalX",
      position: "AI Engineer Intern",
      duration: "Nov 2023 - Feb 2024",
    },
  ],
};

const Experience = () => {
  return (
    <TabsContent value="experience" className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{experience.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {experience.description}
        </p>
        <ScrollArea className="h-[400px]">
          <ul>
            {experience.items.map((item, index) => {
              return (
                <li key={index}>
                  <span>{item.duration}</span>
                  <h3>{item.position}</h3>
                  <div>
                    <span></span>
                    <p>{item.company}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </div>
    </TabsContent>
  );
};

export default Experience;
