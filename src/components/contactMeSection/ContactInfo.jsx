import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="sowmyas.sanala@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+4917647005368" Image={FiPhone} />
      <SingleInfo text="Berlin, Germany" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
