import { TabsContent } from "./ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";

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

const AboutMe = () => {
  return (
    <TabsContent value="about" className="w-full">
      about
    </TabsContent>
  );
};

export default AboutMe;
