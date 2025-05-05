// "use client"

import { HiDotsHorizontal } from "react-icons/hi";
import img from "@/app/assets/profile.jpg";
import img2 from "@/app/assets/backgroundLogin.jpg";
import img3 from "@/app/assets/bgLogin2.jpg";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
// import { useEffect } from "react";

const notifis = [
  {
    image: img,
    type: "follow",
    name: "John Doe",
    message: "started following you.",
    time: "2h",
    status: "following",
    isRead: false,
  },
  {
    image: img,
    type: "story",
    name: "Mohamed Gamal",
    message: "liked your story.",
    time: "1h",
    status: "like",
    isRead: true,
    myImage: img2,
  },
  {
    image: img,
    type: "post",
    name: "Osama Ahmed",
    message: "commented on your post.",
    time: "1w",
    status: "comment",
    isRead: false,
    myImage: img3,
  },
  {
    image: img,
    type: "follow",
    name: "Osama Ahmed",
    message: "started following you.",
    time: "1w",
    status: "follow",
    isRead: false,
    myImage: img3,
  },
];

const Notifications = () => {

  

  return (
    <section className=" container mx-auto flex justify-center items-start py-10 sm:px-10">
      <div className="bg-white  max-w-[750px] w-full p-6 rounded-3xl shadow-xl">
        <div className="flex justify-between items-baseline">
          <h2 className="sectionHeader">Notifications</h2>
          <button className="text-[1.3rem] text-[#4c42ab]">
            <HiDotsHorizontal />
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          {notifis.map((notification, index) => (
            <div
              key={index}
              className="flex gap-4 items-center justify-between py-2"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={notification.image}
                  alt=""
                  className="w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] text-[14px] sm:text-[16px] rounded-full"
                ></Image>
                <p className='text-black'>
                  <span className="font-semibold text-[16px] sm:text-[18px]">
                    {notification.name}{" "}
                  </span>
                  {notification.message}{" "}
                  <span className="text-[#919293] text-[14px] sm:text-[12px]">
                    {notification.time}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                {notification.type === "follow" ? (
                  <button
                    className={
                      notification.status == "following"
                        ? "bg-[#686868] hover:bg-[#7e7e7e] text-white py-2 px-4 rounded-full"
                        : "bg-[--main-color] hover:bg-[#6155d2] text-white py-2 px-4 rounded-full"
                    }
                  >
                    {notification.status == "following"
                      ? "Following"
                      : "Follow"}
                  </button>
                ) : (
                  notification.myImage && (
                    <Image
                      src={notification.myImage}
                      alt=""
                      className="w-[80px] h-[80px] rounded-xl"
                    ></Image>
                  )
                )}
                {!notification.isRead ? (
                  <GoDotFill className="text-[#4c42ab]" />
                ) : (
                  <GoDotFill className="text-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notifications;
