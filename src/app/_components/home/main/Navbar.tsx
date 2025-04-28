"use client";

import Searchbar from "./Searchbar";
import { useSelector } from "react-redux";
import { store } from "@/lib/Redux/Store";

const Navbar = () => {
    const { sidebarWidth } = useSelector(
        (reduxStore: ReturnType<typeof store.getState>) => reduxStore.sidebarWidth
      );
      
      // console.log(sidebarWidth, "sidebarWidth");

      
  return (
    <nav
        className="sticky top-0 px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4 z-20 bg-[#f6faff] "
        style={{ left: `${sidebarWidth}px` }}
      >
        <Searchbar />
        <div className="flex items-center gap-2">
            <h4 className="text-[16px] sm:text-[24px] font-medium text-[#4c42ab]">John Doe</h4>
        </div>
        
      </nav>
  )
}

export default Navbar