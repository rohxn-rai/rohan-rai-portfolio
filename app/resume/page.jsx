"use client";

import {
  FaPython,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import {
  SiTypescript,
  SiScikitlearn,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

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

// experience data

const experience = {
  icons: <FaBriefcase />,
  title: "Experience",
  description: "I am a MERN stack developer at Digi-Safari LLC.",
  info: [
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

// skills data

const skill = {
  title: "Skills",
  description:
    "I am a self-taught developer and I have been coding for 3+ years. I take challenges head-on and I am always eager to learn new technologies.",
  info: [
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

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
