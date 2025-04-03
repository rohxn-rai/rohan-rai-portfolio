import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://www.github.com/rohxn-rai" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rohxnrai/" },
  // { icon: <FaYoutube />, path: "" },
  { icon: <FaEnvelope />, path: "mailto:rohan.rai932@outlook.com" },
  { icon: <FaXTwitter />, path: "https://www.x.com/rohxnrai" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
