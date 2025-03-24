import { MdHomeFilled } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";

const GroupSidebar = ({isOpenDelay}:{isOpenDelay:boolean}) => {
  return (
    <div className={`mt-10  ${isOpenDelay?"":"hidden"}`}>
          <h3 className={isOpenDelay?'indent-3 font-semibold text-[18px] block':"hidden"}>Groups</h3>
          <ul className="flex flex-col ml-[20px] gap-8 mt-5 text-[#b7b9ba] group-[.is-open]:ml-[0] group-[.is-open]:items-center">
            <li className="flex gap-3 items-center hover:text-[#4c42ab]"><MdHomeFilled className={`text-[20px] ${!isOpenDelay&&"sidebarIcon"}`} /><span className={isOpenDelay?'block':"hidden"}>Figma Communite</span></li>
            <li className="flex gap-3 items-center hover:text-[#4c42ab]"><FaUserAlt className={`text-[20px] ${!isOpenDelay&&"sidebarIcon"}`} /> <span className={isOpenDelay?'block':"hidden"}>Frontend Developers</span></li>
            <li className="flex gap-3 items-center hover:text-[#4c42ab]"><LuMessageCircleMore className={`text-[20px] ${!isOpenDelay&&"sidebarIcon"}`} /><span className={isOpenDelay?'block':"hidden"}>Backend Developers</span></li>
            <li className="flex gap-3 mb-10 items-center hover:text-[#4c42ab]"><span className={isOpenDelay?'block':"hidden"}>See All...</span></li>
          </ul>
        </div>
  )
}

export default GroupSidebar