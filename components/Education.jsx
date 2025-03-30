import { TabsContent } from "./ui/tabs";

import { FaGraduationCap } from "react-icons/fa6";

import { ScrollArea } from "@/components/ui/scroll-area";

//  education data

const education = {
  icon: <FaGraduationCap />,
  title: "Education",
  description:
    "I am a 2024 graduate from New Horizon College of Engineering with Bachelor of Engineering in Artificial Intelligence and Machine Learning.",
  info: [
    {
      institution: "Meritshot",
      major: "Data Science and Machine Learning",
      duration: "Sep 2024 - Present",
    },
    {
      institution: "New Horizon College of Engineering",
      degree: "Bachelor of Engineering",
      major: "Artificial Intelligence and Machine Learning",
      duration: "Sep 2020 - Oct 2024",
    },
    {
      institution: "G D Goenka Public School",
      degree: "CBSE Board",
      major: "XII",
      minor: "PCM with Computer Science",
      duration: "Mar 2019 - Mar 2020",
    },
    {
      institution: "G D Goenka Public School",
      degree: "CBSE Board",
      major: "X",
      duration: "Mar 2017 - Mar 2018",
    },
  ],
};

const Education = () => {
  return (
    <TabsContent value="education" className="w-full">
      education
    </TabsContent>
  );
};

export default Education;
