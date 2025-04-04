"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhone, FaEnvelope, FaMapLocation } from "react-icons/fa6";

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    desc: "(+91) 971 750 3708",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "rohan.rai932@outlook.com",
  },
  {
    icon: <FaMapLocation />,
    title: "Address",
    desc: "India",
  },
];

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.1, duration: 0.25, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col xl:flex-row gap-[90px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-1 flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-purple-700">Let's work together</h3>
              <p className="text-white/60">
                You can reach out to me for Web Development and Machine Learning
                projects.
              </p>

              {/* input */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="webdev">Web Development</SelectItem>
                    <SelectItem value="dsnml">Data Science</SelectItem>
                    <SelectItem value="design">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}

              <TextArea
                className="h-[200px]"
                placeholder="Type your message here."
              />

              {/* button */}

              <div className="text-right">
                <Button size="md" className="max-w-40">
                  Send message
                </Button>
              </div>
            </form>
          </div>

          {/* info */}

          <div className="flex-1 flex items-center justify-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div
                      className={cn(
                        "w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]",
                        "text-purple-700 rounded-md flex items-center justify-center"
                      )}
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.desc}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
