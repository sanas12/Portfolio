import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Developer",
    company: "Tickkl-UG",
    date: "Nov 2023 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Quality Assurance Engineer",
    company: "Cortado Holding AG",
    date: "Dec 2021 - Oct 2023",
    responsibilities: [
      "Developed and maintained automated test suites using Selenium, Appium, and BDD frameworks.",
      "Optimized testing workflows, increasing test coverage by 25%",
    ],
  },
  {
    job: "Quality Analyst",
    company: "Cognizant",
    date: "Mar 2017 - Feb 2019",
    responsibilities: [
      "Identified critical defects early in the development cycle, reducing production issues.",
      "Collaborated with project managers and developers to align testing strategies with sprint objectives.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
