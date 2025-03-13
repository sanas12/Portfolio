import MainText from "./MainText";
import SowPic from "./SowPic";

const SowMain = () => {
  return (
    <div className=" pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <MainText />
        <SowPic />
      </div>
    </div>
  );
};

export default SowMain;