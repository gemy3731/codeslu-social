"use client";

import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { MdPrivacyTip } from "react-icons/md";
import { VscMention } from "react-icons/vsc";
const SettingSidebar = () => {
  return (
    <div className=" h-[100%] overflow-x-visible overflow-y-auto bg-white border-r border-[#eaeaea] px-8 py-8">
      <h2 className="sectionHeader text-center">Settings</h2>
      <div>
        <ul className="flex flex-col ml-[20px] gap-8 mt-5 text-[#b7b9ba] text-[16px]">
          <li className="flex gap-3 items-center text-[#4c42ab]">
            <Link href="/" className="flex gap-3 items-center">
            <FaUserAlt />
              <span >Edit Profile</span>
            </Link>
          </li>
          <li className="flex gap-3 items-center hover:text-[#4c42ab]">
            <Link href="/live" className="flex gap-3 items-center">
            <IoIosNotifications/>
              <span>Notifications</span>
            </Link>
          </li>
          <li className="flex gap-3 items-center hover:text-[#4c42ab]">
            <Link href="/live" className="flex gap-3 items-center">
            <MdPrivacyTip />
              <span>Privacy</span>
            </Link>
          </li>
          <li className="flex gap-3 items-center hover:text-[#4c42ab]">
            <Link href="/live" className="flex gap-3 items-center">
            <ImBlocked />
              <span>Blocked</span>
            </Link>
          </li>
          <li className="flex gap-3 items-center hover:text-[#4c42ab]">
            <Link href="/live" className="flex gap-3 items-center">
            <VscMention />
              <span>Tags and mentions</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingSidebar;
