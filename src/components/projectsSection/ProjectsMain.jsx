import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

const projects = [
  {
    name: "MyFlixApp - React",
    year: "Mar2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://incredible-stroopwafel-7a6b01.netlify.app",
  },
  {
    name: "Simple JS App",
    year: "Sept2023",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://sanas12.github.io/Simple-JS-app/",
  },
  {
    name: "Meet-App",
    year: "Jan2024",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://sanas12.github.io/meet/",
  },
  {
    name: "Outfit Oasis",
    year: "May2024",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://outfitoasis.netlify.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
