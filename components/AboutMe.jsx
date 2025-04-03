import { TabsContent } from "./ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";

// about data

const about = {
  title: "About Me",
  description: "",
  item: [
    {
      fieldName: "Name",
      fieldValue: "Rohan Rai",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 971 750 3708",
    },
    {
      fieldName: "Email",
      fieldValue: "rohan.rai932@outlook.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "Englsih, Hindi",
    },
  ],
};

const AboutMe = () => {
  return (
    <TabsContent value="about" className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className="w-full max-w-[1200px] text-white/60 mx-auto xl:mx-0">
          {about.description}
        </p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-16 max-w-[750px] mx-auto xl:mx-0">
          {about.item.map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-center justify-center xl:justify-start gap-4"
              >
                <span className="text-white/60">{item.fieldName}</span>
                <span className="text-xl">{item.fieldValue}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </TabsContent>
  );
};

export default AboutMe;
