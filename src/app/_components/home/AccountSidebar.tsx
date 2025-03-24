import { MdHomeFilled,MdOutlineLiveTv } from "react-icons/md";
import { FaUserAlt,FaUserFriends } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import {IoMdSettings,IoIosNotifications } from "react-icons/io";
import { BsCameraReelsFill } from "react-icons/bs";

const AccountSidebar = ({isOpenDelay}:{isOpenDelay:boolean}) => {
  return (
    <div className="mt-10">
              <h3 className={isOpenDelay?'indent-3 font-semibold text-[18px] block':"hidden"}>Account</h3>
              <ul className="flex flex-col ml-[20px] gap-8 mt-5 text-[#b7b9ba] group-[.is-open]:ml-[0] group-[.is-open]:items-center">
                <li className="flex gap-3 items-center text-[#4c42ab]"><MdHomeFilled className={`text-[20px] ${!isOpenDelay&&"sidebarIcon"}`} /><span className={isOpenDelay?'block':"hidden"}>Home</span></li>
                <li className="flex gap-3 items-center hover:text-[#4c42ab]"><MdOutlineLiveTv className={`text-[20px] ${!isOpenDelay&&"sidebarIcon"}`} /> <span className={isOpenDelay?'block':"hidden"}>Live</span></li>
                <li className="flex gap-3 items-center hover:text-[#4c42ab]"><BsCameraReelsFill className={`text-[20px] ${!isOpenDelay&&"sidebarIcon"}`} /> <span className={isOpenDelay?'block':"hidden"}>Reels</span></li>
                <li className="flex gap-3 items-center hover:text-[#4c42ab]"><FaUserFriends className={`text-[20px] ${!isOpenDelay&&"sidebarIcon"}`} /> <span className={isOpenDelay?'block':"hidden"}>Friends</span></li>
                <li className="flex gap-3 items-center hover:text-[#4c42ab]"><IoIosNotifications className={`text-[20px] ${!isOpenDelay&&"sidebarIcon"}`} /> <span className={isOpenDelay?'block':"hidden"}>Notifications</span></li>
                <li className="flex gap-3 items-center hover:text-[#4c42ab]"><LuMessageCircleMore className={`text-[20px] ${!isOpenDelay&&"sidebarIcon"}`} /><span className={isOpenDelay?'block':"hidden"}>Messages</span></li>
                <li className="flex gap-3 items-center hover:text-[#4c42ab]"><FaHeart className={`text-[20px] ${!isOpenDelay&&"sidebarIcon"}`} /><span className={isOpenDelay?'block':"hidden"}>Activity</span></li>
                <li className="flex gap-3 items-center hover:text-[#4c42ab]"><FaUserAlt className={`text-[20px] ${!isOpenDelay&&"sidebarIcon"}`} /> <span className={isOpenDelay?'block':"hidden"}>My Profile</span></li>
                <li className="flex gap-3 items-center hover:text-[#4c42ab]"><IoMdSettings className={`text-[20px] ${!isOpenDelay&&"sidebarIcon"}`} /><span className={isOpenDelay?'block':"hidden"}>Settings</span></li>
              </ul>
            </div>
  )
}

export default AccountSidebar