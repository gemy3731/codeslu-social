"use client";

import Searchbar from "./Searchbar";
import { useSelector } from "react-redux";
import { store } from "@/lib/Redux/Store";
import profileImg from '@/app/assets/profile.jpg'
import Image from "next/image";

const Navbar = () => {
    const { sidebarWidth } = useSelector(
        (reduxStore: ReturnType<typeof store.getState>) => reduxStore.sidebarWidth
      );
      
      console.log(sidebarWidth, "sidebarWidth");

      
  return (
    <nav
        className="fixed top-0 right-0  px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ left: `${sidebarWidth}px` }}
      >
        <div className="flex items-center gap-2">
            <Image src={profileImg} alt="profile" className="rounded-full sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]" />
            <h4 className="text-[16px] sm:text-[24px] font-medium text-[#4c42ab]">John Doe</h4>
        </div>
        <Searchbar />
      </nav>
  )
}

export default Navbar