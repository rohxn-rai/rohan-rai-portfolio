import { TabsContent } from "./ui/tabs";

import { FaGraduationCap } from "react-icons/fa6";

import { ScrollArea } from "@/components/ui/scroll-area";

//  education data

const education = {
  icon: <FaGraduationCap />,
  title: "Education",
  description:
    "I am a 2024 graduate from New Horizon College of Engineering with Bachelor of Engineering in Artificial Intelligence and Machine Learning.",
  items: [
    {
      institution: "Meritshot",
      degree: "Data Science and Machine Learning",
      duration: "Sep 2024 - Present",
      location: "Remote",
    },
    {
      institution: "New Horizon College of Engineering",
      degree: "Bachelor of Engineering - AIML",
      duration: "Sep 2020 - Oct 2024",
      location: "Bengaluru, Karnataka",
    },
    {
      institution: "G D Goenka Public School",
      degree: "CBSE Board - XII",
      duration: "Mar 2019 - Mar 2020",
      location: "New Delhi, Delhi",
    },
    {
      institution: "G D Goenka Public School",
      degree: "CBSE Board - X",
      duration: "Mar 2017 - Mar 2018",
      location: "New Delhi, Delhi",
    },
  ],
};

const Education = () => {
  return (
    <TabsContent value="education" className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{education.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {education.description}
        </p>
        <ScrollArea className="h-[600px]">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {education.items.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-[#232329] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                >
                  <span className="text-purple-700">{item.duration}</span>
                  <h3 className="text-xl min-h-[60px] text-center lg:text-left">
                    {item.degree}
                  </h3>
                  <div className="flex flex-col items-start gap-3 align-text-bottom min-h-[60px]">
                    <p className="text-white/80">{item.institution}</p>
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

export default Education;
