"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of experience",
  },
  {
    num: 4,
    text: "Projects completed",
  },
  {
    num: 10,
    text: "Skillset mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={1.5}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
