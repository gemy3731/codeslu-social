import { MdHomeFilled, MdOutlineLiveTv } from "react-icons/md";
import { FaUserAlt, FaUserFriends } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { IoMdSettings, IoIosNotifications } from "react-icons/io";
import { BsCameraReelsFill } from "react-icons/bs";
import Link from "next/link";

const AccountSidebar = ({ isOpenDelay }: { isOpenDelay: boolean }) => {
  return (
    <div className="mt-10">
      <h3
        className={
          isOpenDelay
            ? "indent-3 font-semibold text-[18px] text-[#000] block"
            : "hidden"
        }
      >
        Account
      </h3>
      <ul className="flex flex-col ml-[20px] gap-8 mt-5 text-[#b7b9ba] group-[.is-open]:ml-[0] group-[.is-open]:items-center">
        <li className="flex gap-3 items-center text-[#4c42ab]">
          <Link href="/" className="flex gap-3 items-center">
          <MdHomeFilled
            className={`text-[20px] ${!isOpenDelay && "sidebarIcon"}`}
          />
            <span className={isOpenDelay ? "block" : "hidden"}>Home</span>
          </Link>
        </li>


        <li className="flex gap-3 items-center hover:text-[#4c42ab]">
          <Link href="/live" className="flex gap-3 items-center">
          <MdOutlineLiveTv
            className={`text-[20px] ${!isOpenDelay && "sidebarIcon"}`}
          />
            <span className={isOpenDelay ? "block" : "hidden"}>Live</span>
          </Link>
        </li>



        <li className="flex gap-3 items-center hover:text-[#4c42ab]">
          <Link href="/reels" className="flex gap-3 items-center">
          <BsCameraReelsFill
            className={`text-[20px] ${!isOpenDelay && "sidebarIcon"}`}
          />
            <span className={isOpenDelay ? "block" : "hidden"}>Reels</span>
          </Link>
        </li>



        <li className="flex gap-3 items-center hover:text-[#4c42ab]">
          <Link href="/friends" className="flex gap-3 items-center">
          <FaUserFriends
            className={`text-[20px] ${!isOpenDelay && "sidebarIcon"}`}
          />
            <span className={isOpenDelay ? "block" : "hidden"}>Friends</span>
          </Link>
        </li>



        <li className="flex gap-3 items-center hover:text-[#4c42ab]">
          <Link href="/notifications" className="flex gap-3 items-center">
          <IoIosNotifications
            className={`text-[20px] ${!isOpenDelay && "sidebarIcon"}`}
          />
            <span className={isOpenDelay ? "block" : "hidden"}>
              Notifications
            </span>
          </Link>
        </li>



        <li className="flex gap-3 items-center hover:text-[#4c42ab]">
          <Link href="/messages" className="flex gap-3 items-center">
          <LuMessageCircleMore
            className={`text-[20px] ${!isOpenDelay && "sidebarIcon"}`}
          />
            <span className={isOpenDelay ? "block" : "hidden"}>Messages</span>
          </Link>
        </li>



        <li className="flex gap-3 items-center hover:text-[#4c42ab]">
          <Link href="/activity" className="flex gap-3 items-center">
          <FaHeart className={`text-[20px] ${!isOpenDelay && "sidebarIcon"}`} />
            <span className={isOpenDelay ? "block" : "hidden"}>Activity</span>
          </Link>
        </li>



        <li className="flex gap-3 items-center hover:text-[#4c42ab]">
          <Link href="/profile" className="flex gap-3 items-center">
          <FaUserAlt
            className={`text-[20px] ${!isOpenDelay && "sidebarIcon"}`}
          />
            <span className={isOpenDelay ? "block" : "hidden"}>Profile</span>
          </Link>
        </li>



        <li className="flex gap-3 items-center hover:text-[#4c42ab]">
          <Link href="/settings/edit" className="flex gap-3 items-center">
          <IoMdSettings
            className={`text-[20px] ${!isOpenDelay && "sidebarIcon"}`}
          />
            <span className={isOpenDelay ? "block" : "hidden"}>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
