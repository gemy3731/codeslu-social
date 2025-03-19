"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
export default function ThemeToggleBtn({isOpened}: {isOpened:boolean}) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth <= 768);
    };

    checkScreenSize(); // Check on mount
    window.addEventListener("resize", checkScreenSize); // Update on resize

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [])
  return (
  <div className={`${isOpened&&(isLargeScreen&&isOpened)?'flex justify-center items-center mx-auto mt-2':''}`}>
      <button
      className="flex items-center gap-1"
        onClick={() => {
          setTheme(currentTheme === "dark" ? "light" : "dark");
        }}
      >
        {currentTheme === "dark" ? <><CiLight className="text-[20px]" color="white" /></> :<><CiDark className="text-[20px]" color="black"/></>}
      </button>
    </div>
  );
}