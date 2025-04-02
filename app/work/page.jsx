"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const projects = [
  {
    num: "01",
    category: "Machine Learning",
    title: "Reflair - Reddit Flair Prediction",
    description:
      "This is a Project for prediction of flairs in each subreddit submissions.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Python" },
      { name: "Flask" },
      { name: "JavaScript" },
      { name: "Data Science" },
      { name: "Machine Learning" },
    ],
    image: "/work/Reflair/test1.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Machine Learning",
    title: "Reflair - Reddit Flair Prediction",
    description:
      "This is a Project weather focast prediction. This project is able to predict the weather forcast of the next 7 days with an accuracy of 98% and the next 14 days with am accuracy of 94%.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Python" },
      { name: "Machine Learning" },
      { name: "ReactJS" },
      { name: "MongoDB" },
    ],
    image: "/work/Reflair/test2.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  return <div>work page</div>;
};

export default Work;
