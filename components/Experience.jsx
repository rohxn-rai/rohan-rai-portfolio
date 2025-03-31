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
      location: "Thane, Maharashtra",
    },
    {
      company: "AI LifeBOT",
      position: "Data Science Intern",
      duration: "Apr 2024 - Jul 2024",
      location: "Noida, Uttar Pradesh",
    },
    {
      company: "RadicalX",
      position: "AI Engineer Intern",
      duration: "Nov 2023 - Feb 2024",
      location: "Remote",
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
        <ScrollArea className="h-[650px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {experience.items.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                >
                  <span className="text-purple-700">{item.duration}</span>
                  <h3 className="text-xl min-w-[260px] min-h-[60px] text-center lg:text-left">
                    {item.position}
                  </h3>
                  <div className="flex flex-col items-start gap-3 align-text-bottom min-h-[60px]">
                    <p className="text-white/80">{item.company}</p>
                    <p className="text-white/50">{item.location}</p>
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
