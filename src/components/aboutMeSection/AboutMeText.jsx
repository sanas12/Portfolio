import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Sowmya Sanala, a dedicated and enthusiastic tech professional from
        Berlin. With 7 years of robust experience working as a Quality Assurance
        (QA) Engineer, I've honed my skills in ensuring software reliability,
        performance, and excellence. Driven by a passion for continuous learning
        and professional growth, I’ve embarked on an exciting journey to expand
        my expertise by taking a comprehensive Full Stack Developer course.{" "}
        <br />
        This transition marks a significant step in my career, enabling me to
        explore new opportunities and challenges in the realm of software
        development. Passionate about creating innovative web solutions that
        make a difference. Specializing in modern frameworks and clean,
        efficient code.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
