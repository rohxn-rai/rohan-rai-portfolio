"use client";

import Link from "next/link";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I can build a website from scratch or maintain an existing one. I have experience in building websites using React, Next.js, and Tailwind CSS.",
    href: "",
  },
  {
    num: "02",
    title: "Data Science",
    description:
      "I can analyze data and provide insights using machine learning algorithms. I have experience in using Python, Pandas, and Scikit-learn.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "I can design a user-friendly interface for your website or application. I have experience in using Figma and Adobe XD.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.1, duration: 0.25, ease: "easeInOut" },
          }}
          className="grid grid-col-1 lg:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className={`text-5xl font-extrabold text-transparent
                    [-webkit-text-stroke:1px_#fff] 
                    group-hover:[-webkit-text-stroke:1px_#7e22ce]
                    transition-all duration-500`}
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className={`w-[70px] h-[70px] rounded-full
                    bg-white group-hover:bg-purple-700 transition-all duration-500
                    flex justify-center items-center hover:-rotate-45`}
                  >
                    <BsArrowDownRight className="text-primary text-3xl group" />
                  </Link>
                </div>

                {/* bottom */}

                <h2
                  className={`text-[42px] font-bold leading-none text-white
                  group-hover:text-purple-700 transition-all duration-500`}
                >
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
